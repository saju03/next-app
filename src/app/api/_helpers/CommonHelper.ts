import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";

import { ApiResponse, Config, IP, ParamsType, TokenApiResponse, TokenTypes } from "@/Interfaces";
import { headers } from "next/headers";

export const getDeviceLogin = async (headersList: ReadonlyHeaders) => {


// Get IP form Headder
  const ip: IP = headersList.get("x-forwarded-for");
// Buil URl
  const url: string = `${process.env.NEXT_PUBLIC_API_URL}api/UserAccount/BasicAuth`;

  // Params
  const params: ParamsType = {
    Device: "Browser",
    UserAgent: "string",
    IPAddress: ip,
    AffiliateID: "",
    Securitykey: "admin@caxita.com",
    IsMobileWeb: false,
  };

  // request params
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    };
  
    try {
      // insted of axios using fetch for this call because axios have some issues,
      //  and this call is a service worker call and axios cant handle service worker default

      const response = await fetch(url, requestOptions);
    
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData: ApiResponse = await response.json();
      return responseData; // Return the response data here
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  
  

  
  
};



export const getRefreshToken = async (refreshToken: string) => {
  const url: string = `${process.env.NEXT_PUBLIC_API_URL}token`;
  const params: string = `grant_type=refresh_token&refresh_token=${refreshToken}`;
  const config: Config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  try {
    const fetchRefreshToken  = await fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params
      
    });
 const refreshToken = await fetchRefreshToken.json() ;




    const newExpiryTime: Date = new Date(refreshToken.data[".expires"]);
    newExpiryTime.setMinutes(newExpiryTime.getMinutes() - 7);

    const token: TokenTypes = {
      access_token: refreshToken.data.access_token,
      expireTime: newExpiryTime,
      token_type: refreshToken.data.token_type,
      refresh_token: refreshToken.data.refresh_token,
    };

    return token;
  } catch (error) {
    console.log("refresh token error");
    console.log(error);
  }
};

export const getToken = async () => {
  
  const headersList: ReadonlyHeaders = headers();

  try {
    
    const userInfo: ApiResponse = await getDeviceLogin(headersList);
    const config: Config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    const url: string = `${process.env.NEXT_PUBLIC_API_URL}token`;

    const params: string = `username=${userInfo?.userName}&password=${userInfo.password}&grant_type=password&type=auth`;

    try {
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
         
        },
        body: params,
      });
    
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    
      const tokenResponse: TokenApiResponse = await response.json();
      const newExpiryTime: Date = new Date(tokenResponse[".expires"]);
      newExpiryTime.setMinutes(newExpiryTime.getMinutes() - 7);
    
      const token: TokenTypes = {
        access_token: tokenResponse.access_token,
        expireTime: newExpiryTime,
        token_type: tokenResponse.token_type,
        refresh_token: tokenResponse.refresh_token,
      };
    
      return token;
    } catch (error) {
      console.log('token error', error);
    }
  } catch (error) {
    console.log("device login error");
    console.log(error);
  }
};
