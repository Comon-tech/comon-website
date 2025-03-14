// Suggested code may be subject to a license. Learn more: ~LicenseLog:3239534918.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2930889970.
import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const guild_id = process.env.NEXT_PUBLIC_GUILD_ID;
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { message } = body;

        if (!API_KEY) {
            return NextResponse.json({ error: 'API key is not configured.' }, { status: 500 });
        }

        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

        const chat = model.startChat();
        const result = await chat.sendMessage(message);
        const response = result.response;
        const text = response.text();

        // console.log("response", response)

        return NextResponse.json({ response: text }, { status: 200 });
    } catch (error) {
        console.error('Gemini API error:', error);

        return NextResponse.json({ error: 'Failed to get response from Gemini.' }, { status: 500 });
    }
}