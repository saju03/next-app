import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";
import { getDeviceLogin } from "../helpers/CommonHelper";
import axios, { AxiosResponse } from "axios";

interface Headers {
  [key: string]: string;
}
interface Config {
  headers: Headers;
}

interface ApiResponse {
  userName: string;
  password: string;
}

export const authHandler = async (req: NextRequest, res: NextResponse) => {
  const headersList: ReadonlyHeaders = headers();
  try {
    const userInfo: ApiResponse = await getDeviceLogin(headersList);
    // if (userInfo == "error") {
    //   return { message: "Device Login details API error", status: 401 };
    // }

    const config: Config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    const url: string = `${process.env.API_URL}token`;
    const params = `username=${userInfo?.userName}&password=${userInfo.password}&grant_type=password&type=auth`;

    // Get New Token
    try {
      const tokenResponse: AxiosResponse = await axios.post<ApiResponse>(
        url,
        params,
        config
      );
      //tsst ones
      let a =20;
      return tokenResponse.data;






      
    } catch (error) {
      console.error;
    }
  } catch (error) {
    return { message: "Device Login details API error", status: 401 };
  }
};
