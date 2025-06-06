import { NextResponse } from "next/server";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const guild_id = process.env.NEXT_PUBLIC_GUILD_ID;

export async function GET() {
  // const endpoint = `${base_url}/members/${guild_id}?limit=10&top=true`;
  const endpoint = `${base_url}/members/${guild_id}?limit=200&top=true`;

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },

    });

    if (response.ok) {
      const res = await response.json();

      console.log(res);
      return NextResponse.json({
        data: res,
      });

    } else {
      const error = await response.json();

      return NextResponse.json(
        {
          error,
        },
        {
          status: response.status,
        },
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Failed to connect to the server.",
        error: error,
      },
      {
        status: 500,
      },
    );
  }
}