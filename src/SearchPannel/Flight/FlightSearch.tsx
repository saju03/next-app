"use client";

import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import TabBtns from "../components/TabBtns";
import OneWayRoundTrip from "../components/OneWayRoundTrip";
import MultiCity from "../components/MultiCity";
import { MultiCitySearchDataType, OneWayRoundSearchDataType } from "@/Interfaces";



export default function FlightSearch() {


  const [searchData,setSearchData] = useState<OneWayRoundSearchDataType>({
    fromCity:'',
    toCity:'',
    fromDate:new Date().toISOString().slice(0, 10),
    toDate:new Date().toISOString().slice(0, 10),
    adult:1,
    child:0,
    infant:0,
    searchType:'RoundTrip'
  })
  

  const [multiCitySearchData,setMultiCitySearchData] = useState<MultiCitySearchDataType>({
    fromCity1:'',
    toCity1:'',
    fromCity2:'',
    toCity2:'',
    fromCity3:'',
    toCity3:'',
    fromCity4:'',
    toCity4:'',
    legDate1:'',
    legDate2:'',
    legDate3:'',
    legDate4:'',
    adult:1,
    child:0,
    infant:0,
    searchType:'MultiCity',
    
  })


  const getToken = async ()=>{
    try {
      const response: AxiosResponse = await axios.post(
        "http://localhost:3000/api/verifytoken"
      );  
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("expireTime", response.data.expireTime);
      localStorage.setItem("refresh_token", response.data.refresh_token);
      return;
    } catch (error) {
        console.log(error);
        
    }    
  }  

  const getRefreshToken =async () => {
    const refreshToken:string|null = localStorage.getItem('refresh_token')

    try {
      const {data} = await axios.post('http://localhost:3000/api/get-refresh-token',{refreshToken:refreshToken});
      
      localStorage.setItem("access_token",data.token.access_token);
      localStorage.setItem("expireTime", data.token.expireTime);
      localStorage.setItem("refresh_token", data.token.refresh_token);
      
    } catch (error) {
      console.error(error)
    }  

  }  


  const verifyToken = async () => {
    const token:string|null = localStorage?.getItem("access_token");
    const expireTime:string|null = localStorage?.getItem("expireTime");

    if (token!=undefined && expireTime!=undefined) {
      const currentDate:Date = new Date();
      const expTime:Date = new Date(expireTime);
      if (currentDate >= expTime) {
      await getRefreshToken()  
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









 
  return (
    <>
      {/*flight start here*/}
      <div className="flight_panel" style={{ display: "block" }}>
       <TabBtns searchData={searchData} setSearchData={setSearchData}/>
       <button onClick={()=>getRefreshToken()}>get refresh_token</button>
       {searchData.searchType=='MultiCity'?  <MultiCity MultiCitySearchData={multiCitySearchData} setMultiCitySearchData={setMultiCitySearchData}  />:<OneWayRoundTrip searchData={searchData} setSearchData={setSearchData}/>}
       
      
      </div>
      {/*flight package end here*/}
    </>
  );
}
