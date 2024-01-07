import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function MultiCity() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
  return (
    <div>
              {/* Multy */}
              <div
          className="FilghtClass"
          id="HMultiCityShow"
          
        >
          <div className="search_field_main">
            <div className="search_field_lft">
            

              
              <div className="field_row hm_multycity">
                <div className="field_clm_3">
                  <div className="form-group location_icon">
                    <label>Leaving from</label>
                    <input
                      type="text"
                      name=""
                      id="from_city"
                      placeholder="City or Airport"
                      className=" "
                    />
                  </div>
                </div>
                <div className="field_clm_3">
                  <div className="form-group location_icon">
                    <label>Going to</label>
                    <input
                      type="text"
                      name=""
                      id="from_cityw"
                      placeholder="City or Airport"
                      className=" "
                    />
                  </div>
                </div>
                <div className="field_clm_2">
                  <div className="form-group calendar_icon">
                    <label>Departure</label>
                 
      <DatePicker
        selected={endDate}
        onChange={(date:any) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
                  </div>
                </div>
                <div className="field_clm_3 field_clm_3_psngr pt-4">
                  <div className=" d-flex">
                    <button
                      className="button_dark  modifyplusBtn "
                      type="button"
                    >
                      <i className="plusBtn"> </i>
                    </button>
                    <button
                      className="button_dark  modifyplusBtn "
                      type="button"
                    >
                      <i className="minusBtn"> </i>
                    </button>
                  </div>
                </div>
              </div>
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
