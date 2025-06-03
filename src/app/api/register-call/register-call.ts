// app/api/register-call/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const response = await fetch('https://api.puretalk.ai/api/calls/web/register', {
      method: 'POST',
      headers: {
        'X-API-KEY': process.env.PURETALK_API_KEY!,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('[Register Call Error]', error);
    return NextResponse.json(
      { msg: 'Internal Server Error', err: true },
      { status: 500 }
    );
  }
}
