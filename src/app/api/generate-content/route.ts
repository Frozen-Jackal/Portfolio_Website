import OpenAI from "openai";

export async function POST(req: Request) {
  const body = await req.json();

  const { prompt, apiKey } = body;

  const key = apiKey || process.env.OPENAI_API_KEY;

  if (!key) {
    return new Response(
      JSON.stringify({ error: "API key is required" }),
      { status: 400 }
    );
  }

  const openai = new OpenAI({
    apiKey: key,
  });

  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: prompt,
      model: "gpt-3.5-turbo",
      temperature: 1,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const generatedContent = chatCompletion.choices[0].message?.content;

    return new Response(JSON.stringify(generatedContent));
  } catch (error: any) {
    return new Response(JSON.stringify(error.error?.message || "Error generating content"), { status: 500 });
  }
}
