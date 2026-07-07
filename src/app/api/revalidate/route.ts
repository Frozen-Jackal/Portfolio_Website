import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Sanity webhook functionality removed - Sanity has been removed from this project
    return NextResponse.json({
      status: 503,
      revalidated: false,
      message: "Revalidate functionality is not available. Sanity has been removed from this project.",
    });
  } catch (error: any) {
    console.error(error);
    return new Response(error.message, { status: 500 });
  }
}
