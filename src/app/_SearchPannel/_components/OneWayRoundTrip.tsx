"use client";
import DownShift from "./DownShift";
import React, { useState } from "react";
import { DatePicker, RangePicker } from "react-ease-picker";
import TravellerBox from "./TravellerBox";
import { SearchDataProps } from "@/Interfaces";
import axios from "axios";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { useRouter } from "next/navigation";

export default function OneWayRoundTrip({
  searchData,
  setSearchData,
}: SearchDataProps) {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter()
  const HandleSubmit = (e: any) => {
    e.preventDefault();
    if (
      searchData.fromCity == null ||
      searchData.toCity == null ||
      searchData.fromCity._id == searchData.toCity._id
    ) {
      alert("enter valid city or airport");
    }else{
      const url:string = `Flight/Result/${searchData.searchType}/${searchData.fromCity._source.code}/${searchData.toCity._source.code}/A-${searchData.adult}-C-${searchData.child}-I${searchData.infant}/Economy/all_flight/Y-N/false`
      router.push(url)

    }





  };

  const reg = async () => {
    const { data } = await axios.post(
      "http://localhost:3000/api/register-user",
      { email: "sajusuresh03@gmail.com" }
    );
    console.log(data);
  };

  return (
    <>
      {/* Round */}
      <div
        className="FilghtClass"
        id="HTwoWayShow"
        style={{ display: "block" }}
      >
        <div className="search_field_main">
          <button onClick={reg}>REG</button>
          <div className="search_field_lft">
            <div className="field_row">
              <div className="field_clm_3">
                <div className="form-group location_icon">
                  <DownShift
                    searchData={searchData}
                    setSearchData={setSearchData}
                    isFromCity={true}
                    index={1}
                    isMultiCity={false}
                  />
                </div>
              </div>
              <div className="field_clm_3">
                <div className="form-group location_icon">
                  <DownShift
                    searchData={searchData}
                    setSearchData={setSearchData}
                    isFromCity={false}
                    index={1}
                    isMultiCity={false}
                  />
                </div>
              </div>
              <div className="hm_clndr_main">
                <div className="field_clm_2">
                  <div className="form-group calendar_icon">
                    <label>Departure</label>
                    {searchData.searchType == "RoundTrip" ? (
                      <RangePicker
                        minDate={new Date().toString()}
                        onSelect={(start, end) => {
                          setSearchData({
                            ...searchData,
                            fromDate: start,
                            toDate: end,
                          });
                        }}
                      />
                    ) : (
                      <DatePicker
                        onSelect={(start) => {
                          setSearchData({ ...searchData, fromDate: start });
                        }}
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`field_clm_2 ${
                    searchData.searchType == "OneWay" ? "disable" : ""
                  }`}
                >
                  <div className="form-group calendar_icon">
                    <label>Return</label>
                    <RangePicker
                      minDate={searchData.fromDate}
                      onSelect={(start, end) => {
                        console.log(start, end);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="field_clm_3 field_clm_3_psngr HmTravel">
                <div className="form-group  down_arrow">
                  <label>Travellers</label>
                  <input
                    type="text"
                    name=""
                    id="from_cityss"
                    placeholder="1 Travellers, Economy"
                    className=" "
                    onClick={() => setOpen(true)}
                  />
                </div>
                <TravellerBox
                  isOpen={isOpen}
                  setOpen={setOpen}
                  searchData={searchData}
                  setSearchData={setSearchData}
                />
              </div>
            </div>
            <div className="field_row">
              <div className="field_clm_3">
                <div className="hm_nonstop hm_padding ">
                  <div className="hmcol_4 hmStops">
                    <input type="checkbox" id="IsDirect" name="IsDirect" />
                    <label htmlFor="IsDirect" className="">
                      Non Stop
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="search_field_rht">
            <div className=" ">
              <div className="field_clm_search">
                <button
                  className="searchBtn"
                  id="searchBtn"
                  onClick={HandleSubmit}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Round End*/}
    </>
  );
}
