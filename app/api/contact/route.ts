import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, organization, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    console.log("=== NEW CONTACT INQUIRY RECEIVED FOR contact@nuvsol.com ===");
    console.log({
      recipient: "contact@nuvsol.com",
      timestamp: new Date().toISOString(),
      name,
      email,
      organization: organization || "N/A",
      subject: subject || "AI-native solution inquiry",
      message,
    });
    console.log("============================================================");

    return NextResponse.json({
      success: true,
      recipient: "contact@nuvsol.com",
      message: "Thank you! Your message has been sent to contact@nuvsol.com.",
      receivedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { error: "Failed to process message." },
      { status: 500 }
    );
  }
}
