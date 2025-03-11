import { NextRequest, NextResponse } from 'next/server';
import { RouteEnum } from './app/constants/api.enum';

// Constants
const PUBLIC_ROUTES = [
    '/',
    RouteEnum.LOGIN,
    RouteEnum.SIGNUP,
    RouteEnum.VERIFY_PAGE,
  ];
  const LOGIN_ROUTE = RouteEnum.LOGIN;
  const PROTECTED_ROUTES = [
    RouteEnum.DASHBOARD
  ];


const isPublicRoute = (path: string) => PUBLIC_ROUTES.includes(path);
const isAdminRoute = (path: string) => PROTECTED_ROUTES.some((route) => path.startsWith(route));

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const authToken = request.cookies.get('token')?.value;
  
    return NextResponse.next(); // Continue with the request
}