import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const { token } = body;

  if (!token) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  // Database functionality removed - Prisma has been removed from this project
  return new NextResponse(
    "Password reset functionality is not available. Prisma has been removed from this project.",
    { status: 503 }
  );
};
