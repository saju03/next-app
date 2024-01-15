import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { getDeviceLogin } from "../_helpers/CommonHelper";
import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";
import { ApiResponse } from "@/Interfaces";
import axios, { AxiosResponse } from "axios";

type reqType = {
  Email: string;
  Password: string;
};
type Config = {
  headers: {
    "Content-Type": string;
    Authorization?: string;
    Culture: string;
  };
};
export async function POST(req: NextRequest, res: NextResponse) {
  const requestData: reqType = await req.json();
  const cookieStore = cookies();
  const cookie = cookieStore.getAll();
  const headersList: ReadonlyHeaders = headers();
  const userInfo: ApiResponse = await getDeviceLogin(headersList);

  const config: Config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${
        cookie.find((cookie) => cookie.name === "auth")?.value
      }`,
      Culture: "en",
    },
  };
  if (requestData.Email && requestData.Password) {
    const params: string = `username=${userInfo.userName}&password=${userInfo.password}&grant_type=password&type=login&user=${requestData.Email}&pass=${requestData.Password}`;

    try {
      const loginResponse:AxiosResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}token`,
        params,
        config
      );
      console.log(loginResponse);

      if (loginResponse.data) {
        cookieStore.set({
          name: "auth",
          value: JSON.stringify(loginResponse.data),
          httpOnly: true,
          maxAge: 1799,
        });

        const loginData = {
          refresh_token: loginResponse.data.refresh_token,
          userId: loginResponse.data.UserId,
          Role: loginResponse.data.Role,
          UserName: loginResponse.data.UserName,
          Name: loginResponse.data.Name,
          IsActivePaidUser: loginResponse.data.IsActivePaidUser,
        };

        cookieStore.set({
          name: "login_user",
          value: JSON.stringify(loginData),
          httpOnly: true,
          maxAge: 3600 * 24 * 7,
        });
      }

      return NextResponse.json(
        {
          message: "login success",
          userId: loginResponse.data.UserId,
          Role: loginResponse.data.Role,
          UserName: loginResponse.data.UserName,
          Name: loginResponse.data.Name,
          IsActivePaidUser: loginResponse.data.IsActivePaidUser,
        },
        { status: 200 }
      );
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { message: "api error occourd on login" },
        { status: 401 }
      );
    }
  }
  return NextResponse.json(
    { message: "email or password not porvided" },
    { status: 401 }
  );
}
