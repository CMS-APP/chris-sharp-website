/** @format */

import { NextResponse, NextRequest } from "next/server";
import mailjet from "node-mailjet";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const client = new mailjet({
    apiKey: process.env.MAILJET_API_KEY,
    apiSecret: process.env.MAILJET_SECRET_KEY
  });

  try {
    const request = client.post("send", { version: "v3" }).request({
      FromEmail: `${process.env.MAILJET_SENDER_EMAIL}`,
      FromName: "Christopher Sharp",
      Recipients: [
        {
          Email: "christopher.sharp@hotmail.co.uk",
          Name: "Christopher Sharp"
        },
        {
          Email: "nuclearcactus1@gmail.com",
          Name: "Christopher Sharp"
        }
      ],
      Subject: "New message from: " + body.email,
      "Text-part":
        "Email: " +
        body.email +
        "\n" +
        "Name: " +
        body.name +
        "\n" +
        "Message: " +
        body.message
    });

    const result = await request;
    console.log(result.body);
    return NextResponse.json({ message: "Email sent successfully", status: 0 });
  } catch (error) {
    console.error("Mailjet Error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
};
