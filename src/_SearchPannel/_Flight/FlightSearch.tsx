"use client";

import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import TabBtns from "../_components/TabBtns";
import OneWayRoundTrip from "../_components/OneWayRoundTrip";
import MultiCity from "../_components/MultiCity";
import {  TwoSearchTypes } from "@/Interfaces";

import { useDispatch, useSelector } from "react-redux";
import { setAuthenticationDetails } from "@/app/_utils/redux/AuthSice";


export default function FlightSearch() {

  const dispatch = useDispatch()
  const [searchData,setSearchData] = useState<TwoSearchTypes>({
    fromCity:null,
    toCity:null,
    fromDate:new Date().toISOString().slice(0, 10),
    toDate:new Date().toISOString().slice(0, 10),
    adult:1,
    child:0,
    infant:0,
    searchType:'RoundTrip'
  })
  

  const [multiCitySearchData,setMultiCitySearchData] = useState<TwoSearchTypes>({
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
    
    fromCity:null,
    toCity:null,
    fromDate:'',
    toDate:''
    
  })


  const getToken = async ()=>{
    try {
      
      const response: AxiosResponse = await axios.post(
        "http://localhost:3000/api/verifytoken"
      );  
      dispatch(setAuthenticationDetails({accessToken:response.data.access_token,refreshToken:response.data.expireTime,expireTime:response.data.refresh_token}))
      sessionStorage.setItem("access_token", response.data.access_token);
      sessionStorage.setItem("expireTime", response.data.expireTime);
      sessionStorage.setItem("refresh_token", response.data.refresh_token);
      return;
    } catch (error) {
        console.log(error);
        
    }    
  }  

  const getRefreshToken =async () => {
   
    const refreshToken:string|null = sessionStorage.getItem('refresh_token')??'';

    if(refreshToken||refreshToken!=undefined||refreshToken!=null){
      try {
      const {data} = await axios.post('http://localhost:3000/api/get-refresh-token',{refreshToken:refreshToken});
      dispatch(setAuthenticationDetails({accessToken:data.token.access_token,refreshToken:data.token.expireTime,expireTime:data.token.refresh_token}))
      sessionStorage.setItem("access_token",data.token.access_token);
      sessionStorage.setItem("expireTime", data.token.expireTime);
      sessionStorage.setItem("refresh_token", data.token.refresh_token);
      
    } catch (error) {
      console.error(error)
    }  
    }else{
      getToken()
    }
    

  }  


  const verifyToken = async () => {
    const token:string|null = sessionStorage?.getItem("access_token")?? "undefined";
    const expireTime:string = sessionStorage?.getItem("expireTime") ?? "undefined";
// breakable conditon need revision

    if (token!="undefined" ||expireTime!=='undefined' ) {
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
       {searchData.searchType=='MultiCity'?  <MultiCity MultiCitySearchData={multiCitySearchData} setMultiCitySearchData={setMultiCitySearchData} index={1} isMultiCity={false}  />:<OneWayRoundTrip searchData={searchData} setSearchData={setSearchData} index={1} isMultiCity={false}/>}
       
      
      </div>
      {/*flight package end here*/}
    </>
  );
}
