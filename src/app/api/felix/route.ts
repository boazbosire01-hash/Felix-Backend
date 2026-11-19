import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: Request) {
  try {
    const { mode, content, platform } = await req.json();

    let prompt = '';
    if (mode === 'scam') {
      prompt = `You are Felix, an AI security guardian. Analyze this notification for scams, phishing, fake giveaways, or mobile money fraud. Reply strictly in JSON format: {"isScam": boolean, "riskLevel": "LOW"|"MEDIUM"|"HIGH", "reason": "short 1-sentence warning"}. Text: "${content}"`;
    } else if (mode === 'digest') {
      prompt = `You are Felix, a smart assistant. Summarize these notifications into bullet points by priority and suggest short replies: "${content}"`;
    } else if (mode === 'growth') {
      prompt = `You are Felix, a viral social media growth coach. Give 3 high-retention content ideas and 1 growth hack for ${platform} based on this topic/niche: "${content}"`;
    } else {
      return NextResponse.json({ error: 'Invalid mode' }, { status: 400 });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return NextResponse.json({ reply: response.text });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Felix failed to respond' }, { status: 500 });
  }
}
