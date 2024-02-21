import { Config, TokenData } from "@/Interfaces";
import axios, { AxiosResponse } from "axios";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const reqBody = await req.json();
  const cookieStore: ReadonlyRequestCookies = cookies();
  const cookie: RequestCookie[] = cookieStore.getAll();
  const Data: string | undefined = cookie.find(
    (cookie) => cookie.name === "auth"
  )?.value;
  const tokenData: TokenData = Data && JSON.parse(Data);

  let config: Config = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${tokenData.access_token}`,
      Content: "application/x-www-form-urlencoded",
      "Content-Type": "application/json",
    },
  };

  //   GET SEARCH ID
  const searchIdResponse: AxiosResponse = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}api/Common/GetSearchId`,
    config
  );

  if (searchIdResponse.data.Code == 200) {
    const searchId: string = searchIdResponse.data.Data.SearchId;
    const apiURL = `${process.env.NEXT_PUBLIC_API_URL}api/Flight/Result?Currency=${"AED"}`;
    const config: Config = {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
        SearchId: searchId,
        Culture: "en",
        Version: 1,
      },
    };

    

  } else {
    return NextResponse.json({ message: "access denied" }, { status: 401 });
  }
  NextResponse.json("hi");
}
