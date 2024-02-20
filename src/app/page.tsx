import App from "./_Flight/App";
import Footer from "../components/Flight/_partials/Footer";
import HeaderNavBar from "../components/Flight/_partials/HeaderNavBar";





export default function Home() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        name="viewport"
      />
      <link rel="icon" type="image/png"  />
      <title>Maqam.com</title>
      {/*base style start here*/}

      {/*page style end here*/}
      <div className="mobileApp_bg" />
    

      <div className="banner_main">
        <HeaderNavBar />
       

        <div className="container">
          {/*Search start here*/}
          <section className="search_are_outer">
            <div className="banner_tittle">
              <h1>Journey of Faith</h1>
              <p> Your destination before the journey</p>
            </div>
            <div className="search_area">
              <div className="search_area_topnav">
                <ul>
                  <li>
                    <a
                      className="tab-links umrah_package_click active"
                      href="#"
                    >
                      {" "}
                      <i className="umrah_package_icon" />
                      Umrah Package
                    </a>
                  </li>
                  <li>
                    <a className="tab-links" href="#">
                      {" "}
                      <i className="design_package_icon" />
                      Design Package
                    </a>
                  </li>
                  <li>
                    <a className="flight_click tab-links" href="#">
                      {" "}
                      <i className="flight_icon" />
                      Flight
                    </a>
                  </li>
                  <li>
                    <a className="hotel_click tab-links" href="#">
                      {" "}
                      <i className="hotel_icon" />
                      Hotel
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mob_nav_crsl">
                <div className="owl-carousel owl-theme" id="mobilenav">
                  <div className="item">
                    <div className="umrah_package_click  mobile_navigation_list">
                      {" "}
                      <span className="hmmobRounds">
                        <i className="umrah_package_icon" />
                      </span>{" "}
                      Umrah Package{" "}
                    </div>
                  </div>
                  <div className="item">
                    <div className="mobile_navigation_list">
                      {" "}
                      <span className="hmmobRounds">
                        <i className="design_package_icon" />
                      </span>{" "}
                      Design Package{" "}
                    </div>
                  </div>
                  <div className="item">
                    <div className="flight_click mobile_navigation_list">
                      {" "}
                      <span className="hmmobRounds">
                        <i className="flight_icon" />
                      </span>{" "}
                      Flight{" "}
                    </div>
                  </div>
                  <div className="item">
                    <div className="hotel_click mobile_navigation_list">
                      {" "}
                      <span className="hmmobRounds">
                        <i className="hotel_icon" />
                      </span>{" "}
                      Hotel{" "}
                    </div>
                  </div>
                  <div className="item">
                    <div className="staticpck_click mobile_navigation_list">
                      {" "}
                      <span className="hmmobRounds">
                        <i className="static_icon" />
                      </span>{" "}
                      Static Package{" "}
                    </div>
                  </div>
                  <div className="item">
                    <div className="mobile_navigation_list">
                      {" "}
                      <span className="hmmobRounds">
                        <i className="transfers_icon" />
                      </span>{" "}
                      Transfers{" "}
                    </div>
                  </div>
                  <div className="item">
                    <div className="insurance_click mobile_navigation_list">
                      {" "}
                      <span className="hmmobRounds">
                        <i className="insurance_icon" />
                      </span>{" "}
                      Insurance{" "}
                    </div>
                  </div>
                  <div className="item">
                    <div className="mobile_navigation_list">
                      {" "}
                      <span className="hmmobRounds">
                        <i className="activities_icon" />
                      </span>{" "}
                      Activities{" "}
                    </div>
                  </div>
                  <div className="item">
                    <div className="mobile_navigation_list">
                      <a
                        data-toggle="modal"
                        data-target="#visa"
                        href="#visa"
                        id="showRegister"
                      >
                        {" "}
                        <span className="hmmobRounds">
                          <i className="visa_icon" />
                        </span>{" "}
                        Visa{" "}
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="mobile_navigation_list">
                      {" "}
                      <span className="hmmobRounds">
                        <i className="bus_icon" />
                      </span>{" "}
                      Bus{" "}
                    </div>
                  </div>
                  <div className="item">
                    <div className="mobile_navigation_list">
                      {" "}
                      <span className="hmmobRounds">
                        <i className="train_icon" />
                      </span>{" "}
                      Train{" "}
                    </div>
                  </div>
                  <div className="item">
                    {" "}
                    <a href="group_booking.html">
                      <div className="mobile_navigation_list">
                        {" "}
                        <span className="hmmobRounds">
                          <i className="train_icon" />
                        </span>{" "}
                        Group Booking{" "}
                      </div>
                    </a>{" "}
                  </div>
                </div>
              </div>
              {/*Search Panel start here*/}
              <div className="searchpanel_box">
                {/*flight start here*/}
                <App />
               
              </div>
              {/*Search Panel end here*/}
              <div className="search_area_bottomnav">
                <ul>
                  <li>
                    <a href="#" className="staticpck_click tab-links">
                      {" "}
                      <span>
                        <i className="static_icon" />
                      </span>{" "}
                      <span>Static Package</span>{" "}
                    </a>{" "}
                  </li>
                  <li>
                    <a href="#" className="tab-links">
                      {" "}
                      <span>
                        <i className="transfers_icon" />
                      </span>{" "}
                      <span>Transfers</span>{" "}
                    </a>{" "}
                  </li>
                  <li>
                    <a href="#" className="insurance_click tab-links">
                      {" "}
                      <span>
                        <i className="insurance_icon" />
                      </span>{" "}
                      <span>Insurance</span>{" "}
                    </a>{" "}
                  </li>
                  <li>
                    <a href="#" className="activity_click tab-links">
                      {" "}
                      <span>
                        <i className="activities_icon" />
                      </span>{" "}
                      <span>Activities</span>{" "}
                    </a>{" "}
                  </li>
                  <li>
                    <a
                      href="#"
                      className="tab-links"
                      data-toggle="modal"
                      data-target="#visa"
                      id="showRegister"
                    >
                      {" "}
                      <span>
                        <i className="visa_icon" />
                      </span>{" "}
                      <span>Visa</span>{" "}
                    </a>{" "}
                  </li>
                  <li>
                    <a href="#" className="tab-links">
                      {" "}
                      <span>
                        <i className="bus_icon" />
                      </span>{" "}
                      <span>Bus</span>{" "}
                    </a>{" "}
                  </li>
                  <li>
                    <a href="#" className="tab-links">
                      {" "}
                      <span>
                        <i className="train_icon" />
                      </span>{" "}
                      <span>Train</span>{" "}
                    </a>{" "}
                  </li>
                  <li>
                    <a href="group_booking.html" className="tab-links">
                      {" "}
                      <span>
                        <i className="groupbooking_icon" />
                      </span>{" "}
                      <span>Group Booking</span>{" "}
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/*Search end here*/}
        </div>
      </div>

      <section className="hm_umrahpack">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 hmpack_head">
              <h1>Umrah Fixed Departure</h1>
            </div>
            <div className="col-lg-12">
              <div className="owl-carousel owl-theme hmumrah_carrousel">
                <div className="item">
                  <div className="hmumrahpackBox">
                    <div className="d-flex hm_packpadd">
                      <div className="pack_thumb">
                        {" "}
                        <img src="images/umrah_pac01.jpg" alt="deals" />{" "}
                      </div>
                      <div className="pack_Dtls">
                        <div className="d-flex mb-2">
                          <div className="group">Group</div>
                          <div className="family">Family</div>
                        </div>
                        <p>Deluxe Umrah Package</p>
                        <ul className="d-flex align-items-center">
                          <li>
                            <i className="pack_fl" />
                          </li>
                          <li>
                            <i className="pack_htl" />
                          </li>
                          <li>
                            <i className="pack_proces" />
                          </li>
                          <li>
                            <i className="pack_visa" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex hm_packPlace">
                      {" "}
                      <span>Makkah(4N)</span>{" "}
                      <span className="hmspace"> | </span>{" "}
                      <span> Madinah(3N)</span>{" "}
                    </div>
                    <div className="d-flex hmpackcity">
                      <div className="hmDepartCityDate">
                        {" "}
                        <span className="w-100">
                          {" "}
                          Departure City: Dubai{" "}
                        </span>{" "}
                        <span className="w-100">
                          {" "}
                          Departure Date: 15 Jul 2023{" "}
                        </span>{" "}
                      </div>
                      <div className="packDaysbox">
                        <div className="packnumber">7N</div>
                        <div className="packdays">8D</div>
                      </div>
                    </div>
                    <div className="hmpackPriceBox">
                      <div className="d-flex justify-content-between">
                        <div className="hmpackStar">
                          <img src="images/umrahPack_star.png" /> 5
                        </div>
                        <div className="hmsuperPrice">
                          <h3>SUPER DEAL PRICE</h3>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-end">
                        <div className="hmpackShare">
                          <span className="shareBtn">Share</span>{" "}
                          <i className="shareIcon" />
                        </div>
                        <div className="hmUmrahPackPrice">
                          <p>Starts from</p>
                          <h3>AED 80.00</h3>
                          <p>Per person on twin sharing</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <div className="hmEnquiryBtn"> Enquire Now</div>
                        <div className="hmViewBookBtn"> View and Book</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="hmumrahpackBox">
                    <div className="d-flex hm_packpadd">
                      <div className="pack_thumb">
                        {" "}
                        <img src="images/umrah_pac01.jpg" alt="deals" />{" "}
                      </div>
                      <div className="pack_Dtls">
                        <div className="d-flex mb-2">
                          <div className="group">Group</div>
                          <div className="family">Family</div>
                        </div>
                        <p>Deluxe Umrah Package</p>
                        <ul className="d-flex align-items-center">
                          <li>
                            <i className="pack_fl" />
                          </li>
                          <li>
                            <i className="pack_htl" />
                          </li>
                          <li>
                            <i className="pack_proces" />
                          </li>
                          <li>
                            <i className="pack_visa" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex hm_packPlace">
                      {" "}
                      <span>Makkah(4N)</span>{" "}
                      <span className="hmspace"> | </span>{" "}
                      <span> Madinah(3N)</span>{" "}
                    </div>
                    <div className="d-flex hmpackcity">
                      <div className="hmDepartCityDate">
                        {" "}
                        <span className="w-100">
                          {" "}
                          Departure City: Dubai{" "}
                        </span>{" "}
                        <span className="w-100">
                          {" "}
                          Departure Date: 15 Jul 2023{" "}
                        </span>{" "}
                      </div>
                      <div className="packDaysbox">
                        <div className="packnumber">7N</div>
                        <div className="packdays">8D</div>
                      </div>
                    </div>
                    <div className="hmpackPriceBox">
                      <div className="d-flex justify-content-between">
                        <div className="hmpackStar">
                          <img src="images/umrahPack_star.png" /> 5
                        </div>
                        <div className="hmsuperPrice">
                          <h3>SUPER DEAL PRICE</h3>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-end">
                        <div className="hmpackShare">
                          <span className="shareBtn">Share</span>{" "}
                          <i className="shareIcon" />
                        </div>
                        <div className="hmUmrahPackPrice">
                          <p>Starts from</p>
                          <h3>AED 80.00</h3>
                          <p>Per person on twin sharing</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <div className="hmEnquiryBtn"> Enquire Now</div>
                        <div className="hmViewBookBtn"> View and Book</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="hmumrahpackBox">
                    <div className="d-flex hm_packpadd">
                      <div className="pack_thumb">
                        {" "}
                        <img src="images/umrah_pac01.jpg" alt="deals" />{" "}
                      </div>
                      <div className="pack_Dtls">
                        <div className="d-flex mb-2">
                          <div className="group">Group</div>
                          <div className="family">Family</div>
                        </div>
                        <p>Deluxe Umrah Package</p>
                        <ul className="d-flex align-items-center">
                          <li>
                            <i className="pack_fl" />
                          </li>
                          <li>
                            <i className="pack_htl" />
                          </li>
                          <li>
                            <i className="pack_proces" />
                          </li>
                          <li>
                            <i className="pack_visa" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex hm_packPlace">
                      {" "}
                      <span>Makkah(4N)</span>{" "}
                      <span className="hmspace"> | </span>{" "}
                      <span> Madinah(3N)</span>{" "}
                    </div>
                    <div className="d-flex hmpackcity">
                      <div className="hmDepartCityDate">
                        {" "}
                        <span className="w-100">
                          {" "}
                          Departure City: Dubai{" "}
                        </span>{" "}
                        <span className="w-100">
                          {" "}
                          Departure Date: 15 Jul 2023{" "}
                        </span>{" "}
                      </div>
                      <div className="packDaysbox">
                        <div className="packnumber">7N</div>
                        <div className="packdays">8D</div>
                      </div>
                    </div>
                    <div className="hmpackPriceBox">
                      <div className="d-flex justify-content-between">
                        <div className="hmpackStar">
                          <img src="images/umrahPack_star.png" /> 5
                        </div>
                        <div className="hmsuperPrice">
                          <h3>SUPER DEAL PRICE</h3>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-end">
                        <div className="hmpackShare">
                          <span className="shareBtn">Share</span>{" "}
                          <i className="shareIcon" />
                        </div>
                        <div className="hmUmrahPackPrice">
                          <p>Starts from</p>
                          <h3>AED 80.00</h3>
                          <p>Per person on twin sharing</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <div className="hmsoldOutBtn"> Sold Out</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="hmumrahpackBox">
                    <div className="d-flex hm_packpadd">
                      <div className="pack_thumb">
                        {" "}
                        <img src="images/umrah_pac01.jpg" alt="deals" />{" "}
                      </div>
                      <div className="pack_Dtls">
                        <div className="d-flex mb-2">
                          <div className="group">Group</div>
                          <div className="family">Family</div>
                        </div>
                        <p>Deluxe Umrah Package</p>
                        <ul className="d-flex align-items-center">
                          <li>
                            <i className="pack_fl" />
                          </li>
                          <li>
                            <i className="pack_htl" />
                          </li>
                          <li>
                            <i className="pack_proces" />
                          </li>
                          <li>
                            <i className="pack_visa" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex hm_packPlace">
                      {" "}
                      <span>Makkah(4N)</span>{" "}
                      <span className="hmspace"> | </span>{" "}
                      <span> Madinah(3N)</span>{" "}
                    </div>
                    <div className="d-flex hmpackcity">
                      <div className="hmDepartCityDate">
                        {" "}
                        <span className="w-100">
                          {" "}
                          Departure City: Dubai{" "}
                        </span>{" "}
                        <span className="w-100">
                          {" "}
                          Departure Date: 15 Jul 2023{" "}
                        </span>{" "}
                      </div>
                      <div className="packDaysbox">
                        <div className="packnumber">7N</div>
                        <div className="packdays">8D</div>
                      </div>
                    </div>
                    <div className="hmpackPriceBox">
                      <div className="d-flex justify-content-between">
                        <div className="hmpackStar">
                          <img src="images/umrahPack_star.png" /> 5
                        </div>
                        <div className="hmsuperPrice">
                          <h3>SUPER DEAL PRICE</h3>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-end">
                        <div className="hmpackShare">
                          <span className="shareBtn">Share</span>{" "}
                          <i className="shareIcon" />
                        </div>
                        <div className="hmUmrahPackPrice">
                          <p>Starts from</p>
                          <h3>AED 80.00</h3>
                          <p>Per person on twin sharing</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <div className="hmEnquiryBtn"> Enquire Now</div>
                        <div className="hmViewBookBtn"> View and Book</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="hmumrahpackBox">
                    <div className="d-flex hm_packpadd">
                      <div className="pack_thumb">
                        {" "}
                        <img src="images/umrah_pac01.jpg" alt="deals" />{" "}
                      </div>
                      <div className="pack_Dtls">
                        <div className="d-flex mb-2">
                          <div className="group">Group</div>
                          <div className="family">Family</div>
                        </div>
                        <p>Deluxe Umrah Package</p>
                        <ul className="d-flex align-items-center">
                          <li>
                            <i className="pack_fl" />
                          </li>
                          <li>
                            <i className="pack_htl" />
                          </li>
                          <li>
                            <i className="pack_proces" />
                          </li>
                          <li>
                            <i className="pack_visa" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex hm_packPlace">
                      {" "}
                      <span>Makkah(4N)</span>{" "}
                      <span className="hmspace"> | </span>{" "}
                      <span> Madinah(3N)</span>{" "}
                    </div>
                    <div className="d-flex hmpackcity">
                      <div className="hmDepartCityDate">
                        {" "}
                        <span className="w-100">
                          {" "}
                          Departure City: Dubai{" "}
                        </span>{" "}
                        <span className="w-100">
                          {" "}
                          Departure Date: 15 Jul 2023{" "}
                        </span>{" "}
                      </div>
                      <div className="packDaysbox">
                        <div className="packnumber">7N</div>
                        <div className="packdays">8D</div>
                      </div>
                    </div>
                    <div className="hmpackPriceBox">
                      <div className="d-flex justify-content-between">
                        <div className="hmpackStar">
                          <img src="images/umrahPack_star.png" /> 5
                        </div>
                        <div className="hmsuperPrice">
                          <h3>SUPER DEAL PRICE</h3>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-end">
                        <div className="hmpackShare">
                          <span className="shareBtn">Share</span>{" "}
                          <i className="shareIcon" />
                        </div>
                        <div className="hmUmrahPackPrice">
                          <p>Starts from</p>
                          <h3>AED 80.00</h3>
                          <p>Per person on twin sharing</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <div className="hmEnquiryBtn"> Enquire Now</div>
                        <div className="hmViewBookBtn"> View and Book</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="hmumrahpackBox">
                    <div className="d-flex hm_packpadd">
                      <div className="pack_thumb">
                        {" "}
                        <img src="images/umrah_pac01.jpg" alt="deals" />{" "}
                      </div>
                      <div className="pack_Dtls">
                        <div className="d-flex mb-2">
                          <div className="group">Group</div>
                          <div className="family">Family</div>
                        </div>
                        <p>Deluxe Umrah Package</p>
                        <ul className="d-flex align-items-center">
                          <li>
                            <i className="pack_fl" />
                          </li>
                          <li>
                            <i className="pack_htl" />
                          </li>
                          <li>
                            <i className="pack_proces" />
                          </li>
                          <li>
                            <i className="pack_visa" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex hm_packPlace">
                      {" "}
                      <span>Makkah(4N)</span>{" "}
                      <span className="hmspace"> | </span>{" "}
                      <span> Madinah(3N)</span>{" "}
                    </div>
                    <div className="d-flex hmpackcity">
                      <div className="hmDepartCityDate">
                        {" "}
                        <span className="w-100">
                          {" "}
                          Departure City: Dubai{" "}
                        </span>{" "}
                        <span className="w-100">
                          {" "}
                          Departure Date: 15 Jul 2023{" "}
                        </span>{" "}
                      </div>
                      <div className="packDaysbox">
                        <div className="packnumber">7N</div>
                        <div className="packdays">8D</div>
                      </div>
                    </div>
                    <div className="hmpackPriceBox">
                      <div className="d-flex justify-content-between">
                        <div className="hmpackStar">
                          <img src="images/umrahPack_star.png" /> 5
                        </div>
                        <div className="hmsuperPrice">
                          <h3>SUPER DEAL PRICE</h3>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-end">
                        <div className="hmpackShare">
                          <span className="shareBtn">Share</span>{" "}
                          <i className="shareIcon" />
                        </div>
                        <div className="hmUmrahPackPrice">
                          <p>Starts from</p>
                          <h3>AED 80.00</h3>
                          <p>Per person on twin sharing</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <div className="hmsoldOutBtn"> Sold Out</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hm_advertiseBanner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hm_addbanner">
                <div className="d-flex">
                  <div className="add_bdr"> </div>
                  <div className="add_headings">
                    <p>Saudi Arabia</p>
                    <h2>
                      Makkah &amp; Madinah <br />
                      Package{" "}
                    </h2>
                  </div>
                </div>
                <div className="add_listing">
                  <ul className="d-flex flex-wrap">
                    <li>Makkah</li>
                    <li>|</li>
                    <li>Madinah</li>
                  </ul>
                </div>
                <p className="addDate">
                  5 Days | Nov 28, Dec 12, Dec 28 | AED2500 Starting from
                </p>
                <button className="theme_button addBook">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hm_umrahpack hm_custPackage">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 hmpack_head">
              <h1>Customised Package</h1>
            </div>
            <div className="col-lg-12">
              <div className="owl-carousel owl-theme custPackage_carrousel">
                <div className="item">
                  <div className="hmumrahpackBox">
                    <div className="d-flex hm_packpadd">
                      <div className="pack_thumb">
                        {" "}
                        <img src="images/umrah_pac01.jpg" alt="deals" />{" "}
                      </div>
                      <div className="pack_Dtls">
                        <div className="d-flex mb-2">
                          <div className="group">Group</div>
                          <div className="family">Family</div>
                        </div>
                        <p>Deluxe Umrah Package</p>
                        <ul className="d-flex align-items-center">
                          <li>
                            <i className="pack_fl" />
                          </li>
                          <li>
                            <i className="pack_htl" />
                          </li>
                          <li>
                            <i className="pack_proces" />
                          </li>
                          <li>
                            <i className="pack_visa" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex hm_packPlace">
                      {" "}
                      <span>Makkah(4N)</span>{" "}
                      <span className="hmspace"> | </span>{" "}
                      <span> Madinah(3N)</span>{" "}
                    </div>
                    <div className="d-flex hmpackcity">
                      {" "}
                      <span> Departure city: Dubai </span>
                      <div className="packDaysbox">
                        <div className="packnumber">7N</div>
                        <div className="packdays">8D</div>
                      </div>
                    </div>
                    <div className="hmpackPriceBox">
                      <div className="d-flex justify-content-between">
                        <div className="hmpackStar">
                          <img src="images/umrahPack_star.png" /> 5
                        </div>
                        <div className="hmsuperPrice">
                          <h3>SUPER DEAL PRICE</h3>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-end">
                        <div className="hmpackShare">
                          <span className="shareBtn">Share</span>{" "}
                          <i className="shareIcon" />
                        </div>
                        <div className="hmUmrahPackPrice custPackagePrice">
                          <p>Starts from</p>
                          <h3>AED 80.00</h3>
                          <p>Per person on twin sharing</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <div className="hmCustEnquiryBtn"> Enquire Now</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="hmumrahpackBox">
                    <div className="d-flex hm_packpadd">
                      <div className="pack_thumb">
                        {" "}
                        <img src="images/umrah_pac01.jpg" alt="deals" />{" "}
                      </div>
                      <div className="pack_Dtls">
                        <div className="d-flex mb-2">
                          <div className="group">Group</div>
                          <div className="family">Family</div>
                        </div>
                        <p>Deluxe Umrah Package</p>
                        <ul className="d-flex align-items-center">
                          <li>
                            <i className="pack_fl" />
                          </li>
                          <li>
                            <i className="pack_htl" />
                          </li>
                          <li>
                            <i className="pack_proces" />
                          </li>
                          <li>
                            <i className="pack_visa" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex hm_packPlace">
                      {" "}
                      <span>Makkah(4N)</span>{" "}
                      <span className="hmspace"> | </span>{" "}
                      <span> Madinah(3N)</span>{" "}
                    </div>
                    <div className="d-flex hmpackcity">
                      {" "}
                      <span> Departure city: Dubai </span>
                      <div className="packDaysbox">
                        <div className="packnumber">7N</div>
                        <div className="packdays">8D</div>
                      </div>
                    </div>
                    <div className="hmpackPriceBox">
                      <div className="d-flex justify-content-between">
                        <div className="hmpackStar">
                          <img src="images/umrahPack_star.png" /> 5
                        </div>
                        <div className="hmsuperPrice">
                          <h3>SUPER DEAL PRICE</h3>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-end">
                        <div className="hmpackShare">
                          <span className="shareBtn">Share</span>{" "}
                          <i className="shareIcon" />
                        </div>
                        <div className="hmUmrahPackPrice custPackagePrice">
                          <p>Starts from</p>
                          <h3>AED 80.00</h3>
                          <p>Per person on twin sharing</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <div className="hmCustEnquiryBtn"> Enquire Now</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="hmumrahpackBox">
                    <div className="d-flex hm_packpadd">
                      <div className="pack_thumb">
                        {" "}
                        <img src="images/umrah_pac01.jpg" alt="deals" />{" "}
                      </div>
                      <div className="pack_Dtls">
                        <div className="d-flex mb-2">
                          <div className="group">Group</div>
                          <div className="family">Family</div>
                        </div>
                        <p>Deluxe Umrah Package</p>
                        <ul className="d-flex align-items-center">
                          <li>
                            <i className="pack_fl" />
                          </li>
                          <li>
                            <i className="pack_htl" />
                          </li>
                          <li>
                            <i className="pack_proces" />
                          </li>
                          <li>
                            <i className="pack_visa" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex hm_packPlace">
                      {" "}
                      <span>Makkah(4N)</span>{" "}
                      <span className="hmspace"> | </span>{" "}
                      <span> Madinah(3N)</span>{" "}
                    </div>
                    <div className="d-flex hmpackcity">
                      {" "}
                      <span> Departure city: Dubai </span>
                      <div className="packDaysbox">
                        <div className="packnumber">7N</div>
                        <div className="packdays">8D</div>
                      </div>
                    </div>
                    <div className="hmpackPriceBox">
                      <div className="d-flex justify-content-between">
                        <div className="hmpackStar">
                          <img src="images/umrahPack_star.png" /> 5
                        </div>
                        <div className="hmsuperPrice">
                          <h3>SUPER DEAL PRICE</h3>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-end">
                        <div className="hmpackShare">
                          <span className="shareBtn">Share</span>{" "}
                          <i className="shareIcon" />
                        </div>
                        <div className="hmUmrahPackPrice custPackagePrice">
                          <p>Starts from</p>
                          <h3>AED 80.00</h3>
                          <p>Per person on twin sharing</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <div className="hmCustEnquiryBtn"> Enquire Now</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="hmumrahpackBox">
                    <div className="d-flex hm_packpadd">
                      <div className="pack_thumb">
                        {" "}
                        <img src="images/umrah_pac01.jpg" alt="deals" />{" "}
                      </div>
                      <div className="pack_Dtls">
                        <div className="d-flex mb-2">
                          <div className="group">Group</div>
                          <div className="family">Family</div>
                        </div>
                        <p>Deluxe Umrah Package</p>
                        <ul className="d-flex align-items-center">
                          <li>
                            <i className="pack_fl" />
                          </li>
                          <li>
                            <i className="pack_htl" />
                          </li>
                          <li>
                            <i className="pack_proces" />
                          </li>
                          <li>
                            <i className="pack_visa" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex hm_packPlace">
                      {" "}
                      <span>Makkah(4N)</span>{" "}
                      <span className="hmspace"> | </span>{" "}
                      <span> Madinah(3N)</span>{" "}
                    </div>
                    <div className="d-flex hmpackcity">
                      {" "}
                      <span> Departure city: Dubai </span>
                      <div className="packDaysbox">
                        <div className="packnumber">7N</div>
                        <div className="packdays">8D</div>
                      </div>
                    </div>
                    <div className="hmpackPriceBox">
                      <div className="d-flex justify-content-between">
                        <div className="hmpackStar">
                          <img src="images/umrahPack_star.png" /> 5
                        </div>
                        <div className="hmsuperPrice">
                          <h3>SUPER DEAL PRICE</h3>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-end">
                        <div className="hmpackShare">
                          <span className="shareBtn">Share</span>{" "}
                          <i className="shareIcon" />
                        </div>
                        <div className="hmUmrahPackPrice custPackagePrice">
                          <p>Starts from</p>
                          <h3>AED 80.00</h3>
                          <p>Per person on twin sharing</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <div className="hmCustEnquiryBtn"> Enquire Now</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="hmumrahpackBox">
                    <div className="d-flex hm_packpadd">
                      <div className="pack_thumb">
                        {" "}
                        <img src="images/umrah_pac01.jpg" alt="deals" />{" "}
                      </div>
                      <div className="pack_Dtls">
                        <div className="d-flex mb-2">
                          <div className="group">Group</div>
                          <div className="family">Family</div>
                        </div>
                        <p>Deluxe Umrah Package</p>
                        <ul className="d-flex align-items-center">
                          <li>
                            <i className="pack_fl" />
                          </li>
                          <li>
                            <i className="pack_htl" />
                          </li>
                          <li>
                            <i className="pack_proces" />
                          </li>
                          <li>
                            <i className="pack_visa" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex hm_packPlace">
                      {" "}
                      <span>Makkah(4N)</span>{" "}
                      <span className="hmspace"> | </span>{" "}
                      <span> Madinah(3N)</span>{" "}
                    </div>
                    <div className="d-flex hmpackcity">
                      {" "}
                      <span> Departure city: Dubai </span>
                      <div className="packDaysbox">
                        <div className="packnumber">7N</div>
                        <div className="packdays">8D</div>
                      </div>
                    </div>
                    <div className="hmpackPriceBox">
                      <div className="d-flex justify-content-between">
                        <div className="hmpackStar">
                          <img src="images/umrahPack_star.png" /> 5
                        </div>
                        <div className="hmsuperPrice">
                          <h3>SUPER DEAL PRICE</h3>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-end">
                        <div className="hmpackShare">
                          <span className="shareBtn">Share</span>{" "}
                          <i className="shareIcon" />
                        </div>
                        <div className="hmUmrahPackPrice custPackagePrice">
                          <p>Starts from</p>
                          <h3>AED 80.00</h3>
                          <p>Per person on twin sharing</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <div className="hmCustEnquiryBtn"> Enquire Now</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="hmumrahpackBox">
                    <div className="d-flex hm_packpadd">
                      <div className="pack_thumb">
                        {" "}
                        <img src="images/umrah_pac01.jpg" alt="deals" />{" "}
                      </div>
                      <div className="pack_Dtls">
                        <div className="d-flex mb-2">
                          <div className="group">Group</div>
                          <div className="family">Family</div>
                        </div>
                        <p>Deluxe Umrah Package</p>
                        <ul className="d-flex align-items-center">
                          <li>
                            <i className="pack_fl" />
                          </li>
                          <li>
                            <i className="pack_htl" />
                          </li>
                          <li>
                            <i className="pack_proces" />
                          </li>
                          <li>
                            <i className="pack_visa" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex hm_packPlace">
                      {" "}
                      <span>Makkah(4N)</span>{" "}
                      <span className="hmspace"> | </span>{" "}
                      <span> Madinah(3N)</span>{" "}
                    </div>
                    <div className="d-flex hmpackcity">
                      {" "}
                      <span> Departure city: Dubai </span>
                      <div className="packDaysbox">
                        <div className="packnumber">7N</div>
                        <div className="packdays">8D</div>
                      </div>
                    </div>
                    <div className="hmpackPriceBox">
                      <div className="d-flex justify-content-between">
                        <div className="hmpackStar">
                          <img src="images/umrahPack_star.png" /> 5
                        </div>
                        <div className="hmsuperPrice">
                          <h3>SUPER DEAL PRICE</h3>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-end">
                        <div className="hmpackShare">
                          <span className="shareBtn">Share</span>{" "}
                          <i className="shareIcon" />
                        </div>
                        <div className="hmUmrahPackPrice custPackagePrice">
                          <p>Starts from</p>
                          <h3>AED 80.00</h3>
                          <p>Per person on twin sharing</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <div className="hmCustEnquiryBtn"> Enquire Now</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hm_umrahpack hm_trendingHtl">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 hmpack_head">
              <h1>Trending Hotels</h1>
            </div>
            <div className="col-lg-12">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  {" "}
                  <a
                    className="nav-link active"
                    id="trendhotel1-tab"
                    data-toggle="tab"
                    href="#trendhotel1"
                    role="tab"
                    aria-controls="trendhotel1"
                    aria-selected="true"
                  >
                    Trending Hotels in Makkah
                  </a>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <a
                    className="nav-link"
                    id="trendhotel2-tab"
                    data-toggle="tab"
                    href="#trendhotel2"
                    role="tab"
                    aria-controls="trendhotel2"
                    aria-selected="false"
                  >
                    Trending Hotels in Madinah
                  </a>{" "}
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="trendhotel1"
                  role="tabpanel"
                  aria-labelledby="trendhotel1-tab"
                >
                  <div className="owl-carousel owl-theme trendingHotel_carrousel">
                    <div className="item">
                      <div className="hmumrahpackBox">
                        <div className="d-flex hm_packpadd">
                          <div className="pack_thumb">
                            {" "}
                            <img
                              src="images/trending_htl01.jpg"
                              alt="deals"
                            />{" "}
                          </div>
                          <div className="pack_Dtls">
                            <div className="hmHtlStar fourstar"> </div>
                            <p>Atlantis, The Palm</p>
                            <ul className="d-flex">
                              <li>
                                <img src="images/htldtls_bar_icon.svg" />
                              </li>
                              <li>
                                <img src="images/htldtls_fitness_icon.svg" />
                              </li>
                              <li>
                                <img src="images/htldtls_internet_icon.svg" />
                              </li>
                              <li>
                                <img src="images/htldtls_steamroom_icon.svg" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="d-flex hm_packPlace">
                          {" "}
                          Crescent Road,The Palm,Dubai - Dubai..{" "}
                        </div>
                        <div className="d-flex hmpackcity">
                          {" "}
                          With a stay at Atlantis, The Palm in Duba..{" "}
                        </div>
                        <div className="hmpackPriceBox">
                          <div className="d-flex justify-content-between">
                            <div className="hmpackStar">
                              <img src="images/umrahPack_star.png" /> 4
                            </div>
                            <div className="hmsuperPrice">
                              <h3>SUPER DEAL PRICE</h3>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-end">
                            <div className="hmpackShare">
                              <button className="theme_button">
                                {" "}
                                Book Now{" "}
                              </button>
                            </div>
                            <div className="hmUmrahPackPrice custPackagePrice">
                              <p>Starts from</p>
                              <h3>AED 80.00</h3>
                              <p>Per room / night</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="hmumrahpackBox">
                        <div className="d-flex hm_packpadd">
                          <div className="pack_thumb">
                            {" "}
                            <img
                              src="images/trending_htl02.jpg"
                              alt="deals"
                            />{" "}
                          </div>
                          <div className="pack_Dtls">
                            <div className="hmHtlStar fourstar"> </div>
                            <p>Atlantis, The Palm</p>
                            <ul className="d-flex">
                              <li>
                                <img src="images/htldtls_bar_icon.svg" />
                              </li>
                              <li>
                                <img src="images/htldtls_fitness_icon.svg" />
                              </li>
                              <li>
                                <img src="images/htldtls_internet_icon.svg" />
                              </li>
                              <li>
                                <img src="images/htldtls_steamroom_icon.svg" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="d-flex hm_packPlace">
                          {" "}
                          Crescent Road,The Palm,Dubai - Dubai..{" "}
                        </div>
                        <div className="d-flex hmpackcity">
                          {" "}
                          With a stay at Atlantis, The Palm in Duba..{" "}
                        </div>
                        <div className="hmpackPriceBox">
                          <div className="d-flex justify-content-between">
                            <div className="hmpackStar">
                              <img src="images/umrahPack_star.png" /> 4
                            </div>
                            <div className="hmsuperPrice">
                              <h3>SUPER DEAL PRICE</h3>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-end">
                            <div className="hmpackShare">
                              <button className="theme_button">
                                {" "}
                                Book Now{" "}
                              </button>
                            </div>
                            <div className="hmUmrahPackPrice custPackagePrice">
                              <p>Starts from</p>
                              <h3>AED 80.00</h3>
                              <p>Per room / night</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="hmumrahpackBox">
                        <div className="d-flex hm_packpadd">
                          <div className="pack_thumb">
                            {" "}
                            <img
                              src="images/trending_htl03.jpg"
                              alt="deals"
                            />{" "}
                          </div>
                          <div className="pack_Dtls">
                            <div className="hmHtlStar fourstar"> </div>
                            <p>Atlantis, The Palm</p>
                            <ul className="d-flex">
                              <li>
                                <img src="images/htldtls_bar_icon.svg" />
                              </li>
                              <li>
                                <img src="images/htldtls_fitness_icon.svg" />
                              </li>
                              <li>
                                <img src="images/htldtls_internet_icon.svg" />
                              </li>
                              <li>
                                <img src="images/htldtls_steamroom_icon.svg" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="d-flex hm_packPlace">
                          {" "}
                          Crescent Road,The Palm,Dubai - Dubai..{" "}
                        </div>
                        <div className="d-flex hmpackcity">
                          {" "}
                          With a stay at Atlantis, The Palm in Duba..{" "}
                        </div>
                        <div className="hmpackPriceBox">
                          <div className="d-flex justify-content-between">
                            <div className="hmpackStar">
                              <img src="images/umrahPack_star.png" /> 4
                            </div>
                            <div className="hmsuperPrice">
                              <h3>SUPER DEAL PRICE</h3>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-end">
                            <div className="hmpackShare">
                              <button className="theme_button">
                                {" "}
                                Book Now{" "}
                              </button>
                            </div>
                            <div className="hmUmrahPackPrice custPackagePrice">
                              <p>Starts from</p>
                              <h3>AED 80.00</h3>
                              <p>Per room / night</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="hmumrahpackBox">
                        <div className="d-flex hm_packpadd">
                          <div className="pack_thumb">
                            {" "}
                            <img
                              src="images/trending_htl03.jpg"
                              alt="deals"
                            />{" "}
                          </div>
                          <div className="pack_Dtls">
                            <div className="hmHtlStar fourstar"> </div>
                            <p>Atlantis, The Palm</p>
                            <ul className="d-flex">
                              <li>
                                <img src="images/htldtls_bar_icon.svg" />
                              </li>
                              <li>
                                <img src="images/htldtls_fitness_icon.svg" />
                              </li>
                              <li>
                                <img src="images/htldtls_internet_icon.svg" />
                              </li>
                              <li>
                                <img src="images/htldtls_steamroom_icon.svg" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="d-flex hm_packPlace">
                          {" "}
                          Crescent Road,The Palm,Dubai - Dubai..{" "}
                        </div>
                        <div className="d-flex hmpackcity">
                          {" "}
                          With a stay at Atlantis, The Palm in Duba..{" "}
                        </div>
                        <div className="hmpackPriceBox">
                          <div className="d-flex justify-content-between">
                            <div className="hmpackStar">
                              <img src="images/umrahPack_star.png" /> 4
                            </div>
                            <div className="hmsuperPrice">
                              <h3>SUPER DEAL PRICE</h3>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-end">
                            <div className="hmpackShare">
                              <button className="theme_button">
                                {" "}
                                Book Now{" "}
                              </button>
                            </div>
                            <div className="hmUmrahPackPrice custPackagePrice">
                              <p>Starts from</p>
                              <h3>AED 80.00</h3>
                              <p>Per room / night</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="hmumrahpackBox">
                        <div className="d-flex hm_packpadd">
                          <div className="pack_thumb">
                            {" "}
                            <img
                              src="images/trending_htl02.jpg"
                              alt="deals"
                            />{" "}
                          </div>
                          <div className="pack_Dtls">
                            <div className="hmHtlStar fourstar"> </div>
                            <p>Atlantis, The Palm</p>
                            <ul className="d-flex">
                              <li>
                                <img src="images/htldtls_bar_icon.svg" />
                              </li>
                              <li>
                                <img src="images/htldtls_fitness_icon.svg" />
                              </li>
                              <li>
                                <img src="images/htldtls_internet_icon.svg" />
                              </li>
                              <li>
                                <img src="images/htldtls_steamroom_icon.svg" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="d-flex hm_packPlace">
                          {" "}
                          Crescent Road,The Palm,Dubai - Dubai..{" "}
                        </div>
                        <div className="d-flex hmpackcity">
                          {" "}
                          With a stay at Atlantis, The Palm in Duba..{" "}
                        </div>
                        <div className="hmpackPriceBox">
                          <div className="d-flex justify-content-between">
                            <div className="hmpackStar">
                              <img src="images/umrahPack_star.png" /> 4
                            </div>
                            <div className="hmsuperPrice">
                              <h3>SUPER DEAL PRICE</h3>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-end">
                            <div className="hmpackShare">
                              <button className="theme_button">
                                {" "}
                                Book Now{" "}
                              </button>
                            </div>
                            <div className="hmUmrahPackPrice custPackagePrice">
                              <p>Starts from</p>
                              <h3>AED 80.00</h3>
                              <p>Per room / night</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="trendhotel2"
                  role="tabpanel"
                  aria-labelledby="trendhotel2-tab"
                >
                  <div className="owl-carousel owl-theme trendingHotel_carrousel">
                    <div className="item">
                      <div className="hmumrahpackBox">
                        <div className="d-flex hm_packpadd">
                          <div className="pack_thumb">
                            {" "}
                            <img
                              src="images/trending_htl01.jpg"
                              alt="deals"
                            />{" "}
                          </div>
                          <div className="pack_Dtls">
                            <div className="hmHtlStar fourstar"> </div>
                            <p>Atlantis, The Palm</p>
                            <ul className="d-flex">
                              <li>
                                <img src="images/htldtls_bar_icon.svg" />
                              </li>
                              <li>
                                <img src="images/htldtls_fitness_icon.svg" />
                              </li>
                              <li>
                                <img src="images/htldtls_internet_icon.svg" />
                              </li>
                              <li>
                                <img src="images/htldtls_steamroom_icon.svg" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="d-flex hm_packPlace">
                          {" "}
                          Crescent Road,The Palm,Dubai - Dubai..{" "}
                        </div>
                        <div className="d-flex hmpackcity">
                          {" "}
                          With a stay at Atlantis, The Palm in Duba..{" "}
                        </div>
                        <div className="hmpackPriceBox">
                          <div className="d-flex justify-content-between">
                            <div className="hmpackStar">
                              <img src="images/umrahPack_star.png" /> 4
                            </div>
                            <div className="hmsuperPrice">
                              <h3>SUPER DEAL PRICE</h3>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-end">
                            <div className="hmpackShare">
                              <button className="theme_button">
                                {" "}
                                Book Now{" "}
                              </button>
                            </div>
                            <div className="hmUmrahPackPrice custPackagePrice">
                              <p>Starts from</p>
                              <h3>AED 80.00</h3>
                              <p>Per room / night</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="hmumrahpackBox">
                        <div className="d-flex hm_packpadd">
                          <div className="pack_thumb">
                            {" "}
                            <img
                              src="images/trending_htl02.jpg"
                              alt="deals"
                            />{" "}
                          </div>
                          <div className="pack_Dtls">
                            <div className="hmHtlStar fourstar"> </div>
                            <p>Atlantis, The Palm</p>
                            <ul className="d-flex">
                              <li>
                                <img src="images/htldtls_bar_icon.svg" />
                              </li>
                              <li>
                                <img src="images/htldtls_fitness_icon.svg" />
                              </li>
                              <li>
                                <img src="images/htldtls_internet_icon.svg" />
                              </li>
                              <li>
                                <img src="images/htldtls_steamroom_icon.svg" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="d-flex hm_packPlace">
                          {" "}
                          Crescent Road,The Palm,Dubai - Dubai..{" "}
                        </div>
                        <div className="d-flex hmpackcity">
                          {" "}
                          With a stay at Atlantis, The Palm in Duba..{" "}
                        </div>
                        <div className="hmpackPriceBox">
                          <div className="d-flex justify-content-between">
                            <div className="hmpackStar">
                              <img src="images/umrahPack_star.png" /> 4
                            </div>
                            <div className="hmsuperPrice">
                              <h3>SUPER DEAL PRICE</h3>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-end">
                            <div className="hmpackShare">
                              <button className="theme_button">
                                {" "}
                                Book Now{" "}
                              </button>
                            </div>
                            <div className="hmUmrahPackPrice custPackagePrice">
                              <p>Starts from</p>
                              <h3>AED 80.00</h3>
                              <p>Per room / night</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="hmumrahpackBox">
                        <div className="d-flex hm_packpadd">
                          <div className="pack_thumb">
                            {" "}
                            <img
                              src="images/trending_htl03.jpg"
                              alt="deals"
                            />{" "}
                          </div>
                          <div className="pack_Dtls">
                            <div className="hmHtlStar fourstar"> </div>
                            <p>Atlantis, The Palm</p>
                            <ul className="d-flex">
                              <li>
                                <img src="images/htldtls_bar_icon.svg" />
                              </li>
                              <li>
                                <img src="images/htldtls_fitness_icon.svg" />
                              </li>
                              <li>
                                <img src="images/htldtls_internet_icon.svg" />
                              </li>
                              <li>
                                <img src="images/htldtls_steamroom_icon.svg" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="d-flex hm_packPlace">
                          {" "}
                          Crescent Road,The Palm,Dubai - Dubai..{" "}
                        </div>
                        <div className="d-flex hmpackcity">
                          {" "}
                          With a stay at Atlantis, The Palm in Duba..{" "}
                        </div>
                        <div className="hmpackPriceBox">
                          <div className="d-flex justify-content-between">
                            <div className="hmpackStar">
                              <img src="images/umrahPack_star.png" /> 4
                            </div>
                            <div className="hmsuperPrice">
                              <h3>SUPER DEAL PRICE</h3>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-end">
                            <div className="hmpackShare">
                              <button className="theme_button">
                                {" "}
                                Book Now{" "}
                              </button>
                            </div>
                            <div className="hmUmrahPackPrice custPackagePrice">
                              <p>Starts from</p>
                              <h3>AED 80.00</h3>
                              <p>Per room / night</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="hmumrahpackBox">
                        <div className="d-flex hm_packpadd">
                          <div className="pack_thumb">
                            {" "}
                            <img
                              src="images/trending_htl03.jpg"
                              alt="deals"
                            />{" "}
                          </div>
                          <div className="pack_Dtls">
                            <div className="hmHtlStar fourstar"> </div>
                            <p>Atlantis, The Palm</p>
                            <ul className="d-flex">
                              <li>
                                <img src="images/htldtls_bar_icon.svg" />
                              </li>
                              <li>
                                <img src="images/htldtls_fitness_icon.svg" />
                              </li>
                              <li>
                                <img src="images/htldtls_internet_icon.svg" />
                              </li>
                              <li>
                                <img src="images/htldtls_steamroom_icon.svg" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="d-flex hm_packPlace">
                          {" "}
                          Crescent Road,The Palm,Dubai - Dubai..{" "}
                        </div>
                        <div className="d-flex hmpackcity">
                          {" "}
                          With a stay at Atlantis, The Palm in Duba..{" "}
                        </div>
                        <div className="hmpackPriceBox">
                          <div className="d-flex justify-content-between">
                            <div className="hmpackStar">
                              <img src="images/umrahPack_star.png" /> 4
                            </div>
                            <div className="hmsuperPrice">
                              <h3>SUPER DEAL PRICE</h3>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-end">
                            <div className="hmpackShare">
                              <button className="theme_button">
                                {" "}
                                Book Now{" "}
                              </button>
                            </div>
                            <div className="hmUmrahPackPrice custPackagePrice">
                              <p>Starts from</p>
                              <h3>AED 80.00</h3>
                              <p>Per room / night</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hm_umrahpack hm_trendingFlight">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 hmpack_head">
              <h1>Trending Flights</h1>
            </div>
            <div className="col-lg-12">
              <div className="owl-carousel owl-theme trendingFl_carrousel">
                <div className="item">
                  <div className="hmtrendflsBox">
                    {" "}
                    <img src="images/trendFl01.jpg" alt="deals" />
                    <div className="hmtrendflDtls d-flex flex-wrap justify-content-between align-items-center">
                      <div className="hmtrendflLeft">
                        <div className="trendfl_country">
                          <span> Dubai </span>{" "}
                          <span className="fldoublearrow" /> <span>Kuwait</span>{" "}
                        </div>
                        <p>Starts from</p>
                        <h2>AED 157.00</h2>
                      </div>
                      <div className="hmtrendflRight">
                        <button className="theme_button">
                          <img src="images/flbtnArrow.png" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="hmtrendflsBox">
                    {" "}
                    <img src="images/trendFl02.jpg" alt="deals" />
                    <div className="hmtrendflDtls d-flex flex-wrap justify-content-between align-items-center">
                      <div className="hmtrendflLeft">
                        <div className="trendfl_country">
                          <span> Dubai </span>{" "}
                          <span className="fldoublearrow" />{" "}
                          <span>Singapore</span>{" "}
                        </div>
                        <p>Starts from</p>
                        <h2>AED 157.00</h2>
                      </div>
                      <div className="hmtrendflRight">
                        <button className="theme_button">
                          <img src="images/flbtnArrow.png" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="hmtrendflsBox">
                    {" "}
                    <img src="images/trendFl03.jpg" alt="deals" />
                    <div className="hmtrendflDtls d-flex flex-wrap justify-content-between align-items-center">
                      <div className="hmtrendflLeft">
                        <div className="trendfl_country">
                          <span> Dubai </span>{" "}
                          <span className="fldoublearrow" /> <span>London</span>{" "}
                        </div>
                        <p>Starts from</p>
                        <h2>AED 157.00</h2>
                      </div>
                      <div className="hmtrendflRight">
                        <button className="theme_button">
                          <img src="images/flbtnArrow.png" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="hmtrendflsBox">
                    {" "}
                    <img src="images/trendFl04.jpg" alt="deals" />
                    <div className="hmtrendflDtls d-flex flex-wrap justify-content-between align-items-center">
                      <div className="hmtrendflLeft">
                        <div className="trendfl_country">
                          <span> Dubai </span>{" "}
                          <span className="fldoublearrow" /> <span>Cairo</span>{" "}
                        </div>
                        <p>Starts from</p>
                        <h2>AED 157.00</h2>
                      </div>
                      <div className="hmtrendflRight">
                        <button className="theme_button">
                          <img src="images/flbtnArrow.png" />
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

      <section className="hm_umrahpack hm_review">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="owl-carousel owl-theme hmreview_carrousel">
                <div className="item">
                  <div className="hm_custReview">
                    <div className="d-flex reviw_starrating">
                      {" "}
                      <span>
                        <img src="images/customer_review_star.png" />
                      </span>{" "}
                      <span>
                        <img src="images/customer_review_star.png" />
                      </span>{" "}
                      <span>
                        <img src="images/customer_review_star.png" />
                      </span>{" "}
                      <span>
                        <img src="images/customer_review_star.png" />
                      </span>{" "}
                      <span>
                        <img src="images/customer_review_star.png" />
                      </span>{" "}
                      <i className="reviewTick" /> <span>Verified </span>{" "}
                    </div>
                    <h2>excellent service</h2>
                    <p>
                      excellent service, agent highly responsive, and willing to
                      check ad folow up o ke....
                    </p>
                    <div className="review_hours"> Ed, 16 hours ago </div>
                  </div>
                </div>
                <div className="item">
                  <div className="hm_custReview">
                    <div className="d-flex reviw_starrating">
                      {" "}
                      <span>
                        <img src="images/customer_review_star.png" />
                      </span>{" "}
                      <span>
                        <img src="images/customer_review_star.png" />
                      </span>{" "}
                      <span>
                        <img src="images/customer_review_star.png" />
                      </span>{" "}
                      <span>
                        <img src="images/customer_review_star.png" />
                      </span>{" "}
                      <span>
                        <img src="images/customer_review_star.png" />
                      </span>{" "}
                      <i className="reviewTick" /> <span>Verified </span>{" "}
                    </div>
                    <h2>excellent service</h2>
                    <p>
                      excellent service, agent highly responsive, and willing to
                      check ad folow up o ke....
                    </p>
                    <div className="review_hours"> Ed, 16 hours ago </div>
                  </div>
                </div>
                <div className="item">
                  <div className="hm_custReview">
                    <div className="d-flex reviw_starrating">
                      {" "}
                      <span>
                        <img src="images/customer_review_star.png" />
                      </span>{" "}
                      <span>
                        <img src="images/customer_review_star.png" />
                      </span>{" "}
                      <span>
                        <img src="images/customer_review_star.png" />
                      </span>{" "}
                      <span>
                        <img src="images/customer_review_star.png" />
                      </span>{" "}
                      <span>
                        <img src="images/customer_review_star.png" />
                      </span>{" "}
                      <i className="reviewTick" /> <span>Verified </span>{" "}
                    </div>
                    <h2>excellent service</h2>
                    <p>
                      excellent service, agent highly responsive, and willing to
                      check ad folow up o ke....
                    </p>
                    <div className="review_hours"> Ed, 16 hours ago </div>
                  </div>
                </div>
                <div className="item">
                  <div className="hm_custReview">
                    <div className="d-flex reviw_starrating">
                      {" "}
                      <span>
                        <img src="images/customer_review_star.png" />
                      </span>{" "}
                      <span>
                        <img src="images/customer_review_star.png" />
                      </span>{" "}
                      <span>
                        <img src="images/customer_review_star.png" />
                      </span>{" "}
                      <span>
                        <img src="images/customer_review_star.png" />
                      </span>{" "}
                      <span>
                        <img src="images/customer_review_star.png" />
                      </span>{" "}
                      <i className="reviewTick" /> <span>Verified </span>{" "}
                    </div>
                    <h2>excellent service</h2>
                    <p>
                      excellent service, agent highly responsive, and willing to
                      check ad folow up o ke....
                    </p>
                    <div className="review_hours"> Ed, 16 hours ago </div>
                  </div>
                </div>
                <div className="item">
                  <div className="hm_custReview">
                    <div className="d-flex reviw_starrating">
                      {" "}
                      <span>
                        <img src="images/customer_review_star.png" />
                      </span>{" "}
                      <span>
                        <img src="images/customer_review_star.png" />
                      </span>{" "}
                      <span>
                        <img src="images/customer_review_star.png" />
                      </span>{" "}
                      <span>
                        <img src="images/customer_review_star.png" />
                      </span>{" "}
                      <span>
                        <img src="images/customer_review_star.png" />
                      </span>{" "}
                      <i className="reviewTick" /> <span>Verified </span>{" "}
                    </div>
                    <h2>excellent service</h2>
                    <p>
                      excellent service, agent highly responsive, and willing to
                      check ad folow up o ke....
                    </p>
                    <div className="review_hours"> Ed, 16 hours ago </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 text-center trustpilot">
              <p>
                Rated 4.9/5 based on <span>6511 reviews.</span> Showing our
                4&amp;5 star reviews.
              </p>
              <img src="images/trustpilot.png" />{" "}
            </div>
          </div>
        </div>
      </section>

      <section className="hm_whybest">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1>
                <span>Why</span> we are the best?
              </h1>
            </div>
            <div className="col-lg-4 col-md-4 text-center">
              {" "}
              <img src="images/lowest_price.png" />
              <h3>Lowest price guaranteed</h3>
              <p>
                We Are Always Negotiating With Airline Companies to Get You The
                Best Prices
              </p>
            </div>
            <div className="col-lg-4 col-md-4 text-center">
              {" "}
              <img src="images/save_secure.png" />
              <h3>Save and secure</h3>
              <p>
                We Use The Latest Security Technology to Protect Your Personal
                Information &amp; Privacy
              </p>
            </div>
            <div className="col-lg-4 col-md-4 text-center">
              {" "}
              <img src="images/werewithu.png" />
              <h3>We’re with you</h3>
              <p>
                Around the clock customer service &amp; Support is available By
                Live chat, Phone &amp; E-mail
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="hm_appdownload_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Planning a holiday just got easier</h2>
              <p>A few clicks and you’re done! Download our app now.</p>
              <div className="d-flex align-items-center mt-4 mb-4">
                <div className="hmqrcode">
                  {" "}
                  <img src="images/qr_code.png" />{" "}
                </div>
                <div className="downloadStore">
                  <div className="d-flex mb-3 align-items-center">
                    {" "}
                    <img src="images/google_play.png" />{" "}
                    <span> Download from Google Play </span>{" "}
                  </div>
                  <div className="d-flex align-items-center">
                    {" "}
                    <img src="images/app_store.png" />{" "}
                    <span> Download from App Store </span>{" "}
                  </div>
                </div>
              </div>
              <div className="hm_newsLetter">
                <h2>Sign-up for our Newsletter</h2>
                <form className="form-inline d-flex">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your mail ID"
                    />
                  </div>
                  <button
                    type="submit"
                    className="theme_button hm_subscribeBtn"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hm_foot_seo">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="accordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <ul
                        className="nav nav-pills foot_seolisthead"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link active"
                            id="pills-home-tab"
                            data-toggle="pill"
                            href="#pills-home"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true"
                          >
                            Hotels in Top Cities
                          </a>{" "}
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            id="pills-profile-tab"
                            data-toggle="pill"
                            href="#pills-profile"
                            role="tab"
                            aria-controls="pills-profile"
                            aria-selected="false"
                          >
                            Top Flights Routes
                          </a>{" "}
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            id="pills-contact-tab"
                            data-toggle="pill"
                            href="#pills-contact"
                            role="tab"
                            aria-controls="pills-contact"
                            aria-selected="false"
                          >
                            Trending Airlines
                          </a>{" "}
                        </li>
                      </ul>
                      <button
                        className="btn btn-link"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        {" "}
                        <img src="images/collpse_arrow.png" />{" "}
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="pills-home"
                          role="tabpanel"
                          aria-labelledby="pills-home-tab"
                        >
                          <div className="row">
                            <div className="col-lg-3 col-6 p-0">
                              <div className="foot_seolisting">
                                <h3>Top Destinations</h3>
                                <ul>
                                  <li>
                                    <a href="#">Entrance to Umrah</a>
                                  </li>
                                  <li>
                                    <a href="#">Travel and Access</a>
                                  </li>
                                  <li>
                                    <a href="#">Miqat</a>
                                  </li>
                                </ul>
                                <a href="#" className="viewMore">
                                  View More{" "}
                                  <img src="images/viewMore_Arrow.png" />{" "}
                                </a>{" "}
                              </div>
                            </div>
                            <div className="col-lg-3 col-6 p-0">
                              <div className="foot_seolisting">
                                <h3>Top Hotels</h3>
                                <ul>
                                  <li>
                                    <a href="#">Accomodation</a>
                                  </li>
                                  <li>
                                    <a href="#">Holi Sites</a>
                                  </li>
                                  <li>
                                    <a href="#">Landmarks</a>
                                  </li>
                                </ul>
                                <a href="#" className="viewMore">
                                  View More{" "}
                                  <img src="images/viewMore_Arrow.png" />{" "}
                                </a>{" "}
                              </div>
                            </div>
                            <div className="col-lg-3 col-6 p-0">
                              <div className="foot_seolisting">
                                <h3>Our services</h3>
                                <ul>
                                  <li>
                                    <a href="#">Accomodation</a>
                                  </li>
                                  <li>
                                    <a href="#">Travel and Access</a>
                                  </li>
                                  <li>
                                    <a href="#">Landmarks</a>
                                  </li>
                                </ul>
                                <a href="#" className="viewMore">
                                  View More{" "}
                                  <img src="images/viewMore_Arrow.png" />{" "}
                                </a>{" "}
                              </div>
                            </div>
                            <div className="col-lg-3 col-6 p-0">
                              <div className="foot_seolisting">
                                <h3>Top Flight Routes</h3>
                                <ul>
                                  <li>
                                    <a href="#">Accomodation</a>
                                  </li>
                                  <li>
                                    <a href="#">Travel and Access</a>
                                  </li>
                                  <li>
                                    <a href="#">Landmarks</a>
                                  </li>
                                </ul>
                                <a href="#" className="viewMore">
                                  View More{" "}
                                  <img src="images/viewMore_Arrow.png" />{" "}
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-profile"
                          role="tabpanel"
                          aria-labelledby="pills-profile-tab"
                        >
                          <div className="row">
                            <div className="col-lg-3 col-6 p-0">
                              <div className="foot_seolisting">
                                <h3>Top Flight Destinations</h3>
                                <ul>
                                  <li>
                                    <a href="#">Entrance to Umrah</a>
                                  </li>
                                  <li>
                                    <a href="#">Travel and Access</a>
                                  </li>
                                  <li>
                                    <a href="#">Miqat</a>
                                  </li>
                                </ul>
                                <a href="#" className="viewMore">
                                  View More{" "}
                                  <img src="images/viewMore_Arrow.png" />{" "}
                                </a>{" "}
                              </div>
                            </div>
                            <div className="col-lg-3 col-6 p-0">
                              <div className="foot_seolisting">
                                <h3>Top Flight from Destinations</h3>
                                <ul>
                                  <li>
                                    <a href="#">Accomodation</a>
                                  </li>
                                  <li>
                                    <a href="#">Holi Sites</a>
                                  </li>
                                  <li>
                                    <a href="#">Landmarks</a>
                                  </li>
                                </ul>
                                <a href="#" className="viewMore">
                                  View More{" "}
                                  <img src="images/viewMore_Arrow.png" />{" "}
                                </a>{" "}
                              </div>
                            </div>
                            <div className="col-lg-3 col-6 p-0">
                              <div className="foot_seolisting">
                                <h3>Top Flight from Destinations</h3>
                                <ul>
                                  <li>
                                    <a href="#">Accomodation</a>
                                  </li>
                                  <li>
                                    <a href="#">Travel and Access</a>
                                  </li>
                                  <li>
                                    <a href="#">Landmarks</a>
                                  </li>
                                </ul>
                                <a href="#" className="viewMore">
                                  View More{" "}
                                  <img src="images/viewMore_Arrow.png" />{" "}
                                </a>{" "}
                              </div>
                            </div>
                            <div className="col-lg-3 col-6 p-0">
                              <div className="foot_seolisting">
                                <h3>Top Flight Routes</h3>
                                <ul>
                                  <li>
                                    <a href="#">Accomodation</a>
                                  </li>
                                  <li>
                                    <a href="#">Travel and Access</a>
                                  </li>
                                  <li>
                                    <a href="#">Landmarks</a>
                                  </li>
                                </ul>
                                <a href="#" className="viewMore">
                                  View More{" "}
                                  <img src="images/viewMore_Arrow.png" />{" "}
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-contact"
                          role="tabpanel"
                          aria-labelledby="pills-contact-tab"
                        >
                          <div className="row">
                            <div className="col-lg-3 col-6 p-0">
                              <div className="foot_seolisting">
                                <h3>Most Booked Airlines</h3>
                                <ul>
                                  <li>
                                    <a href="#">Ihram</a>
                                  </li>
                                  <li>
                                    <a href="#">Access to Sanctuary</a>
                                  </li>
                                  <li>
                                    <a href="#">Tawaf</a>
                                  </li>
                                </ul>
                                <a href="#" className="viewMore">
                                  View More{" "}
                                  <img src="images/viewMore_Arrow.png" />{" "}
                                </a>{" "}
                              </div>
                            </div>
                            <div className="col-lg-3 col-6 p-0">
                              <div className="foot_seolisting">
                                <h3>Most Booked Airlines</h3>
                                <ul>
                                  <li>
                                    <a href="#">Landmarks</a>
                                  </li>
                                  <li>
                                    <a href="#">Shopping</a>
                                  </li>
                                  <li>
                                    <a href="#">Food &amp; Drink</a>
                                  </li>
                                </ul>
                                <a href="#" className="viewMore">
                                  View More{" "}
                                  <img src="images/viewMore_Arrow.png" />{" "}
                                </a>{" "}
                              </div>
                            </div>
                            <div className="col-lg-3 col-6 p-0">
                              <div className="foot_seolisting">
                                <h3>Most Booked Airlines</h3>
                                <ul>
                                  <li>
                                    <a href="#">Landmarks</a>
                                  </li>
                                  <li>
                                    <a href="#">Shopping</a>
                                  </li>
                                  <li>
                                    <a href="#">Food &amp; Drink</a>
                                  </li>
                                </ul>
                                <a href="#" className="viewMore">
                                  View More{" "}
                                  <img src="images/viewMore_Arrow.png" />{" "}
                                </a>{" "}
                              </div>
                            </div>
                            <div className="col-lg-3 col-6 p-0">
                              <div className="foot_seolisting">
                                <h3>Most Booked Airlines</h3>
                                <ul>
                                  <li>
                                    <a href="#">Landmarks</a>
                                  </li>
                                  <li>
                                    <a href="#">Shopping</a>
                                  </li>
                                  <li>
                                    <a href="#">Food &amp; Drink</a>
                                  </li>
                                </ul>
                                <a href="#" className="viewMore">
                                  View More{" "}
                                  <img src="images/viewMore_Arrow.png" />{" "}
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hm_foot_seo hm_footpackes">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-6">
              <div className="foot_seolisting">
                <h2>Umrah &amp; Ziyarah</h2>
                <ul>
                  <li>
                    <a href="#">Entrance to Umrah</a>
                  </li>
                  <li>
                    <a href="#">Travel and Access</a>
                  </li>
                  <li>
                    <a href="#">Miqat</a>
                  </li>
                  <li>
                    <a href="#">Ihram</a>
                  </li>
                  <li>
                    <a href="#">Access to Sanctuary</a>
                  </li>
                  <li>
                    <a href="#">Tawaf</a>
                  </li>
                  <li>
                    <a href="#">Sa’i</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="foot_seolisting">
                <h2>Makkah</h2>
                <ul>
                  <li>
                    <a href="#">Accomodation</a>
                  </li>
                  <li>
                    <a href="#">Holi Sites</a>
                  </li>
                  <li>
                    <a href="#">Landmarks</a>
                  </li>
                  <li>
                    <a href="#">Shopping</a>
                  </li>
                  <li>
                    <a href="#">Food &amp; Drink</a>
                  </li>
                  <li>
                    <a href="#">Getting to Makkah</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="foot_seolisting">
                <h2>Madina</h2>
                <ul>
                  <li>
                    <a href="#">Accomodation</a>
                  </li>
                  <li>
                    <a href="#">Travel and Access</a>
                  </li>
                  <li>
                    <a href="#">Landmarks</a>
                  </li>
                  <li>
                    <a href="#">Shopping</a>
                  </li>
                  <li>
                    <a href="#">Food &amp; Drink</a>
                  </li>
                  <li>
                    <a href="#">Getting to Madina</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="foot_seolisting">
                <h2>Makkah</h2>
                <ul>
                  <li>
                    <a href="#">Accomodation</a>
                  </li>
                  <li>
                    <a href="#">Travel and Access</a>
                  </li>
                  <li>
                    <a href="#">Landmarks</a>
                  </li>
                  <li>
                    <a href="#">Shopping</a>
                  </li>
                  <li>
                    <a href="#">Food &amp; Drink</a>
                  </li>
                  <li>
                    <a href="#">Getting to Madina</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Login Case */}
      <div className="SideModalnew modal right fade" id="login" role="dialog">
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <div className="modal-body">
              {/* Login html code */}
              <div className="login_view">
                <div className="actions_bin">
                  {" "}
                  {/*<a href="#" class="pocket_violetBtn theme_radius">View full screen</a>*/}
                  <button type="button" className="close">
                    {" "}
                    <span className="close_visitor">×</span>{" "}
                  </button>
                </div>
                <div className="user_info theme_radius">
                  <h4>Sign in to your account!</h4>
                  <p>
                    Get access to exclusive deals, save travellers’ details for
                    quicker bookings and manage your upcoming bookings with
                    ease!
                  </p>
                </div>
                <h4 className="user_enroll">Sign in using your</h4>
                <div className="field_carton">
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      {" "}
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#emailloginForm"
                      >
                        <img src="images/mail_icon.svg" />
                        Email Address
                      </a>{" "}
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#mobileloginForm"
                      >
                        <img src="images/mobile_icon.svg" />
                        Mobile Number
                      </a>{" "}
                    </li>
                  </ul>
                  {/* Tab panes */}
                  <div className="tab-content formGrid">
                    <div id="emailloginForm" className="tab-pane active">
                      <form>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword14">
                            Password
                          </label>
                          <input
                            autoComplete="off"
                            type="password"
                            className="form-control"
                            id="2"
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn formbtn_gradient btn_grid btn-block"
                        >
                          Sign In
                        </button>
                      </form>
                    </div>
                    <div id="mobileloginForm" className="tab-pane fade">
                      <form>
                        <div className="w-100">
                          <label htmlFor="exampleInputEmail1">
                            Phone Number
                          </label>
                          <div className="form-group form_phone">
                            <div className="hmcode hasDownArrow position-relative">
                              <select className="form-control">
                                <option>+965</option>
                                <option>+9652</option>
                                <option>+91</option>
                                <option>+935</option>
                                <option>+9656</option>
                              </select>
                            </div>
                            <div className="hmPhonenbr">
                              <input
                                autoComplete="off"
                                type="password"
                                className="form-control"
                                placeholder="Phone Number"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">
                            Password
                          </label>
                          <input
                          autoComplete="off"

                            type="password"
                            className="form-control"
                            id="exampleInputPassword14"
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn formbtn_gradient btn_grid btn-block"
                        >
                          Sign In
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="reg_with_us">
                  <p className="boundary_marge">
                    <a
                      data-toggle="modal"
                      data-target="#forget"
                      href="#showFgtPswd"
                      id="showFgtPswd"
                      className="pocket_blueBtn"
                    >
                      Forgot your password?
                    </a>
                  </p>
                  <p className="boundary_marge">
                    Don’t have an account?{" "}
                    <a
                      data-toggle="modal"
                      data-target="#register"
                      href="#showRegister"
                      id="showRegister"
                      className="pocket_blueBtn cursor_default"
                    >
                      Register Now
                    </a>
                  </p>
                  <div className="orSignup">
                    <div className="orMsg">or</div>
                  </div>
                  <div className="media_login">
                    <a href="#">
                      <img src="images/facebook_login.svg" />
                    </a>
                    <a href="#">
                      <img src="images/google_plus_login.svg" />
                    </a>
                  </div>
                </div>
              </div>
              {/* Login html code ends */}
            </div>
          </div>
        </div>
      </div>
      {/* Login Case */}
      {/* Register Case */}
      <div
        className="SideModalnew modal right fade"
        id="register"
        role="dialog"
      >
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <div className="modal-body">
              {/* Register html code */}
              <div className="record_view" style={{}}>
                <div className="actions_bin">
                  {" "}
                  {/*<a href="#" class="pocket_violetBtn theme_radius">View full screen</a>*/}
                  <button type="button" className="close">
                    {" "}
                    <span className="close_visitor2">×</span>{" "}
                  </button>
                </div>
                <div className="user_info theme_radius">
                  <h5>Creating an account is great for you! </h5>
                  <p>
                    Get access to exclusive deals, save travellers’ details for
                    quicker bookings and manage your upcoming bookings with
                    ease!
                  </p>
                </div>
                <h4 className="user_enroll">Create an account using your:</h4>
                <div className="field_carton">
                  <div className="registerForm_box w-100">
                    <form>
                      <div className="form-group">
                        <label htmlFor="exampleInputName">First Name</label>
                        <input
                          type="name"
                          className="form-control"
                          id="exampleInputName1"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputLastName">Last Name</label>
                        <input
                          type="lastname"
                          className="form-control"
                          id="exampleInputLastName"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputmail1">Email address</label>
                        <input
                          type="mailbox"
                          className="form-control"
                          id="exampleInputmail2"
                        />
                      </div>
                      <div className="w-100">
                        <label htmlFor="exampleInputEmail1">Phone Number</label>
                        <div className="form-group form_phone">
                          <div className="hmcode hasDownArrow position-relative">
                            <select className="form-control">
                              <option>+965</option>
                              <option>+9652</option>
                              <option>+91</option>
                              <option>+935</option>
                              <option>+9656</option>
                            </select>
                          </div>
                          <div className="hmPhonenbr">
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Phone Number"
                              autoComplete="off"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword14">Password</label>
                        <input
                          type="password1"
                          className="form-control"
                          id="exampleInputPassword12"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword2">
                          Confirm Password
                        </label>
                        <input
                          type="password2"
                          className="form-control"
                          id="exampleInputPassword2"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn formbtn_gradient btn_grid btn-block"
                      >
                        Register
                      </button>
                    </form>
                  </div>
                </div>
                <div className="reg_with_us">
                  <p className="boundary_marge">
                    Already have an account ?{" "}
                    <a
                      data-toggle="modal"
                      data-target="#login"
                      href="#showLogin"
                      id="showLogin"
                      className="pocket_blueBtn cursor_default"
                    >
                      Sign In
                    </a>
                  </p>
                </div>
              </div>
              {/* Register html view ends*/}
            </div>
          </div>
        </div>
      </div>
      {/* Register Case */}


      
      {/* Forget Case */}
      <div className="SideModalnew modal right fade" id="forget" role="dialog">
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <div className="modal-body">
              {/* Forget Password html code */}
              <div className="pswd_view" style={{}}>
                <div className="actions_bin">
                  {" "}
                  {/*<a href="#" class="pocket_violetBtn theme_radius">View full screen</a>*/}
                  <button type="button" className="close">
                    {" "}
                    <span className="close_visitor3">×</span>{" "}
                  </button>
                </div>
                <div className="user_info theme_radius">
                  <h4>Forgot your password?</h4>
                  <p>Reset your password using your:</p>
                </div>
                <div className="field_carton">
                  <div className="registerForm_box w-100">
                    <form>
                      <div className="form-group">
                        <label htmlFor="w">Email address</label>
                        <input
                          type="mailbox"
                          className="form-control"
                          id="exampleInputmail4"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn formbtn_gradient btn_grid btn-block"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              {/* Forget Password html code ends */}
            </div>
          </div>
        </div>
      </div>
      {/* Forget Case */}
      {/* Visa Case Start */}
      <div className="SideModalnew modal right fade" id="visa" role="dialog">
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="record_view" style={{}}>
                <div className="actions_bin">
                  {" "}
                  {/*<a href="#" class="pocket_violetBtn theme_radius">View full screen</a>*/}
                  <button type="button" className="close">
                    {" "}
                    <span className="close_visitor2">×</span>{" "}
                  </button>
                </div>
                <h4 className="user_enroll">Visa Enquiry</h4>
                <div className="field_carton">
                  <div className="registerForm_box w-100">
                    <form>
                      <div className="form-group">
                        <label htmlFor="exampleInputName">Name</label>
                        <input
                          type="name"
                          className="form-control"
                          id="exampleInputName2"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="6">Email address</label>
                        <input
                          type="mailbox"
                          className="form-control"
                          id="exampleInputmail"
                        />
                      </div>
                      <div className="w-100">
                        <label htmlFor="exampleInputEmail1">Phone Number</label>
                        <div className="form-group form_phone">
                          <div className="hmcode hasDownArrow position-relative">
                            <select className="form-control">
                              <option>+965</option>
                              <option>+9652</option>
                              <option>+91</option>
                              <option>+935</option>
                              <option>+9656</option>
                            </select>
                          </div>
                          <div className="hmPhonenbr">
                            <input
                              type="password"
                              className="form-control"
                              autoComplete="off"
                              placeholder="Phone Number"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputmail334">Destination</label>
                        <input
                          type="mailbox"
                          className="form-control"
                          id="exampleInputmail33"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="r">Date of Travel </label>
                        <input
                          type="mailbox"
                          className="form-control"
                          id="12"
                        />
                      </div>
                      <div className="form-group Field_Arrow position-relative">
                        <label htmlFor="exampleInputPassword13">
                          No of Passengers
                        </label>
                        <select
                          className="form-control "
                          name="visanationality"
                          id="visanationality"
                        >
                          <option value="AF"> - </option>
                          <option value="AL">-</option>
                          <option value="DZ">-</option>
                          <option value="AS"> -</option>
                          <option value="AD">-</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="2">Descript/Remarks </label>
                        <textarea
                          className="form-control textarea_hight"
                          name="visadescription"
                          id="visadescription"
                          placeholder="Descript/Remarks"
                          rows={5}
                          defaultValue={""}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn formbtn_gradient btn_grid btn-block"
                      >
                        Enquiry
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Visa Case End */}
    </>
  );
}
