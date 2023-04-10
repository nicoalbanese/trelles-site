import { NextResponse } from "next/server";

type RequestBody = {
  name: string;
  email: string;
};

const BASE_URL = "https://api.airtable.com/v0/appcL6sAMpkdP225I/Sign%20Ups";

export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_AIRTABLE_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [{ fields: { Name: body.name, Email: body.email } }],
      }),
    });
  } catch (e) {
    return NextResponse.json({ status: "Error", error: e });
  }

  return NextResponse.json({ status: "success", error: null });
}
