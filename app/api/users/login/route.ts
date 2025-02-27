import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

connect()
export async function POST(request: NextRequest) {
    try {
        const reqBody = request.json();
        const { email, password } = await reqBody;

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: 'User does not exist.' }, { status: 500 })
        }

        const passCheck = await bcryptjs.compare(password, user.password)
        if (!passCheck) {
            return NextResponse.json({ error: 'Check you credentials.' }, { status: 500 })
        }

        const accessToken = jwt.sign({ id: user._id, email: user.email }, process.env.TOKEN_SECRET ?? 'pushp-token-next', { expiresIn: '1d' })
        const refreshToken = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET ?? 'pushp-token-next', { expiresIn: '1m' })

        user.accessToken = accessToken;
        user.refreshToken = refreshToken;

        const updatedUser = await user.save();

        const response = NextResponse.json({ message: 'Logged In Successfully', success: true, data: updatedUser })
        response.cookies.set('token', accessToken, {
            httpOnly: true
        })
        return response;
    } catch (error: any) {
        return NextResponse.json({ err: error.message }, { status: 500 })
    }
}