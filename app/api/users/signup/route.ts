import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

import brcryptjs from 'bcryptjs'
import { sendEmail } from "@/helpers/mailer";

connect()
export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email, username, password } = reqBody;
        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ error: 'User already exists, please login!!!' })
        }
        const salt = await brcryptjs.genSalt(10);

        const hashedPass = await brcryptjs.hash(password, salt);

        const newUser = new User({
            email,
            username,
            password: hashedPass
        })
        const savedUser = await newUser.save();

        const emailInfo = await sendEmail({ email, emailType: 'VERIFY', userId: savedUser?._id });

        return NextResponse.json({
            message: 'User Registered Successfully',
            success: true,
            userData: savedUser
        })

    } catch (error: any) {
        return NextResponse.json({ err: error.message })
    }
}