import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";
import { TOKEN_VALUES } from "./interfaces";

export async function getDataFromToken(request: NextRequest) {

    try {
        const token = request.cookies.get('token')?.value || '';
        const decodedToken: any = await jwt.verify(token, process.env.TOKEN_SECRET!)
        console.log('decodedToken', decodedToken)
        return decodedToken.id;
    } catch (error: any) {
        throw new Error(error.message)
    }
}