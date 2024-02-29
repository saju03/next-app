import React, { useState } from "react";
import MultiCityLegs from "./MultiCityLegs";
import {
  AirportData,
  MinDateState,
  MultiCityComponentProps,
  MultiCitySearchDataType,
} from "@/Interfaces";
import TravellerBox from "./TravellerBox";

type LoopLengthElementType = number;

type SetLoopLengthType = React.Dispatch<
  React.SetStateAction<LoopLengthElementType[]>
>;

interface MyComponentProps {
  loopLength: LoopLengthElementType[];
  setLoopLength: SetLoopLengthType;
}

export default function MultiCity({
  MultiCitySearchData,
  setMultiCitySearchData,
  isOpen,
  setOpen,
}: MultiCityComponentProps) {
  const [minDate, setMinDate] = useState<MinDateState>({
    leg1: new Date(),
    leg2: new Date(),
    leg3: new Date(),
    leg4: new Date(),
  });
  const [loopLength, setLoopLength] = useState([1, 2]);

  const handleSearch = () => {
    for (let i = 0; i < loopLength.length; i++) {
      const e: number = loopLength[i];
      const fromCityPrefix = `fromCity${e}` as keyof MultiCitySearchDataType;
      const toCityPrefix = `toCity${e}` as keyof MultiCitySearchDataType;
      const fromCityData = MultiCitySearchData[fromCityPrefix] as AirportData;
      const toCityData = MultiCitySearchData[toCityPrefix] as AirportData;
      if (
        MultiCitySearchData[fromCityPrefix] == "" ||
        MultiCitySearchData[toCityPrefix] == "" ||
        MultiCitySearchData[fromCityPrefix] == null ||
        MultiCitySearchData[toCityPrefix] == null
      ) {
        alert("enter city or airport on all fields");
        return
      }

      if (fromCityData._source.code === toCityData._source.code) {
        alert("diparture and arravial airport can t be same");
        return
      }
    }
   
    
  };

  return (
    <div>
      {/* Multy */}
      <div className="FilghtClass" id="HMultiCityShow">
        <div className="search_field_main">
          <div className="search_field_lft">
            {loopLength.map((i) => {
              return (
                <MultiCityLegs
                  MultiCitySearchData={MultiCitySearchData}
                  setMultiCitySearchData={setMultiCitySearchData}
                  index={i}
                  key={i}
                  loopLength={loopLength}
                  setLoopLength={setLoopLength}
                  isMultiCity={true}
                  setMinDate={setMinDate}
                  minDate={minDate}
                  isOpen={false}
                  setOpen={function (
                    value: React.SetStateAction<boolean>
                  ): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              );
            })}

            <div className="field_row hm_multycity">
              <TravellerBox
                setSearchData={setMultiCitySearchData}
                setOpen={setOpen}
                isOpen={isOpen}
                searchData={MultiCitySearchData}
              />

              <div className="field_clm_3">
                <div className="hm_nonstop hm_padding ">
                  <div className="hmcol_4 hmStops">
                    <input type="checkbox" id="nonstopMulty" name="IsDirect" />
                    <label htmlFor="nonstopMulty" className="">
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
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Multy End*/}
    </div>
  );
}
