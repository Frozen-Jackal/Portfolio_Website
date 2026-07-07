import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password } = body;

  if (!email || !password) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  // Database functionality removed - Prisma has been removed from this project
  return new NextResponse(
    "Password reset functionality is not available. Prisma has been removed from this project.",
    { status: 503 }
  );
}
