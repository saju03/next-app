import axios, { AxiosError, AxiosResponse } from "axios";

export const verifyToken = async () => {
    try {
      const tokenVerification = await axios.get(
        "http://localhost:3000/api/verify-token"
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError: AxiosError = error;
        if (axiosError.response?.status === 401) {
          getToken();
        } else {
          console.log(error);
        }
      }
    }
  };

  export const getToken = async () => {
    try {
      const response: AxiosResponse = await axios.get(
        "http://localhost:3000/api/getToken"
      );

    //   dispatch(
    //     setAuthenticationDetails({
    //       accessToken: response.data.access_token,
    //       refreshToken: response.data.refresh_token,
    //       expireTime: response.data.expireTime,
    //     })
    //   );
    
      return;
    } catch (error) {
      console.log(error);
    }
  };