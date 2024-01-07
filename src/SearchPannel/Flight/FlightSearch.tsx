"use client";

import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import TabBtns from "../components/TabBtns";
import OneWayRoundTrip from "../components/OneWayRoundTrip";
import MultiCity from "../components/MultiCity";

export default function FlightSearch() {


  const getToken = async ()=>{
    try {
      const response: AxiosResponse = await axios.post(
        "http://localhost:3000/api/verifytoken"
      );
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("expireTime", response.data.expireTime);
      return;
    } catch (error) {
        console.log(error);
        
    }
  }


  const verifyToken = async () => {
    const token:string|null = localStorage?.getItem("access_token");
    const expireTime:string|null = localStorage?.getItem("expireTime");

    if (token && expireTime) {
      const currentDate:Date = new Date();
      const expTime:Date = new Date(expireTime);
      if (currentDate >= expTime) {
      await getToken()
      }
    }else{
     await getToken()
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      verifyToken();
    }, 20000);
    verifyToken();
    return () => clearInterval(intervalId);
  }, []);





  const [searchData,setSearchData] = useState({
    fromCity:'',
    toCity:'',
    fromDate:new Date().toISOString().slice(0, 10),
    toDate:new Date().toISOString().slice(0, 10),
    adult:1,
    child:0,
    infant:0,
    searchType:'RoundTrip'
})





 
  return (
    <>
      {/*flight start here*/}
      <div className="flight_panel" style={{ display: "block" }}>
       <TabBtns searchData={searchData} setSearchData={setSearchData}/>
       {searchData.searchType=='MultiCity'?  <MultiCity/>:<OneWayRoundTrip searchData={searchData} setSearchData={setSearchData}/>}
       
      
      </div>
      {/*flight package end here*/}
    </>
  );
}
