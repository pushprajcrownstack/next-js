import User from "@/models/userModel";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { token } = await request.json();
        const user = await User.findOne({ verifyToken: token, verifyTokenExpiry: { $gt: Date.now() } });
        if (!user) {
            return NextResponse.json({ error: 'Invalid Token!' }, { status: 400 })
        }

        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;

        await user.save();
        return NextResponse.json({ message: 'Email verified successfully', success: true }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message, success: true }, { status: 500 })
    }
}