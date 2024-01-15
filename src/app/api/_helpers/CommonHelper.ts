import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";
import axios, { AxiosResponse } from "axios";
import { ApiResponse, Config, IP, ParamsType, TokenTypes } from "@/Interfaces";
import { headers } from "next/headers";

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
    const response: AxiosResponse = await axios.post<ApiResponse>(
      url,
      params,
      config
    );
    return response.data;
  } catch (error) {
    console.error(error);
    // return 'error'
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
    const refreshToken: AxiosResponse = await axios.post(url, params, config);
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
      const tokenResponse: AxiosResponse = await axios.post<ApiResponse>(
        url,
        params,
        config
      );
      const newExpiryTime: Date = new Date(tokenResponse.data[".expires"]);
      newExpiryTime.setMinutes(newExpiryTime.getMinutes() - 7);

      const token: TokenTypes = {
        access_token: tokenResponse.data.access_token,
        expireTime: newExpiryTime,
        token_type: tokenResponse.data.token_type,
        refresh_token: tokenResponse.data.refresh_token,
      };

      return token
    } catch (error) {

      console.log('token error',error);
      
    }
  } catch (error) {
    console.log("device login error");
    console.log(error);
  }
};
