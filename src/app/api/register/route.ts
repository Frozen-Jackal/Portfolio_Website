import { NextResponse } from "next/server";

export async function POST(request: any) {
  const body = await request.json();
  const { name, email, password } = body;

  if (!name || !email || !password) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  // Database functionality removed - Prisma has been removed from this project
  return new NextResponse(
    "Registration functionality is not available. Prisma has been removed from this project.",
    { status: 503 }
  );
}
