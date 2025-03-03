import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();
export async function GET(request: NextRequest) {
    try {
        const userId = await getDataFromToken(request);
        console.log('userId', userId);
        const user = await User.findById(userId).select(['-password']);
        console.log('user', user);

        return NextResponse.json({ message: 'Detail fetched successfully', success: true, data: user }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}