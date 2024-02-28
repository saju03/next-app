"use client";

import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import TabBtns from "../_components/TabBtns";
import OneWayRoundTrip from "../_components/OneWayRoundTrip";
import MultiCity from "../_components/MultiCity";
import { TwoSearchTypes } from "@/Interfaces";

import { useDispatch, useSelector } from "react-redux";
import { setAuthenticationDetails } from "@/lib/_utils/_redux/AuthSice"; 
import { verifyToken } from "@/lib/helpers/authHelpers";  

export default function FlightSearch() {
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState<TwoSearchTypes>({
    fromCity: null,
    toCity: null,
    fromDate: new Date().toISOString().slice(0, 10),
    toDate: new Date().toISOString().slice(0, 10),
    adult: 1,
    child: 0,
    infant: 0,
    searchType: "RoundTrip",
    cabin:'Economy'
  });

  const [multiCitySearchData, setMultiCitySearchData] =
    useState<TwoSearchTypes>({
      fromCity1: "",
      toCity1: "",
      fromCity2: "",
      toCity2: "",
      fromCity3: "",
      toCity3: "",
      fromCity4: "",
      toCity4: "",
      legDate1: new Date(),
      legDate2: new Date(),
      legDate3: new Date(),
      legDate4: new Date(),
      adult: 1,
      child: 0,
      infant: 0,
      searchType: "MultiCity",

      fromCity: null,
      toCity: null,
      fromDate: "",
      toDate: "",
      cabin:'Economy'
    });







  useEffect(() => {
    const intervalId = setInterval(() => {
      verifyToken();
    }, 60000);

    verifyToken();
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {/*flight start here*/}
      <div className="flight_panel" style={{ display: "block" }}>
        <TabBtns searchData={searchData} setSearchData={setSearchData} />
        {searchData.searchType == "MultiCity" ? (
          <MultiCity
            MultiCitySearchData={multiCitySearchData}
            setMultiCitySearchData={setMultiCitySearchData}
            index={1}
            isMultiCity={false}
          />
        ) : (
          <OneWayRoundTrip
            searchData={searchData}
            setSearchData={setSearchData}
            index={1}
            isMultiCity={false}
          />
        )}
      </div>
      {/*flight package end here*/}
    </>
  );
}
