import { NextRequest, NextResponse } from "next/server";
import { Config, TokenTypes, errToken } from "@/Interfaces";
import { cookies } from "next/headers";
import axios, { AxiosResponse } from "axios";

type BodyType = {
  refreshToken: string;
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  
  const cookieStore = cookies();
  const cookie = cookieStore.getAll();
  const data: BodyType = await req.json();


  const url: string = `${process.env.NEXT_PUBLIC_API_URL}token`;
  const params: string = `grant_type=refresh_token&refresh_token=${data.refreshToken}`;
  const config: Config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  try {
    const refreshToken: AxiosResponse = await axios.post(url, params, config);

    const newExpiryTime: Date = new Date(refreshToken.data[".expires"]);
    newExpiryTime.setMinutes(newExpiryTime.getMinutes() - 7);

    const token: TokenTypes = {
      access_token: refreshToken.data.access_token,
      expireTime: newExpiryTime,
      token_type: refreshToken.data.token_type,
      refresh_token: refreshToken.data.refresh_token,
    };

    cookieStore.set({
      name:'auth',
      value:JSON.stringify(token),
      httpOnly:true,
      expires:1799
    })

    return NextResponse.json({ message:'success' }, { status: 200 });
  } catch (error) {
    //  console.log(error);

    return NextResponse.json({ message: "unauth" }, { status: 401 });
  }
};
