// app/api/contact/route.js
export async function POST(request) {
    const body = await request.json();

    // body = { email: '...', message: '...' }

    return Response.json({ success: true });
}