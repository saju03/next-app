import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";
import { getDeviceLogin } from "../_helpers/CommonHelper";
import axios, { AxiosResponse } from "axios";
import { ApiResponse, Config, TokenTypes } from "@/Interfaces";




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
    const url: string = `${process.env.NEXT_PUBLIC_API_URL}token`;
    
    const params:string = `username=${userInfo?.userName}&password=${userInfo.password}&grant_type=password&type=auth`;

    // Get New Token
    try {
      const tokenResponse: AxiosResponse = await axios.post<ApiResponse>(url,params,config);

      const newExpiryTime:Date = new Date(tokenResponse.data['.expires']);
      newExpiryTime.setMinutes(newExpiryTime.getMinutes()-7)
      
      // localStorage.setItem('token','tokenResponse.data.access_token')

      // console.log(expireDate);
      // console.log(tokenResponse);
      
      const token:TokenTypes ={
        access_token :tokenResponse.data.access_token,
        expireTime:newExpiryTime,
        token_type:tokenResponse.data.token_type,
        refresh_token:tokenResponse.data.refresh_token
      }

      return token;
    } catch (error) {
      console.error;
    }
  } catch (error) {
    return { message: "Device Login details API error", status: 401 };
  }
};




export const getRefreshToken = async(req:NextRequest,res:NextResponse)=>{
const data:any = await req.json()
  
  
const url:string = `${process.env.NEXT_PUBLIC_API_URL}token`
const params:string = `grant_type=refresh_token&refresh_token=${data.refreshToken}`
const config: Config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
};

try {
const refreshToken:AxiosResponse =   await axios.post(url,params,config);

const newExpiryTime:Date = new Date(refreshToken.data['.expires']);
newExpiryTime.setMinutes(newExpiryTime.getMinutes()-7);
  
const token:TokenTypes ={
  access_token :refreshToken.data.access_token,
  expireTime:newExpiryTime,
  token_type:refreshToken.data.token_type,
  refresh_token:refreshToken.data.refresh_token
}

return token;


} catch (error) {

//  console.log(error);

return {
  token:'unauth token',
  status:401
}
 
}
}


