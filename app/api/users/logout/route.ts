import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect()
export async function GET(request: NextRequest) {

    try {
        const header = await request.headers

        const accessToken = await header.get('authorization')?.split(' ')[1];
        console.log('accessToken!!', accessToken);

        const user = await User.findOne({ accessToken: String(accessToken).trim() })

        console.log('user', user)
        if (!user) {
            return NextResponse.json({ error: 'Invalid request parameter' }, { status: 500 })
        }

        user.accessToken = ''
        user.refreshToken = ''
        await user.save();
        const response = NextResponse.json({ message: 'User logged out successfully', success: true }, { status: 200 })
        response.cookies.set('token', '', {
            httpOnly: true,
            expires: new Date(0)
        })
        console.log('cookies!!', response.cookies);

        return NextResponse.json({ message: 'User logged out successfully', success: true }, { status: 200 })

    } catch (error: any) {
        return NextResponse.json({ error: error.message })
    }
}