import React from "react";

export default function ResultBlock() {
  return (
    <div>
      <div className="result_col">
        {/* resultpanel */}
        <div className="result_panel FlightResultSection">
          <div className="row no-gutters">
            {/* RelsutLeft */}
            <div className="result_panel_col_l">
              <div className="result_details">
                <div className="rslt_fund_main">
                  <div className="rslt_refundable">Refundable with Charge</div>
                </div>
                {/*-leg repeater-*/}
                <div className="result_one_leg">
                  <div className="row no-gutters  ">
                    <div className="col-lg-4 col-md-4  ">
                      <div className="fl_rslt_clm1">
                        <div className="Fl_rslt_sec">
                          <div className="airlogo">
                            {" "}
                            <img src="images/oman_airlogo.png" alt="img" />{" "}
                          </div>
                          <div className="fl_name">Oman Aviation</div>
                        </div>
                        <div className="air_code">
                          <div>
                            <p>WY226</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-8 Result_time_sec">
                      <div className="air_time_sector align-items-center rhtPdng">
                        {" "}
                        <span className="air_time_Time">09:55</span>{" "}
                        <span className="air_time_aircode all_airport_rslt">
                          XNB
                        </span>{" "}
                      </div>
                      <div className="air__stops">
                        <div className="airDurationStops">
                          {" "}
                          <span>1 Stop</span>
                          <div className="flightIcon"> </div>
                          <div className="result_time_bag_main">
                            <div className="rslt_time">
                              <i className="Fresult_time" />
                              <p>1h 45m</p>
                            </div>
                            <div className="rslt_bag">
                              <i className="Fresult_bag" />
                              <p>Baggage options available</p>
                            </div>
                          </div>
                          {/*<div class="stop-overs"> <span class="stops td-tooltip">CAI <span class="tooltiptext"> <span>0D</span> <span>2H</span> <span>50M</span> <span> stopover</span> <br>
                        Cairo Intl Airport </span> </span><span class="stops td-tooltip">CAI <span class="tooltiptext"> <span>0D</span> <span>2H</span> <span>50M</span> <span> stopover</span> <br>
                        Cairo Intl Airport </span> </span> </div>*/}
                        </div>
                      </div>
                      <div className="air_time_sector align-items-center lftPdng">
                        {" "}
                        <span className="air_time_Time">15:35</span>{" "}
                        <span className="air_time_aircode">KWI</span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                {/*-leg repeater-*/}
                {/*-leg repeater-*/}
                <div className="result_one_leg">
                  <div className="row no-gutters  ">
                    <div className="col-lg-4 col-md-4  ">
                      <div className="fl_rslt_clm1">
                        <div className="Fl_rslt_sec">
                          <div className="airlogo">
                            {" "}
                            <img
                              src="images/kuwait_airlogo.png"
                              alt="img"
                            />{" "}
                          </div>
                          <div className="fl_name">Kuwait Airways</div>
                        </div>
                        <div className="air_code">
                          <div>
                            <p>KA226</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-8 Result_time_sec  ">
                      <div className="air_time_sector align-items-center rhtPdng">
                        {" "}
                        <span className="air_time_Time">09:55</span>{" "}
                        <span className="air_time_aircode ">KWI</span>{" "}
                      </div>
                      <div className="air__stops">
                        <div className="airDurationStops">
                          {" "}
                          <span>Non Stop</span>
                          <div className="flightIcon"> </div>
                          <div className="result_time_bag_main">
                            <div className="rslt_time">
                              <i className="Fresult_time" />
                              <p>1h 45m</p>
                            </div>
                            <div className="rslt_bag">
                              <i className="Fresult_bag" />
                              <p>Baggage options available</p>
                            </div>
                          </div>
                          {/*<div class="stop-overs"> <span class="stops td-tooltip">CAI <span class="tooltiptext"> <span>0D</span> <span>2H</span> <span>50M</span> <span> stopover</span> <br>
                        Cairo Intl Airport </span> </span><span class="stops td-tooltip">CAI <span class="tooltiptext"> <span>0D</span> <span>2H</span> <span>50M</span> <span> stopover</span> <br>
                        Cairo Intl Airport </span> </span> </div>*/}
                        </div>
                      </div>
                      <div className="air_time_sector align-items-center lftPdng">
                        {" "}
                        <span className="air_time_Time">15:35</span>{" "}
                        <span className="air_time_aircode all_airport_rslt">
                          XNB
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                {/*-leg repeater-*/}
              </div>
            </div>
            {/* RelsutLeft */}

            {/* Resultright */}
            <div className="result_panel_col_R d-flex flex-column justify-content-center">
              <div className="rslt_rht_fastest">
                <div className="rslt_fastest_btn">
                  <i className="fastest_icon" />
                  Fastest
                </div>
              </div>
              <div className="resultfareDetails">
                <div className="FrSelctMain">
                  {/*<div class="strikedfare"><span class="strike"><span>AED</span><span>85.000</span></span></div>*/}
                  <div className="resultFare">
                    <span>AED</span> <span>80.000</span>
                  </div>
                </div>
                <div className="FrSelctMain">
                  <div className="FlgtSelect d-flex">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#fl_brandes_rslt"
                      className="theme_btnStyle resltselectbtn branded_btn"
                    >
                      Select <i className="">+</i>
                    </a>{" "}
                  </div>
                  <div className="Fl_Dtls">
                    <div className="d-flex justify-content-end">
                      <a
                        href="javascript:void(0);"
                        data-toggle="modal"
                        data-target="#fl_details_rslt"
                        className="button_light flightdetailsbt result_btn"
                      >
                        Flight Details <i className="flight_dtls_arrow" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Resultright */}
          </div>
          <a href="javascript:void(0);" className="result__more_options">
            +10 more at same price <i className="flight_moreoption_down" />
          </a>{" "}
        </div>
        {/* resultpanel */}
      </div>
    </div>
  );
}
