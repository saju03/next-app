import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";
import axios, { AxiosResponse } from "axios";

interface Headers {
  [key: string]: string;
}

interface ApiResponseSuccess {
    userName: string;
    password: string;
  }
  

interface Config {
  headers: Headers;
}

type IP = string | null;
type ParamsType = {
  Device: string;
  UserAgent: string;
  IPAddress: IP;
  AffiliateID: any;
  Securitykey: string;
  IsMobileWeb: boolean;
};
interface ApiResponse {
  userName: string;
 password:string
}


export const getDeviceLogin = async (headersList: ReadonlyHeaders) => {
  const ip: IP = headersList.get("x-forwarded-for");
  let config: Config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const url: string = `${process.env.NEXT_PUBLIC_API_URL}api/UserAccount/BasicAuth`;
  
  const params: ParamsType = {
    Device: "Browser",
    UserAgent: "string",
    IPAddress: ip,
    AffiliateID: "",
    Securitykey: "admin@caxita.com",
    IsMobileWeb: false,
  };

  try {
    const  response:AxiosResponse = await axios.post<ApiResponse>(url, params, config);
    return response.data;
  } catch (error) {       
    console.error(error)
    // return 'error'                                                                                                                                                                                                                                                                                                                                         
  }
};
