import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { getRefreshToken, getToken } from "../_helpers/CommonHelper";
import { TokenData } from "@/Interfaces";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export async function GET(req: NextRequest, res: NextResponse) {
  
  return NextResponse.json({staus:'true'},{status:200})

}
