import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

import brcrypt from 'bcryptjs'
import { sendEmail } from "@/helpers/mailer";

connect()
export async function POST(request: NextRequest) {
    try {
        const reqBody = request.json();
        const { email, usename, password } = reqBody;

        const user = await User.findOne(email);
        if (!user) {
            return NextResponse.json({ error: 'User already exists, please login!' })
        }
        const salt = await brcrypt.getSalt('10');
        const hashedPass = await brcrypt.hash(password, salt);

        const newUser = new User({
            email,
            usename,
            password: hashedPass
        })

        const savedUser = newUser.save();
        console.log(savedUser);
        // Send verification email

        const emailInfo = await sendEmail({ email, emailSubject: 'Verify Email', userId: savedUser?._id });

        return NextResponse.json({
            message: 'User Registered Successfully',
            success: true,
            userData: savedUser
        })

    } catch (error: any) {
        return NextResponse.json({ err: error.message })
    }
}