import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";



connect()
export async function POST(request: NextRequest) {
    try {
        const reqBody = request.json();
        const { email, usename, password } = reqBody;

    } catch (error: any) {
        return NextResponse.json({ err: error.message })
    }
}