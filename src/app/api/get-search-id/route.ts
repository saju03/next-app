import axios, { AxiosResponse } from "axios";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { Config, TokenData } from "@/Interfaces";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export async function GET(req: NextRequest, res: NextResponse) {
  const cookieStore:ReadonlyRequestCookies = cookies();
  const cookie:RequestCookie[] = cookieStore.getAll();
  const Data:string|undefined = cookie.find((cookie) => cookie.name === "auth")?.value;
  const tokenData:TokenData  = Data && JSON.parse(Data);

  let config: Config = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${tokenData.access_token}`,
      Content: "application/x-www-form-urlencoded",
      "Content-Type": "application/json",
    },
  };

  const data: AxiosResponse = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}api/Common/GetSearchId`,
    config
  );
  if (data.data.Code == 200) {
    return NextResponse.json(
      { message: "access granded", data: data.data },
      { status: 200 }
    );
  } else {
    return NextResponse.json({ message: "access denied" }, { status: 401 });
  }
}
