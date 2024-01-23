import React from "react";

export default function Filter() {
  return (
    <>
      {" "}
      <div className="col-lg-3">
        <div className="package_filter">
          {" "}
          <span className="filterClose" />
          <div className="pack_FilterMain">
            <div className="Fl_filter_hd">
              <h2 className="">
                <img src="images/filter_icon.svg" /> <span>Filter</span>
              </h2>
              <button className="Filtr_reset">RESET</button>
            </div>
            <div className="Filterbox">
              <div className="Filterhead ">
                <div className="FilterTitle d-flex justify-content-between align-items-center">
                  {" "}
                  <span>Stops</span>
                  <span>
                    <i className="icon_downarrow" />
                  </span>{" "}
                </div>
              </div>
              <div className="FilterContent">
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-12">
                    <ul className="nav nav-tabs nav-fill" role="tablist">
                      <li className="nav-item">
                        {" "}
                        <a
                          className="nav-link active show"
                          data-toggle="tab"
                          href="#filteronward"
                          role="tab"
                          aria-controls="filteronward"
                          aria-selected="true"
                        >
                          {" "}
                          <span>Onward</span>{" "}
                        </a>{" "}
                      </li>
                      <li className="nav-item">
                        {" "}
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#filterreturn"
                          role="brandedtab2"
                          aria-controls="filterreturn"
                          aria-selected="false"
                        >
                          {" "}
                          <span>Return</span>{" "}
                        </a>{" "}
                      </li>
                    </ul>
                    <div className="tab-content mt-3">
                      <div
                        className="tab-pane active show"
                        id="filteronward"
                        role="tabpanel"
                        aria-labelledby="filteronward-tab"
                      >
                        <ul className="pack_filterRadio">
                          <li>
                            <input type="radio" id="fnon1" name="radio-group" />
                            <label htmlFor="fnon1">Direct flights only</label>
                          </li>
                          <li>
                            <input type="radio" id="fnon2" name="radio-group" />
                            <label htmlFor="fnon2">1 Stop</label>
                          </li>
                          <li>
                            <input type="radio" id="fnon3" name="radio-group" />
                            <label htmlFor="fnon3">1+ Stop</label>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="tab-pane"
                        id="filterreturn"
                        role="tabpanel"
                        aria-labelledby="filterreturn-tab"
                      >
                        <ul className="pack_filterRadio">
                          <li>
                            <input type="radio" id="fnon4" name="radio-group" />
                            <label htmlFor="fnon4">Direct flights only</label>
                          </li>
                          <li>
                            <input type="radio" id="fnon5" name="radio-group" />
                            <label htmlFor="fnon5">1 Stop</label>
                          </li>
                          <li>
                            <input type="radio" id="fnon6" name="radio-group" />
                            <label htmlFor="fnon6">1+ Stop</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Filterbox">
              <div className="Filterhead ">
                <div className="FilterTitle d-flex justify-content-between align-items-center">
                  {" "}
                  <span>Fare Type</span>
                  <span>
                    <i className="icon_downarrow" />
                  </span>{" "}
                </div>
              </div>
              <div className="FilterContent packFilterType">
                <ul>
                  <li>
                    <input type="checkbox" id="Refund1" />
                    <label htmlFor="Refund1">Refundable </label>
                  </li>
                  <li>
                    <input type="checkbox" id="Refund2" />
                    <label htmlFor="Refund2">Non Refundable </label>
                  </li>
                  <li>
                    <input type="checkbox" id="Refund3" />
                    <label htmlFor="Refund3">Refundable with Charge </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="Filterbox">
              <div className="Filterhead ">
                <div className="FilterTitle d-flex justify-content-between align-items-center">
                  {" "}
                  <span>Price</span>
                  <span>
                    <i className="icon_downarrow" />
                  </span>{" "}
                </div>
              </div>
              <div className="FilterContent">
                <div className="priceFilterVlaue d-flex justify-content-between">
                  <p className="slide_val">
                    <span>AED</span> <span> 300</span>
                  </p>
                  <p className="slide_val">
                    <span>AED</span> <span> 1500</span>
                  </p>
                </div>
                <div className="range_ui_block">
                  <div className="clearfix" />
                  <div className="slider-range" />
                  <div className="clearfix" />
                </div>
              </div>
            </div>
            <div className="Filterbox">
              <div className="Filterhead ">
                <div className="FilterTitle d-flex justify-content-between align-items-center">
                  {" "}
                  <span>Layover Time</span>
                  <span>
                    <i className="icon_downarrow" />
                  </span>{" "}
                </div>
              </div>
              <div className="FilterContent">
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-12">
                    <ul className="nav nav-tabs nav-fill" role="tablist">
                      <li className="nav-item">
                        {" "}
                        <a
                          className="nav-link active show"
                          data-toggle="tab"
                          href="#timeonward"
                          role="tab"
                          aria-controls="timeonward"
                          aria-selected="true"
                        >
                          {" "}
                          <span>Onward</span>{" "}
                        </a>{" "}
                      </li>
                      <li className="nav-item">
                        {" "}
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#timereturn"
                          role="brandedtab2"
                          aria-controls="timereturn"
                          aria-selected="false"
                        >
                          {" "}
                          <span>Return</span>{" "}
                        </a>{" "}
                      </li>
                    </ul>
                    <div className="tab-content mt-3">
                      <div
                        className="tab-pane active show"
                        id="timeonward"
                        role="tabpanel"
                        aria-labelledby="timeonward-tab"
                      >
                        <div className="d-flex flex-wrap filterDuration">
                          <div className="box1">0h - 5h </div>
                          <div className="box1">5h - 10h</div>
                          <div className="box1">10h - 15h</div>
                          <div className="box1">15 +</div>
                        </div>
                      </div>
                      <div
                        className="tab-pane"
                        id="timereturn"
                        role="tabpanel"
                        aria-labelledby="timereturn-tab"
                      >
                        <div className="d-flex flex-wrap filterDuration">
                          <div className="box1">0h - 5h </div>
                          <div className="box1">5h - 10h</div>
                          <div className="box1">10h - 15h</div>
                          <div className="box1">15 +</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Filterbox">
              <div className="Filterhead ">
                <div className="FilterTitle d-flex justify-content-between align-items-center">
                  {" "}
                  <span>Layour Airport</span>
                  <span>
                    <i className="icon_downarrow" />
                  </span>{" "}
                </div>
              </div>
              <div className="FilterContent packFilterType">
                <ul>
                  <li>
                    <input type="checkbox" id="la-1" />
                    <label htmlFor="la-1">Abu Dhabi Intl Airport </label>
                  </li>
                  <li>
                    <input type="checkbox" id="la-2" />
                    <label htmlFor="la-2">Bandaranaike Intl Airport </label>
                  </li>
                  <li>
                    <input type="checkbox" id="la-3" />
                    <label htmlFor="la-3">Bahrain Intl Airport </label>
                  </li>
                  <li>
                    <input type="checkbox" id="la-4" />
                    <label htmlFor="la-4">Chhatrapati Shivaji </label>
                  </li>
                  <li>
                    <input type="checkbox" id="la-5" />
                    <label htmlFor="la-5">Chennai Airport </label>
                  </li>
                  <li>
                    <input type="checkbox" id="la-6" />
                    <label htmlFor="la-6">Delhi Indira Gandhi Intl </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="Filterbox">
              <div className="Filterhead ">
                <div className="FilterTitle d-flex justify-content-between align-items-center">
                  {" "}
                  <span>Time</span>
                  <span>
                    <i className="icon_downarrow" />
                  </span>{" "}
                </div>
              </div>
              <div className="FilterContent">
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-12">
                    <ul className="nav nav-tabs nav-fill" role="tablist">
                      <li className="nav-item">
                        {" "}
                        <a
                          className="nav-link active show"
                          data-toggle="tab"
                          href="#timesonward"
                          role="tab"
                          aria-controls="timesonward"
                          aria-selected="true"
                        >
                          {" "}
                          <span>Onward</span>{" "}
                        </a>{" "}
                      </li>
                      <li className="nav-item">
                        {" "}
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#timesreturn"
                          role="tab"
                          aria-controls="timesreturn"
                          aria-selected="false"
                        >
                          {" "}
                          <span>Return</span>{" "}
                        </a>{" "}
                      </li>
                    </ul>
                    <div className="tab-content mt-3">
                      <div
                        className="tab-pane active show"
                        id="timesonward"
                        role="tabpanel"
                        aria-labelledby="timeonward-tab"
                      >
                        <div className="DepartTime Tab-condent-1">
                          <div className="departArrivTimeFiltr mb-3">
                            <h4>Take off Cochin (COK)</h4>
                            <ul className="d-flex">
                              <li>
                                <input type="checkbox" id="Dtime1" />
                                <label htmlFor="Dtime1">
                                  {" "}
                                  <span className="Filter_stop_icon1" />{" "}
                                  <span> 00 - 06 </span>{" "}
                                </label>
                              </li>
                              <li>
                                <input type="checkbox" id="Dtime2" />
                                <label htmlFor="Dtime2">
                                  {" "}
                                  <span className="Filter_stop_icon2" />{" "}
                                  <span> 00 - 06 </span>{" "}
                                </label>
                              </li>
                              <li>
                                <input type="checkbox" id="Dtime3" />
                                <label htmlFor="Dtime3">
                                  {" "}
                                  <span className="Filter_stop_icon3" />{" "}
                                  <span> 00 - 06 </span>{" "}
                                </label>
                              </li>
                              <li>
                                <input type="checkbox" id="Dtime4" />
                                <label htmlFor="Dtime4">
                                  {" "}
                                  <span className="Filter_stop_icon4" />{" "}
                                  <span> 00 - 06 </span>{" "}
                                </label>
                              </li>
                            </ul>
                          </div>
                          <div className="departArrivTimeFiltr mb-0">
                            <h4>Take off Dubai (DXB)</h4>
                            <ul className="d-flex">
                              <li>
                                <input type="checkbox" id="D2time1" />
                                <label htmlFor="D2time1">
                                  {" "}
                                  <span className="Filter_stop_icon1" />{" "}
                                  <span> 00 - 06 </span>{" "}
                                </label>
                              </li>
                              <li>
                                <input type="checkbox" id="D2time2" />
                                <label htmlFor="D2time2">
                                  {" "}
                                  <span className="Filter_stop_icon2" />{" "}
                                  <span> 00 - 06 </span>{" "}
                                </label>
                              </li>
                              <li>
                                <input type="checkbox" id="D2time3" />
                                <label htmlFor="D2time3">
                                  {" "}
                                  <span className="Filter_stop_icon3" />{" "}
                                  <span> 00 - 06 </span>{" "}
                                </label>
                              </li>
                              <li>
                                <input type="checkbox" id="D2time4" />
                                <label htmlFor="D2time4">
                                  {" "}
                                  <span className="Filter_stop_icon4" />{" "}
                                  <span> 00 - 06 </span>{" "}
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane"
                        id="timesreturn"
                        role="tabpanel"
                        aria-labelledby="timereturn-tab"
                      >
                        {" "}
                        w{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Filterbox">
              <div className="Filterhead ">
                <div className="FilterTitle d-flex justify-content-between align-items-center">
                  {" "}
                  <span>Airlines</span>
                  <span>
                    <i className="icon_downarrow" />
                  </span>{" "}
                </div>
              </div>
              <div className="FilterContent packFilterType">
                <ul>
                  <li>
                    <input type="checkbox" id="ar-1" />
                    <label htmlFor="ar-1">Air India </label>
                  </li>
                  <li>
                    <input type="checkbox" id="ar-2" />
                    <label htmlFor="ar-2">Emirates Airlines </label>
                  </li>
                  <li>
                    <input type="checkbox" id="ar-3" />
                    <label htmlFor="ar-3">Etihad Airways </label>
                  </li>
                  <li>
                    <input type="checkbox" id="ar-4" />
                    <label htmlFor="ar-4">Gulf Air Company </label>
                  </li>
                  <li>
                    <input type="checkbox" id="ar-5" />
                    <label htmlFor="ar-5">Hahn Air Lines </label>
                  </li>
                  <li>
                    <input type="checkbox" id="ar-6" />
                    <label htmlFor="ar-6">SriLankan Airlines </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}
