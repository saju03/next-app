import React from "react";

export default function ModifySearch() {
  return (
    <div>
      <section className="modifyBox">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="Flight_SrchBox" style={{ display: "block" }}>
                <div className="flight_tabs_wrpr">
                  <ul
                    className="flight_tabs d-flex flex-wrap"
                    id="onewayround_requestType"
                  >
                    <li>
                      <a
                        href=""
                        id="OneWay"
                        className="OneWayTab"
                      >
                        {" "}
                        One Way
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        id="TwoWay"
                        className="TwoWayTab active"
                      >
                        Round Trip
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        id="MultiCity"
                        className="MultiCityTab"
                      >
                        Multi City{" "}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="SrchArea">
                  <div className="FlightArea">
                    <div className="roundTrip">
                      <div className="Search_Lft">
                        <div className="Search_LftOur">
                          {/* Oneway */}
                          <div
                            className="FilghtClass"
                            id="OneWayShow"
                            style={{ display: "none" }}
                          >
                            <div className="field_outr">
                              <div className="hm_col_01 fld_bdr_right">
                                <label>
                                  <input
                                    type="text"
                                    name=""
                                    placeholder="Dubai Airport-UNITED ARAB EMIRATES"
                                  />
                                </label>
                                <a className="clearBtn" />{" "}
                              </div>
                              <div className="hm_col_01 fld_bdr_right">
                                <label>
                                  <input
                                    type="text"
                                    name=""
                                    placeholder="Kuwait-Kuwait Intl-KUWAIT"
                                  />
                                </label>
                                <a className="clearBtn" />{" "}
                              </div>
                              <div className="hm_col_02 fld_bdr_right">
                                <label>
                                  <span className="AirpCity">Departure</span>
                                  <p className="daysformay">
                                    {" "}
                                    <span>29</span>
                                    <span>Sep’23</span>{" "}
                                  </p>
                                </label>
                              </div>
                              <div className="hm_col_02 fld_bdr_right return_date disable">
                                <label>
                                  <span className="AirpCity">Return</span>
                                  <p className="daysformay">
                                    {" "}
                                    <span>30</span>
                                    <span>Sep’23</span>{" "}
                                  </p>
                                </label>
                              </div>
                              <div className="hm_col_03  ">
                                <label>
                                  <p className="daysformay">
                                    {" "}
                                    <span>2</span>
                                    <span>Travellers</span>{" "}
                                  </p>
                                  <span className="AirpCity">
                                    1 Adult, 1 Child, Economy
                                  </span>
                                </label>
                                {/*<div class="psngerBox" id="trvlersClass" style="display:none;">
                      <button type="button" class="close"></button>
                      <div class="trvelrsList">
                        <h4>TRAVELLERS</h4>
                        <div class="d-flex traveller_rows justify-content-between">
                          <div class="travelersLHalf">
                            <p>Adults <span>12+ Years</span></p>
                          </div>
                          <div class="travelersRHalf d-flex">
                            <button class="btn text-center  plus-minus-button" type="button"> - </button>
                            <div class="psnrs_travel"> 1 </div>
                            <button class="btn text-center  plus-minus-button" type="button"> +</button>
                          </div>
                        </div>
                        <div class="d-flex traveller_rows justify-content-between">
                          <div class="travelersLHalf">
                            <p>Children <span>2 - 11 Years</span></p>
                          </div>
                          <div class="travelersRHalf d-flex">
                            <button class="btn text-center  plus-minus-button" type="button"> - </button>
                            <div class="psnrs_travel"> 0 </div>
                            <button class="btn text-center  plus-minus-button" type="button"> +</button>
                          </div>
                        </div>
                        <div class="d-flex traveller_rows justify-content-between">
                          <div class="travelersLHalf">
                            <p>Infants <span>0 - 2 Years</span></p>
                          </div>
                          <div class="travelersRHalf d-flex">
                            <button class="btn text-center  plus-minus-button" type="button"> - </button>
                            <div class="psnrs_travel"> 0 </div>
                            <button class="btn text-center  plus-minus-button" type="button"> +</button>
                          </div>
                        </div>
                      </div>
                      <div class="psngr_applyBox">
                        <button class="btn btn-block">Apply</button>
                      </div>
                    </div>*/}
                              </div>
                            </div>
                            <div className="mdfy_clm2">
                              <div className="field_clm_3 ml-0">
                                <div className="hm_nonstop hm_padding ">
                                  <div className="hmcol_4 hmStops">
                                    <input
                                      type="checkbox"
                                      id="IsDirect"
                                      name="IsDirect"
                                    />
                                    <label htmlFor="IsDirect" className="">
                                      Non Stop
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Oneway */}
                          {/* RoundTrip */}
                          <div className="FilghtClass" id="TwoWayShow">
                            <div className="field_outr">
                              <div className="hm_col_01 fld_bdr_right">
                                <label>
                                  <input
                                    type="text"
                                    name=""
                                    placeholder="Dubai Airport-UNITED ARAB EMIRATES"
                                  />
                                </label>
                                <a className="clearBtn" />{" "}
                              </div>
                              <div className="hm_col_01 fld_bdr_right">
                                <label>
                                  <input
                                    type="text"
                                    name=""
                                    placeholder="Kuwait-Kuwait Intl-KUWAIT"
                                  />
                                </label>
                                <a className="clearBtn" />{" "}
                              </div>
                              <div className="hm_clndr_main">
                                <div className="hm_col_02 fld_bdr_right">
                                  <label>
                                    <span className="AirpCity">Departure</span>
                                    <p className="daysformay">
                                      {" "}
                                      <span>29</span>
                                      <span>Sep’23</span>{" "}
                                    </p>
                                  </label>
                                </div>
                                <div className="hm_col_02 fld_bdr_right return_date">
                                  <label>
                                    <span className="AirpCity">Return</span>
                                    <p className="daysformay">
                                      {" "}
                                      <span>30</span>
                                      <span>Sep’23</span>{" "}
                                    </p>
                                  </label>
                                </div>
                              </div>
                              <div className="hm_col_03 HmTravel">
                                <label>
                                  <p className="daysformay">
                                    {" "}
                                    <span>2</span>
                                    <span>Travellers</span>{" "}
                                  </p>
                                  <span className="AirpCity">
                                    1 Adult, 1 Child, Economy
                                  </span>
                                </label>
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
                                        <option value="BusinessClass">
                                          {" "}
                                          Business Class
                                        </option>
                                        <option value="FirstClass">
                                          First Class
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="psngr_applyBox">
                                    <button className="btn btn-block">
                                      Apply
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mdfy_clm2">
                              <div className="field_clm_3 ml-0">
                                <div className="hm_nonstop hm_padding ">
                                  <div className="hmcol_4 hmStops">
                                    <input
                                      type="checkbox"
                                      id="mnonstop2"
                                      name="IsDirect"
                                    />
                                    <label htmlFor="mnonstop2" className="">
                                      Non Stop
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* RoundTrip */}
                          {/* MultiCity*/}
                          <div
                            className="FilghtMultyClass"
                            id="MultiCityShow"
                            style={{ display: "none" }}
                          >
                            <div className="field_outr_multy">
                              <div className="MultiCityRepeat ">
                                <div className="hm_col_01 fld_bdr_right">
                                  <label>
                                    <input
                                      type="text"
                                      name=""
                                      placeholder="Dubai Airport-UNITED ARAB EMIRATES"
                                    />
                                  </label>
                                  <a className="clearBtn" />{" "}
                                </div>
                                <div className="hm_col_01 fld_bdr_right">
                                  <label>
                                    <input
                                      type="text"
                                      name=""
                                      placeholder="Kuwait-Kuwait Intl-KUWAIT"
                                    />
                                  </label>
                                  <a className="clearBtn" />{" "}
                                </div>
                                <div className="hm_col_02 fld_bdr_right">
                                  <label>
                                    <span className="AirpCity">Departure</span>
                                    <p className="daysformay">
                                      {" "}
                                      <span>29</span>
                                      <span>Sep’23</span>{" "}
                                    </p>
                                  </label>
                                </div>
                                <div className="hm_col_03  ">
                                  <label>
                                    <p className="daysformay">
                                      {" "}
                                      <span>2</span>
                                      <span>Travellers</span>{" "}
                                    </p>
                                    <span className="AirpCity">
                                      1 Adult, 1 Child, Economy
                                    </span>
                                  </label>
                                  <div
                                    className="psngerBox"
                                    id=" "
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
                                          <div className="psnrs_travel">
                                            {" "}
                                            1{" "}
                                          </div>
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
                                          <div className="psnrs_travel">
                                            {" "}
                                            0{" "}
                                          </div>
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
                                          <div className="psnrs_travel">
                                            {" "}
                                            0{" "}
                                          </div>
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
                                        <select
                                          className="form-control  "
                                          id=" "
                                        >
                                          <option value="Economy">
                                            Economy
                                          </option>
                                          <option value="PremiumEconomy">
                                            {" "}
                                            Premium Economy
                                          </option>
                                          <option value="BusinessClass">
                                            {" "}
                                            Business Class
                                          </option>
                                          <option value="FirstClass">
                                            First Class
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="psngr_applyBox">
                                      <button className="btn btn-block">
                                        Apply
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="MultiCityRepeat ">
                                <div className="hm_col_01 fld_bdr_right">
                                  <label>
                                    <input
                                      type="text"
                                      name=""
                                      placeholder="Dubai Airport-UNITED ARAB EMIRATES"
                                    />
                                  </label>
                                  <a className="clearBtn" />{" "}
                                </div>
                                <div className="hm_col_01 fld_bdr_right">
                                  <label>
                                    <input
                                      type="text"
                                      name=""
                                      placeholder="Kuwait-Kuwait Intl-KUWAIT"
                                    />
                                  </label>
                                  <a className="clearBtn" />{" "}
                                </div>
                                <div className="hm_col_02 fld_bdr_right">
                                  <label>
                                    <span className="AirpCity">Departure</span>
                                    <p className="daysformay">
                                      {" "}
                                      <span>29</span>
                                      <span>Sep’23</span>{" "}
                                    </p>
                                  </label>
                                </div>
                                <div className="hm_col_03 multy_plusmain">
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
                            </div>
                            <div className="mdfy_clm2">
                              <div className="field_clm_3 ml-0">
                                <div className="hm_nonstop hm_padding ">
                                  <div className="hmcol_4 hmStops">
                                    <input
                                      type="checkbox"
                                      id="mnonstop2"
                                      name="IsDirect"
                                    />
                                    <label htmlFor="mnonstop2" className="">
                                      Non Stop
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* MultiCity End*/}
                        </div>
                      </div>
                      <div className="Search_Rht">
                        {/*<div class="showTrip-fl">Show Trips</div>*/}
                        <button className="button_theme MsearchBtn">
                          <i className="hmsrchIcon" />
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
