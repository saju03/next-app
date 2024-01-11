import { NextRequest, NextResponse } from "next/server";

import { cookies, headers } from "next/headers";
import { ApiResponse, Config, TokenTypes, errToken } from "@/Interfaces";
import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";
import { getDeviceLogin } from "../_helpers/CommonHelper";
import axios, { AxiosResponse } from "axios";

// route /api
export async function POST(req: NextRequest, res: NextResponse) {
  const headersList: ReadonlyHeaders = headers();
  try {
    const userInfo: ApiResponse = await getDeviceLogin(headersList);
    const config: Config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    const url: string = `${process.env.NEXT_PUBLIC_API_URL}token`;

    const params: string = `username=${userInfo?.userName}&password=${userInfo.password}&grant_type=password&type=auth`;

    // Get New Token
    try {
      const tokenResponse: AxiosResponse = await axios.post<ApiResponse>(
        url,
        params,
        config
      );

      const newExpiryTime: Date = new Date(tokenResponse.data[".expires"]);
      newExpiryTime.setMinutes(newExpiryTime.getMinutes() - 7);

      const token: TokenTypes = {
        access_token: tokenResponse.data.access_token,
        expireTime: newExpiryTime,
        token_type: tokenResponse.data.token_type,
        refresh_token: tokenResponse.data.refresh_token,
      };

      if (token != undefined) {
        const cookieStore = cookies();
        cookieStore.set({
          name: "auth",
          value: token?.access_token,
          httpOnly: true,
          maxAge: 36000,
        });
        return NextResponse.json({token},{status:200});
      }
      return NextResponse.json({message:'unauth'},{status:401})
    } catch (error) {
      console.error;
    }
  } catch (error) {
    console.log(error);
  }

}
