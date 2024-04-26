import { Config, requestBodyType, SearchParams, TokenData } from "@/Interfaces";
import axios, { AxiosResponse } from "axios";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const reqBody: requestBodyType = await req.json();
  console.log(reqBody);

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
      SearchId:reqBody.searchId,
      Culture:'en',
      Version:1
    },
  };

  if (process.env.NEXT_PUBLIC_Base_Url) {
    const UrlData: Array<string> = reqBody.url
      .replace(process.env.NEXT_PUBLIC_Base_Url, "")
      .split("/");
    const searchParams: SearchParams = {
      Journeys: [
        {
          Source: {
            Code: UrlData[3]?.split("_")[0]?.split("-")[0],
            IsAll: UrlData[7]?.split("-")[0] == "y",
          },
          Destination: {
            Code: UrlData[3]?.split("_")[0]?.split("-")[1],
            IsAll: UrlData[7]?.split("-")[1] == "y",
          },
          Date: UrlData[3]?.split("_")[0]?.split("-")[2],
          SeatClass: "Y",
          Airline: [],
        },
      ],
      Passengers: {
        Adults:parseInt(UrlData[4].split('-')[1]),
        Children: parseInt(UrlData[4].split('-')[3]),
        Infant: parseInt(UrlData[4].split('-')[5]),
      },
      SearchConfig: {
        SearchType: 1,
        IsDirect: false,
        IsFlexibleDate: false,
        Currency: "KWD",
        APIId: [107],
        Country: "KW",
        SearchId: reqBody.searchId,
      },
      Configuration: {
        IsBehalfMode: false,
        BehalfAgency: "mawasimtravels.ae@maq.com",
        BehalfUser: "",
        NationalFare: false,
      },
      Utm: {
        Source: "",
        Medium: "",
        Campaign: "",
        Term: "",
        Content: "",
      },
      InstantCharge: {
        InstantMarkup: 0,
        InstantDiscount: 0,
      },
    };

    debugger;
    //  search
    const searchIdResponse: AxiosResponse = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}api/Flight/Search`,
      searchParams,
      config
    );

    if (searchIdResponse.data.Code == 200) {
   return NextResponse.json({message:'Success'},{status:200})
    } else {
      return NextResponse.json({ message: "access denied" }, { status: 401 });
    }
  }
  NextResponse.json(
    { message: "internal server error next api FLIGHT SEARCH" },
    { status: 500 }
  );
}
