"use client";

import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";

export default function FlightSearch() {
  const verifyToken = async () => {
    const token = localStorage?.getItem("access_token");
    const expireTime = localStorage?.getItem("expireTime");

    if (token && expireTime) {
      const currentDate = new Date();
      const expTime = new Date(expireTime);
      if (currentDate >= expTime) {
        try {
          const response: AxiosResponse = await axios.post(
            "http://localhost:3000/api/verifytoken"
          );
          localStorage.setItem("access_token", response.data.access_token);
          localStorage.setItem("expireTime", response.data.expireTime);
        } catch (error) {
            console.log(error);
            
        }
      }
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      verifyToken();
    }, 20000);
    verifyToken();
    return () => clearInterval(intervalId);
  }, []);

  const handleSubmit = async () => {};
  return (
    <>
      {/*flight start here*/}
      <div className="flight_panel" style={{ display: "block" }}>
        <div className="flight_tabs_wrpr">
          <ul
            className="flight_tabs d-flex flex-wrap"
            id="onewayround_requestType"
          >
            <li>
              <a href="#;" id="HOneWay" className="OneWayTab">
                {" "}
                One Way
              </a>
            </li>
            <li>
              <a href="#;" id="HTwoWay" className="TwoWayTab active">
                Round Trip
              </a>
            </li>
            <li>
              <a href="#" id="HMultiCity" className="MultiCityTab">
                Multi City{" "}
              </a>
            </li>
          </ul>
        </div>
        {/* Oneway */}
        <div
          className="FilghtClass"
          id="HOneWayShow"
          style={{ display: "none" }}
        >
          <div className="search_field_main">
            <div className="search_field_lft">
              <div className="field_row">
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
                      id="from_city"
                      placeholder="City or Airport"
                      className=" "
                    />
                  </div>
                </div>
                <div className="hm_clndr_main">
                  <div className="field_clm_2">
                    <div className="form-group calendar_icon">
                      <label>Departure</label>
                      <input
                        type="text"
                        name=""
                        id="from_city"
                        placeholder="28 Sep'23"
                        className=" "
                      />
                    </div>
                  </div>
                  <div className="field_clm_2 disable">
                    <div className="form-group calendar_icon">
                      <label>Return</label>
                      <input
                        type="text"
                        name=""
                        id="from_city"
                        placeholder="29 Sep'23"
                        className=" "
                      />
                    </div>
                  </div>
                </div>
                <div className="field_clm_3 field_clm_3_psngr">
                  <div className="form-group  down_arrow">
                    <label>Travellers</label>
                    <input
                      type="text"
                      name=""
                      id="from_city"
                      placeholder="1 Travellers, Economy"
                      className=" "
                    />
                  </div>
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
                  <button className="searchBtn" id="searchBtn">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Oneway End*/}
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
                      id="from_city"
                      placeholder="City or Airport"
                      className=" "
                    />
                  </div>
                </div>
                <div className="hm_clndr_main">
                  <div className="field_clm_2">
                    <div className="form-group calendar_icon">
                      <label>Departure</label>
                      <input
                        type="text"
                        name=""
                        id="from_city"
                        placeholder="28 Sep'23"
                        className=" "
                      />
                    </div>
                  </div>
                  <div className="field_clm_2">
                    <div className="form-group calendar_icon">
                      <label>Return</label>
                      <input
                        type="text"
                        name=""
                        id="from_city"
                        placeholder="29 Sep'23"
                        className=" "
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
                      id="from_city"
                      placeholder="1 Travellers, Economy"
                      className=" "
                    />
                  </div>
                  <div
                    className="psngerBox"
                    id="trvlersClass"
                    style={{ display: "none" }}
                  >
                    <button type="button" className="close" />
                    <div className="trvelrsList">
                      <h4>TRAVELLERS</h4>
                      <div className="d-flex traveller_rows justify-content-between">
                        <div className="travelersLHalf">
                          <p>
                            Adults <span>12+ Years</span>
                          </p>
                        </div>
                        <div className="travelersRHalf d-flex">
                          <button
                            className="btn text-center  plus-minus-button"
                            type="button"
                          >
                            {" "}
                            -{" "}
                          </button>
                          <div className="psnrs_travel"> 1 </div>
                          <button
                            className="btn text-center  plus-minus-button"
                            type="button"
                          >
                            {" "}
                            +
                          </button>
                        </div>
                      </div>
                      <div className="d-flex traveller_rows justify-content-between">
                        <div className="travelersLHalf">
                          <p>
                            Children <span>2 - 11 Years</span>
                          </p>
                        </div>
                        <div className="travelersRHalf d-flex">
                          <button
                            className="btn text-center  plus-minus-button"
                            type="button"
                          >
                            {" "}
                            -{" "}
                          </button>
                          <div className="psnrs_travel"> 0 </div>
                          <button
                            className="btn text-center  plus-minus-button"
                            type="button"
                          >
                            {" "}
                            +
                          </button>
                        </div>
                      </div>
                      <div className="d-flex traveller_rows justify-content-between">
                        <div className="travelersLHalf">
                          <p>
                            Infants <span>0 - 2 Years</span>
                          </p>
                        </div>
                        <div className="travelersRHalf d-flex">
                          <button
                            className="btn text-center  plus-minus-button"
                            type="button"
                          >
                            {" "}
                            -{" "}
                          </button>
                          <div className="psnrs_travel"> 0 </div>
                          <button
                            className="btn text-center  plus-minus-button"
                            type="button"
                          >
                            {" "}
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="selectCabn">
                      <div className="form-group down_arrow">
                        <select className="form-control  " id=" ">
                          <option value="Economy">Economy</option>
                          <option value="PremiumEconomy">
                            {" "}
                            Premium Economy
                          </option>
                          <option value="BusinessClass"> Business Class</option>
                          <option value="FirstClass">First Class</option>
                        </select>
                      </div>
                    </div>
                    <div className="psngr_applyBox">
                      <button className="btn btn-block">Apply</button>
                    </div>
                  </div>
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
                    onClick={handleSubmit}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Round End*/}
        {/* Multy */}
        <div
          className="FilghtClass"
          id="HMultiCityShow"
          style={{ display: "none" }}
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
                      id="from_city"
                      placeholder="City or Airport"
                      className=" "
                    />
                  </div>
                </div>
                <div className="field_clm_2">
                  <div className="form-group calendar_icon">
                    <label>Departure</label>
                    <input
                      type="text"
                      name=""
                      id="from_city"
                      placeholder="28 Sep'23"
                      className=" "
                    />
                  </div>
                </div>
                <div className="field_clm_3 field_clm_3_psngr pt-4"> </div>
              </div>
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
                      id="from_city"
                      placeholder="City or Airport"
                      className=" "
                    />
                  </div>
                </div>
                <div className="field_clm_2">
                  <div className="form-group calendar_icon">
                    <label>Departure</label>
                    <input
                      type="text"
                      name=""
                      id="from_city"
                      placeholder="28 Sep'23"
                      className=" "
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
                      id="from_city"
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
      {/*flight package end here*/}
    </>
  );
}
