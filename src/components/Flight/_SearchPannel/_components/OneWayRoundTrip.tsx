"use client";
import DownShift from "./DownShift";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import TravellerBox from "./TravellerBox";
import { SearchDataProps } from "@/Interfaces";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import ShortUniqueId from "short-unique-id";

export default function OneWayRoundTrip({
  searchData,
  setSearchData,
}: SearchDataProps) {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  const { randomUUID } = new ShortUniqueId({ length: 5 });

  const dateFormat = (date: string): string => {
    return format(new Date(date), "ddMMMyy");
  };

  const HandleSubmit = (e: any) => {
    e.preventDefault();
    if (
      searchData.fromCity == null ||
      searchData.toCity == null ||
      searchData.fromCity._id == searchData.toCity._id
    ) {
      alert("enter valid city or airport");
    } else {
      const url: string = `Flight/Result/${searchData.searchType}/${
        searchData.fromCity._source.code
      }-${searchData.toCity._source.code}-${dateFormat(searchData.fromDate)}_${
        searchData.toCity._source.code
      }-${searchData.fromCity._source.code}-${dateFormat(
        searchData.toDate
      )}/A-${searchData.adult}-C-${searchData.child}-I-${
        searchData.infant
      }/${searchData.cabin}/all_flight/${searchData.fromCity._source.isallairport ? 'Y':'N'}-${searchData.toCity._source.isallairport ? 'Y':'N'}/false?=${randomUUID()}`;
      router.push(url);
    }
  };
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setSearchData({ ...searchData, fromDate: start.toString() });
    setSearchData({
      ...searchData,
      toDate: end ? end.toString() :  start.toString(),
    });
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
                      <DatePicker
                        monthsShown={2}
                        minDate={new Date()}
                        selected={startDate}
                        onChange={onChange}
                        startDate={startDate}
                        endDate={endDate}
                        value={format(startDate, "dd MMM'' yy")}
                        selectsRange
                      />
                    ) : (
                      <DatePicker
                        monthsShown={2}
                        minDate={new Date()}
                        selectsRange={false}
                        startDate={startDate}
                        onChange={(date: Date) => {
                          setStartDate(date);
                        }}
                        value={format(startDate, "dd MMM'' yy")}
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
                    <DatePicker
                      monthsShown={2}
                      minDate={new Date()}
                      selectsRange={true}
                      startDate={startDate}
                      endDate={endDate}
                      onChange={onChange}
                      value={format(endDate ?? new Date(), "dd MMM'' yy")}
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
