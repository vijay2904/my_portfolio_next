import { NextResponse } from 'next/server';
import { run } from './run.js';

export async function GET() {
    return Response.json({"message" : "Hello"});
}

export async function POST(req) {
    try {
        const data = await req.json();
        const { question, convHistory } = data; // Get the question from the request body
        if (!question) {
            return NextResponse.status(400).json({ error: 'Question is required' });
        }

        const response = await run(question, convHistory); // Call the run function from index.js
        // Response.json({ response }); // Send the response back to the client
        return NextResponse.json({ response });
    } catch (error) {
        return NextResponse.json({ message: 'Error', error: error.message }, { status: 500 });
    }
}