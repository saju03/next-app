import axios from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

type Config = {
  headers: {
    "Content-Type": string;
    Authorization?: string;
    Culture: string;
  };
};

type ParamsType = {
LoginType:number,
SocialToken:string,
Email:string
}

export async function POST (req:NextRequest,res:NextResponse){

    const cookieStore = cookies();
    const cookie = cookieStore.getAll();
    const data = await req.json()

    const config :Config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:`Bearer ${cookie.find(cookie => cookie.name === 'auth')?.value}`,
        Culture:'en'
      },
    };

    const params:ParamsType = {
      LoginType:0,
      SocialToken:"",
      Email:data.email
    }

    const respo = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}UserAccount/UserExists`,params,config)

    console.log('//////////////////////////////////////');

    console.log(respo);
    
    






    
  return  NextResponse.json(respo)
    
}