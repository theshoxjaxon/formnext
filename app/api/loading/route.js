// app/api/loading/route.js — Login Page endpoint

export async function POST(request) {
    const body = await request.json();

    const { phone, password } = body;
    console.log("Phone:", phone);
    console.log("Password:", password);

    return Response.json({
        success: true,
        message: "Login successful",
        data: { phone, password }

    });
}
