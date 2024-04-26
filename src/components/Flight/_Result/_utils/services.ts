import axios, { AxiosResponse } from "axios";

export const getResults = async () => {
  try {
    const response: AxiosResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_Base_Url}api/get-search-id`
    );
    if (response?.data?.data?.Code == 200) {
      
      sessionStorage.setItem("ApiSearchId", response?.data?.data?.Data?.SearchId);
      const flightResults = await axios.post(
        `${process.env.NEXT_PUBLIC_Base_Url}api/get-flight-results`,{ searchId: response?.data?.data?.Data?.SearchId,url:window.location.href }
      );
    }
  } catch (error) {
    console.error(error); 

    throw new Error("err");
  }
};
