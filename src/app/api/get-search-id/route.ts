import axios, { AxiosResponse } from "axios";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { Config } from "@/Interfaces";

export async function GET(req: NextRequest, res: NextResponse) {
  const cookieStore = cookies();
  const cookie = cookieStore.getAll();
  const Data = cookie.find((cookie) => cookie.name === "auth")?.value;
  const tokenData = Data && JSON.parse(Data);

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
