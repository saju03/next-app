import React, { useState } from "react";
import MultiCityInputs from "./MultiCityInputs";
import { MultiCityComponentProps } from "@/Interfaces";


type LoopLengthElementType = number;

type SetLoopLengthType = React.Dispatch<React.SetStateAction<LoopLengthElementType[]>>;

interface MyComponentProps {
  loopLength: LoopLengthElementType[];
  setLoopLength: SetLoopLengthType;
}



export default function MultiCity({ MultiCitySearchData, setMultiCitySearchData }: MultiCityComponentProps) {

  const [loopLength, setLoopLength] = useState([
    1, 2
  ])
  return (
    <div>
      {/* Multy */}
      <div
        className="FilghtClass"
        id="HMultiCityShow"

      >
        <div className="search_field_main">
          <div className="search_field_lft">






            {
              loopLength.map((i) => {
                return (
                  <MultiCityInputs MultiCitySearchData={MultiCitySearchData} setMultiCitySearchData={setMultiCitySearchData} index={i} key={i} loopLength={loopLength} setLoopLength={setLoopLength} isMultiCity={true} />
                )
              })
            }






            <div className="field_row hm_multycity">
              <div className="field_clm_3 field_passenger_sec">
                <div className="form-group  down_arrow">
                  <label>Travellers</label>
                  <input
                    type="text"
                    name=""
                    id="from_cityd"
                    placeholder="1 Travellers, Economy"
                    className=" "
                  />
                </div>

              </div>
              <div className="field_clm_3">
                <div className="hm_nonstop hm_padding ">
                  <div className="hmcol_4 hmStops">
                    <input
                      type="checkbox"
                      id="nonstopMulty"
                      name="IsDirect"
                    />
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
                <button className="searchBtn" id="searchBtn">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Multy End*/}
    </div>
  )
}
