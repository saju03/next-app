import axios, { AxiosResponse } from "axios";
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

type BodyType = {
  email:string,
  password:string,
  title:string,
  firstName:string,
  middleName:string,
  lastName:string,
  socialToken:string,
  loginType:string,
  countryOfResidence:string,
  mobileCode:string,
  mobileNumber:string,
  dateOfBirth:string
}

export async function POST (req:NextRequest,res:NextResponse){

    const cookieStore = cookies();
    const cookie = cookieStore.getAll();
    const data:BodyType = await req.json()

    
    const config :Config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:`Bearer ${cookie.find(cookie => cookie.name === 'auth')?.value}`,
        Culture:'en'
      },
    };
    const params:ParamsType = {
      LoginType:0,
      SocialToken:" ",
      Email:data?.email
    }
    try {
      
      const response:AxiosResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}api/UserAccount/UserExists`,params,config)
      if(response.data.Data.CanRegisterAsNewUSer){

        const userData = {
          Title:data.title,
          FirstName:data.firstName,
          MiddleName:data.middleName,
          LastName:data.lastName,
          Email:data.email,
          Password:data.password,
          SocialToken:data.socialToken,
          LoginType:data.loginType,
          CountryOfResidence:data.countryOfResidence,
          MobileCode:data.mobileCode,
          MobileNumber:data.mobileNumber,
          DateOfBirth:data.dateOfBirth

        }

      }

console.log(response);

      






      return  NextResponse.json({Data:response?.data})
    } catch (error) {
      console.log(error);
      
    }

    


    
  
    
}