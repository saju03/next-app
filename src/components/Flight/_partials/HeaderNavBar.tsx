import LoginSingup from "../_SearchPannel/_components/LoginSignup";

export default function HeaderNavBar (){

    return(
        <>
         {/*Header start here*/}
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light sticky-top">
        <div className="container d-flex justify-content-end">
          {/* mobile side menu start*/}
          <div id="sidebar">
            <div className="top_nav_section" id="mobile_nav">
              <div className="top_search_menu nav_mobShow">
                <ul>
                  <li className="mob_contct">
                    <div className="top_phone_outr">
                      <div className="nav-links">
                        <div className="dropdown">
                          {" "}
                          <span tabIndex={0}>
                            {" "}
                            <img src="images/phone_top.png" />{" "}
                          </span>
                          <div className="dropdown-content">
                            <div className="head_phone">
                              <h2>Get help from our experts 24/7</h2>
                              <p className="d-flex align-items-center">
                                {" "}
                                <i className="helpicon" /> 23566446
                              </p>
                            </div>
                            <div className="head_phone_clm2">
                              <h2>Info Center Numbers</h2>
                              <p className="d-flex align-items-center mb-2">
                                <i className="phoneicon" /> +91 12345689
                              </p>
                              <p className="d-flex align-items-center">
                                <i className="watsappicon" /> +91 12345689
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="dropdown">
                          {" "}
                          <span tabIndex={0}>
                            {" "}
                            <img src="images/login_top.png" />{" "}
                          </span>
                          <div className="dropdown-content">
                            <div className="head_user">
                              <h2>Welcome, Guest! </h2>
                              <p>
                                {" "}
                                <a
                                  data-toggle="modal"
                                  data-target="#login"
                                  className="vistor_btn"
                                >
                                  Login
                                </a>{" "}
                                <a>/</a>{" "}
                                <a
                                  data-toggle="modal"
                                  data-target="#register"
                                  className="vistor_btn"
                                >
                                  Sign Up
                                </a>{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="mob_mybook">
                    <a href="#">Manage Bookings</a>
                  </li>
                  <li className="mob_lang">
                    <a href="#">
                      <span>Change language </span>
                      <span className="fntArabic">عربي </span>
                    </a>
                  </li>
                  <li className="nav-item dropdown mob_curncy">
                    {" "}
                    <a
                      className="hmArrow  position-relative d-flex align-items-center justify-content-between"
                      href="#;"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div className="modisplycurency">Display currency </div>
                      <div className="mobcrencyflgs">
                        {" "}
                        <span className="country_flag">
                          <img src="images/currency.png" alt="" />
                        </span>{" "}
                        <span className="dropC">AED</span>{" "}
                      </div>
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="navbarDropdown"
                    >
                      {" "}
                      <a className="dropdown-item" href="#">
                        <span className="country_flag">
                          <img src="images/currency_icons/KWD.jpg" />
                        </span>{" "}
                        <span className="transformCaptialize">
                          KWD - Kuwaiti Dinar
                        </span>
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <span className="country_flag">
                          <img src="images/currency_icons/GBP.jpg" />
                        </span>{" "}
                        <span className="transformCaptialize">
                          GBP - British Pound
                        </span>
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <span className="country_flag">
                          <img src="images/currency_icons/EGP.jpg" />
                        </span>{" "}
                        <span className="transformCaptialize">
                          EGP - Egyptian Pound
                        </span>
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <span className="country_flag">
                          <img src="images/currency_icons/AED.jpg" />
                        </span>{" "}
                        <span className="transformCaptialize">
                          AED - Emirati Dirham
                        </span>
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <span className="country_flag">
                          <img src="images/currency_icons/EUR.jpg" />
                        </span>{" "}
                        <span className="transformCaptialize">EUR - Euro</span>
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <span className="country_flag">
                          <img src="images/currency_icons/BHD.jpg" />
                        </span>{" "}
                        <span className="transformCaptialize">
                          BHD - Bahraini Dinar
                        </span>
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <span className="country_flag">
                          <img src="images/currency_icons/QAR.jpg" />
                        </span>{" "}
                        <span className="transformCaptialize">
                          QAR - Qatari Riyal
                        </span>
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <span className="country_flag">
                          <img src="images/currency_icons/SAR.jpg" />
                        </span>{" "}
                        <span className="transformCaptialize">
                          SAR - Saudi Arabian Riyal
                        </span>
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <span className="country_flag">
                          <img src="images/currency_icons/USD.jpg" />
                        </span>{" "}
                        <span className="transformCaptialize">
                          USD - US Dollar
                        </span>
                      </a>{" "}
                    </div>
                  </li>
                </ul>
              </div>
              <ul className="navbar-nav navbar-light">
                <li className="nav-item dmenu dropdown">
                  {" "}
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {" "}
                    More Travel{" "}
                  </a>
                  <div
                    className="dropdown-menu sm-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Umrah Package
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      Design Package
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      Flight
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      Hotel
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      Static Package
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      Transfers
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      Insurance
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      Activities
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      Visa
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      Bus
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      Train
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      Group Booking
                    </a>{" "}
                  </div>
                </li>
                <li className="nav-item dmenu dropdown">
                  {" "}
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {" "}
                    Month{" "}
                  </a>
                  <div
                    className="dropdown-menu sm-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Muharram
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      Safar
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      Rabi al-Awwal
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      Rabi al-Thani
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      Jumada al-Awwal
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      Jumada al-Thani
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      Rajab
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      Shaban
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      Ramadan
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      Shawwal
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      Dhu al-Qadah
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      Dhu al-Hijjah
                    </a>{" "}
                  </div>
                </li>
                <li className="nav-item dropdown megamenu-li dmenu">
                  {" "}
                  <a
                    className="nav-link dropdown-toggle"
                    href=""
                    id="dropdown01"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Umrah Plus{" "}
                  </a>
                  <div
                    className="dropdown-menu megamenu sm-menu border-top"
                    aria-labelledby="dropdown01"
                  >
                    <div className="row">
                      <div className="col-sm-6 col-lg-3 border-right mb-4">
                        <h6>Destination</h6>
                        <div className="row">
                          <div className="col-sm-6 col-lg-6">
                            {" "}
                            <a className="dropdown-item" href="#">
                              <i className="fab fa-magento" /> Tabuk
                            </a>{" "}
                            <a className="dropdown-item" href="#">
                              <i className="fab fa-magento" /> AlUla
                            </a>{" "}
                            <a className="dropdown-item" href="#">
                              <i className="fab fa-magento" /> Madinah
                            </a>{" "}
                            <a className="dropdown-item" href="#">
                              <i className="fab fa-magento" /> Yanbu
                            </a>{" "}
                            <a className="dropdown-item" href="#">
                              <i className="fab fa-magento" /> Jeddah
                            </a>{" "}
                            <a className="dropdown-item" href="#">
                              <i className="fab fa-magento" /> Makkah
                            </a>{" "}
                            <a className="dropdown-item" href="#">
                              <i className="fab fa-magento" /> Taif
                            </a>{" "}
                          </div>
                          <div className="col-sm-6 col-lg-6">
                            {" "}
                            <a className="dropdown-item" href="#">
                              <i className="fab fa-magento" /> Al Baha
                            </a>{" "}
                            <a className="dropdown-item" href="#">
                              <i className="fab fa-magento" /> Abha
                            </a>{" "}
                            <a className="dropdown-item" href="#">
                              <i className="fab fa-magento" /> Jazan
                            </a>{" "}
                            <a className="dropdown-item" href="#">
                              <i className="fab fa-magento" /> Diriyah
                            </a>{" "}
                            <a className="dropdown-item" href="#">
                              <i className="fab fa-magento" /> Riyadh
                            </a>{" "}
                            <a className="dropdown-item" href="#">
                              <i className="fab fa-magento" /> Damam
                            </a>{" "}
                            <a className="dropdown-item" href="#">
                              <i className="fab fa-magento" /> Al Ahsa
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-3 border-right mb-4">
                        <h6>Saudi Experience</h6>
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Culture and Heritage
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Sun and Sea
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Nature and Adventure
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Luxury &amp; Special
                          Occasions
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Sporting Events
                        </a>{" "}
                      </div>
                      <div className="col-sm-6 col-lg-3 border-right mb-4">
                        <h6>Unique Experiences</h6>
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Alula buggies{" "}
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Maraya concerts
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Edge of the world
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Diving &amp;
                          snorkeling
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> UNESCO world heritage
                          sites
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Food Tours
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Educational Trips
                        </a>{" "}
                      </div>
                      <div className="col-sm-6 col-lg-3 border-right mb-4">
                        <h6>Other Offers</h6>
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Airline Group Booking
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Charter Flights
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Mice
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Guide Services
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Transportation
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown megamenu-li dmenu">
                  {" "}
                  <a
                    className="nav-link dropdown-toggle"
                    href=""
                    id="dropdown01"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Customizable Packages
                  </a>
                  <div
                    className="dropdown-menu megamenu sm-menu border-top"
                    aria-labelledby="dropdown01"
                  >
                    <div className="row">
                      <div className="col-sm-6 col-lg-3 border-right mb-4">
                        <h6>Destination</h6>
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Jordan
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Turkey
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Uzbekistan
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Iran
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Oman
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Spain
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Morrocco
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Lebanon
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Iraq
                        </a>{" "}
                      </div>
                      <div className="col-sm-6 col-lg-3 border-right mb-4">
                        <h6>Islamic and Halal Packages</h6>
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Sacred and Pilgrimage
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Cultural and Heritage
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Sun and Sea{" "}
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Nature and Adventure
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Muslim Honeymoons
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Woman Special{" "}
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Road Trips
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Students Special
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Luxury Tours
                        </a>{" "}
                      </div>
                      <div className="col-sm-6 col-lg-6 border-right mb-4">
                        <h6>Discover Other Holidays Options</h6>
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> All Inclusive Halal
                          Friendly Holidays
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Halal friendly
                          Wellness and Thermal Holidays
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> City Breaks Holidays
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dmenu dropdown">
                  {" "}
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {" "}
                    Visa Eligibility{" "}
                  </a>
                  <div
                    className="dropdown-menu sm-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Accomodation
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      Holi Sites
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      Landmarks
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      Shopping
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      Food &amp; Drink
                    </a>{" "}
                  </div>
                </li>
                <li className="nav-item dropdown megamenu-li dmenu">
                  {" "}
                  <a
                    className="nav-link dropdown-toggle"
                    href=""
                    id="dropdown01"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Offers
                  </a>
                  <div
                    className="dropdown-menu megamenu sm-menu border-top"
                    aria-labelledby="dropdown01"
                  >
                    <div className="row">
                      <div className="col-sm-6 col-lg-3 border-right mb-4">
                        <h6>Umrah Offers</h6>
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> 2 Night 3 Day
                          packages
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> 4 Night 5 Days
                          packages
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Makkah &amp; Madinah
                          Hotel
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Umrah by Bus offers
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> 8 Nights 9 Days Umrah
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Umrah with Guide
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Premium Umrah
                          packages
                        </a>{" "}
                      </div>
                      <div className="col-sm-6 col-lg-3 border-right mb-4">
                        <h6>Flight &amp; Hotel Offers</h6>
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Lorem Ipsem
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Lorem Ipsem
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Lorem Ipsem
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Lorem Ipsem
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Lorem Ipsem
                        </a>{" "}
                      </div>
                      <div className="col-sm-6 col-lg-3 border-right mb-4">
                        <h6>Unique Offers</h6>
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Umrah with Kids
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Transit Via Saudi
                          Umrah
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> People of
                          determination offers
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Women only offers
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Umrah for Senior
                          Citizens
                        </a>{" "}
                      </div>
                      <div className="col-sm-6 col-lg-3 border-right mb-4">
                        <h6>Other Offers</h6>
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> ENBD Card holders
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Transportation offers
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Sightseeing Offers
                        </a>{" "}
                        <a className="dropdown-item" href="#">
                          <i className="fab fa-magento" /> Meet &amp; Assist
                          Offers
                        </a>{" "}
                      </div>
                      <div className="col-sm-12 col-lg-12 border-right d-flex justify-content-end menuBtn_main">
                        {" "}
                        <a href="offer_list.html">
                          <button className="menuBtn" id="searchBtn">
                            View All Offers
                          </button>
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div id="sidebar-btn">
              {" "}
              <span /> <span /> <span />{" "}
            </div>
          </div>
          {/* mobile side menu end*/}
          <div className="top_search_menu nav_mobHide">
            <ul>
              <li>
                <a href="#">Manage Bookings</a>
              </li>
              <li>
              
              </li>
              <li>
                <a href="#">
                  <span className="fntArabic">عربي </span>
                </a>
              </li>
              <li className="nav-item dropdown">
                {" "}
                <a
                  className="hmArrow dropdown-toggle position-relative"
                  href="#;"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  <span className="country_flag">
                    <img src="images/currency.png" alt="" />
                  </span>{" "}
                  <span className="dropC">AED</span>{" "}
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdown"
                >
                  {" "}
                  <a className="dropdown-item" href="#">
                    <span className="country_flag">
                      <img src="images/currency_icons/KWD.jpg" />
                    </span>{" "}
                    <span className="transformCaptialize">
                      KWD - Kuwaiti Dinar
                    </span>
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    <span className="country_flag">
                      <img src="images/currency_icons/GBP.jpg" />
                    </span>{" "}
                    <span className="transformCaptialize">
                      GBP - British Pound
                    </span>
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    <span className="country_flag">
                      <img src="images/currency_icons/EGP.jpg" />
                    </span>{" "}
                    <span className="transformCaptialize">
                      EGP - Egyptian Pound
                    </span>
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    <span className="country_flag">
                      <img src="images/currency_icons/AED.jpg" />
                    </span>{" "}
                    <span className="transformCaptialize">
                      AED - Emirati Dirham
                    </span>
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    <span className="country_flag">
                      <img src="images/currency_icons/EUR.jpg" />
                    </span>{" "}
                    <span className="transformCaptialize">EUR - Euro</span>
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    <span className="country_flag">
                      <img src="images/currency_icons/BHD.jpg" />
                    </span>{" "}
                    <span className="transformCaptialize">
                      BHD - Bahraini Dinar
                    </span>
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    <span className="country_flag">
                      <img src="images/currency_icons/QAR.jpg" />
                    </span>{" "}
                    <span className="transformCaptialize">
                      QAR - Qatari Riyal
                    </span>
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    <span className="country_flag">
                      <img src="images/currency_icons/SAR.jpg" />
                    </span>{" "}
                    <span className="transformCaptialize">
                      SAR - Saudi Arabian Riyal
                    </span>
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    <span className="country_flag">
                      <img src="images/currency_icons/USD.jpg" />
                    </span>{" "}
                    <span className="transformCaptialize">USD - US Dollar</span>
                  </a>{" "}
                </div>
              </li>
              <li>
                <div className="top_phone_outr">
                  <div className="nav-links">
                    <div className="dropdown">
                      {" "}
                      <span className="phon_icon" tabIndex={0}>
                        {" "}
                        <img src="images/phone_top.png" />{" "}
                      </span>
                      <div className="dropdown-content">
                        <div className="head_phone">
                          <h2>Get help from our experts 24/7</h2>
                          <p className="d-flex align-items-center">
                            <i className="helpicon" /> 23566446
                          </p>
                        </div>
                        <div className="head_phone_clm2">
                          <h2>Info Center Numbers</h2>
                          <p className="d-flex align-items-center mb-2">
                            <i className="phoneicon" /> +91 12345689
                          </p>
                          <p className="d-flex align-items-center">
                            <i className="watsappicon" /> +91 12345689
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown">
                      {" "}
                      <span className="log_icon" tabIndex={0}>
                        {" "}
                        <img src="images/login_top.png" />{" "}
                      </span>
                      <div className="dropdown-content">
                        <div className="head_user">
                          <h2>Welcome, Guest! </h2>
                          <p>
                            {" "}
                            <a
                              data-toggle="modal"
                              data-target="#login"
                              className="vistor_btn"
                            >
                              Login
                            </a>{" "}
                            <a>/</a>{" "}
                            <a
                              data-toggle="modal"
                              data-target="#register"
                              className="vistor_btn"
                            >
                              Sign Up
                            </a>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <LoginSingup/>
        </div>
        

        <div className="container">
        
          {" "}
          <a className="navbar-brand" href="#">
            <div className="headlogo" />
          </a>

        
          <div
            className="top_nav_section collapse navbar-collapse"
            id="mobile_nav"
          >
            <div className="top_search_menu nav_mobShow">
              <ul>
                <li className="mob_mybook">
                  <a href="#">Manage Bookings</a>
                </li>
               
                <li className="mob_lang">
                  <a href="#">
                    <span className="fntArabic">عربي </span>
                  </a>
                </li>
                <li className="nav-item dropdown mob_curncy">
                  {" "}
                  <a
                    className="hmArrow dropdown-toggle position-relative"
                    href="#;"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {" "}
                    <span className="country_flag">
                      <img src="images/currency.png" alt="" />
                    </span>{" "}
                    <span className="dropC">AED</span>{" "}
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdown"
                  >
                    {" "}
                    <a className="dropdown-item" href="#">
                      <span className="country_flag">
                        <img src="images/currency_icons/KWD.jpg" />
                      </span>{" "}
                      <span className="transformCaptialize">
                        KWD - Kuwaiti Dinar
                      </span>
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      <span className="country_flag">
                        <img src="images/currency_icons/GBP.jpg" />
                      </span>{" "}
                      <span className="transformCaptialize">
                        GBP - British Pound
                      </span>
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      <span className="country_flag">
                        <img src="images/currency_icons/EGP.jpg" />
                      </span>{" "}
                      <span className="transformCaptialize">
                        EGP - Egyptian Pound
                      </span>
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      <span className="country_flag">
                        <img src="images/currency_icons/AED.jpg" />
                      </span>{" "}
                      <span className="transformCaptialize">
                        AED - Emirati Dirham
                      </span>
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      <span className="country_flag">
                        <img src="images/currency_icons/EUR.jpg" />
                      </span>{" "}
                      <span className="transformCaptialize">EUR - Euro</span>
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      <span className="country_flag">
                        <img src="images/currency_icons/BHD.jpg" />
                      </span>{" "}
                      <span className="transformCaptialize">
                        BHD - Bahraini Dinar
                      </span>
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      <span className="country_flag">
                        <img src="images/currency_icons/QAR.jpg" />
                      </span>{" "}
                      <span className="transformCaptialize">
                        QAR - Qatari Riyal
                      </span>
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      <span className="country_flag">
                        <img src="images/currency_icons/SAR.jpg" />
                      </span>{" "}
                      <span className="transformCaptialize">
                        SAR - Saudi Arabian Riyal
                      </span>
                    </a>{" "}
                    <a className="dropdown-item" href="#">
                      <span className="country_flag">
                        <img src="images/currency_icons/USD.jpg" />
                      </span>{" "}
                      <span className="transformCaptialize">
                        USD - US Dollar
                      </span>
                    </a>{" "}
                  </div>
                </li>
                <li className="mob_contct">
                  <div className="top_phone_outr">
                    <div className="nav-links">
                      <div className="dropdown">
                        {" "}
                        <span tabIndex={0}>
                          {" "}
                          <img src="images/phone_top.png" />{" "}
                        </span>
                        <div className="dropdown-content">
                          <div className="head_phone">
                            <h2>Get help from our experts 24/7</h2>
                            <p className="d-flex align-items-center">
                              {" "}
                              <i className="helpicon" /> 23566446
                            </p>
                          </div>
                          <div className="head_phone_clm2">
                            <h2>Info Center Numbers</h2>
                            <p className="d-flex align-items-center mb-2">
                              <i className="phoneicon" /> +91 12345689
                            </p>
                            <p className="d-flex align-items-center">
                              <i className="watsappicon" /> +91 12345689
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown">
                        {" "}
                        <span tabIndex={0}>
                          {" "}
                          <img src="images/login_top.png" />{" "}
                        </span>
                        <div className="dropdown-content">
                          <div className="head_user">
                            <h2>Welcome, Guest! </h2>
                            <p>
                              {" "}
                              <a className="vistor_btn">Login</a> <a>/</a>{" "}
                              <a className="vistor_btn">Sign Up</a>{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav navbar-light">
              <li className="nav-item dmenu dropdown">
                {" "}
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  More Travel{" "}
                </a>
                <div
                  className="dropdown-menu sm-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <a className="dropdown-item" href="#">
                    Umrah Package
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    Design Package
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    Flight
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    Hotel
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    Static Package
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    Transfers
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    Insurance
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    Activities
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    Visa
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    Bus
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    Train
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    Group Booking
                  </a>{" "}
                </div>
              </li>
              <li className="nav-item dmenu dropdown">
                {" "}
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Month{" "}
                </a>
                <div
                  className="dropdown-menu sm-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <a className="dropdown-item" href="#">
                    Muharram
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    Safar
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    Rabi al-Awwal
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    Rabi al-Thani
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    Jumada al-Awwal
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    Jumada al-Thani
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    Rajab
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    Shaban
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    Ramadan
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    Shawwal
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    Dhu al-Qadah
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    Dhu al-Hijjah
                  </a>{" "}
                </div>
              </li>
              <li className="nav-item dropdown megamenu-li dmenu">
                {" "}
                <a
                  className="nav-link dropdown-toggle"
                  href=""
                  id="dropdown01"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Umrah Plus{" "}
                </a>
                <div
                  className="dropdown-menu megamenu sm-menu border-top"
                  aria-labelledby="dropdown01"
                >
                  <div className="row">
                    <div className="col-sm-6 col-lg-3 border-right mb-4">
                      <h6>Destination</h6>
                      <div className="row">
                        <div className="col-sm-6 col-lg-6">
                          {" "}
                          <a className="dropdown-item" href="#">
                            <i className="fab fa-magento" /> Tabuk
                          </a>{" "}
                          <a className="dropdown-item" href="#">
                            <i className="fab fa-magento" /> AlUla
                          </a>{" "}
                          <a className="dropdown-item" href="#">
                            <i className="fab fa-magento" /> Madinah
                          </a>{" "}
                          <a className="dropdown-item" href="#">
                            <i className="fab fa-magento" /> Yanbu
                          </a>{" "}
                          <a className="dropdown-item" href="#">
                            <i className="fab fa-magento" /> Jeddah
                          </a>{" "}
                          <a className="dropdown-item" href="#">
                            <i className="fab fa-magento" /> Makkah
                          </a>{" "}
                          <a className="dropdown-item" href="#">
                            <i className="fab fa-magento" /> Taif
                          </a>{" "}
                        </div>
                        <div className="col-sm-6 col-lg-6">
                          {" "}
                          <a className="dropdown-item" href="#">
                            <i className="fab fa-magento" /> Al Baha
                          </a>{" "}
                          <a className="dropdown-item" href="#">
                            <i className="fab fa-magento" /> Abha
                          </a>{" "}
                          <a className="dropdown-item" href="#">
                            <i className="fab fa-magento" /> Jazan
                          </a>{" "}
                          <a className="dropdown-item" href="#">
                            <i className="fab fa-magento" /> Diriyah
                          </a>{" "}
                          <a className="dropdown-item" href="#">
                            <i className="fab fa-magento" /> Riyadh
                          </a>{" "}
                          <a className="dropdown-item" href="#">
                            <i className="fab fa-magento" /> Damam
                          </a>{" "}
                          <a className="dropdown-item" href="#">
                            <i className="fab fa-magento" /> Al Ahsa
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3 border-right mb-4">
                      <h6>Saudi Experience</h6>
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Culture and Heritage
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Sun and Sea
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Nature and Adventure
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Luxury &amp; Special
                        Occasions
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Sporting Events
                      </a>{" "}
                    </div>
                    <div className="col-sm-6 col-lg-3 border-right mb-4">
                      <h6>Unique Experiences</h6>
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Alula buggies{" "}
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Maraya concerts
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Edge of the world
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Diving &amp; snorkeling
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> UNESCO world heritage
                        sites
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Food Tours
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Educational Trips
                      </a>{" "}
                    </div>
                    <div className="col-sm-6 col-lg-3 border-right mb-4">
                      <h6>Other Offers</h6>
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Airline Group Booking
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Charter Flights
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Mice
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Guide Services
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Transportation
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown megamenu-li dmenu">
                {" "}
                <a
                  className="nav-link dropdown-toggle"
                  href=""
                  id="dropdown01"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Customizable Packages
                </a>
                <div
                  className="dropdown-menu megamenu sm-menu border-top"
                  aria-labelledby="dropdown01"
                >
                  <div className="row">
                    <div className="col-sm-6 col-lg-3 border-right mb-4">
                      <h6>Destination</h6>
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Jordan
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Turkey
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Uzbekistan
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Iran
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Oman
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Spain
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Morrocco
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Lebanon
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Iraq
                      </a>{" "}
                    </div>
                    <div className="col-sm-6 col-lg-3 border-right mb-4">
                      <h6>Islamic and Halal Packages</h6>
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Sacred and Pilgrimage
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Cultural and Heritage
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Sun and Sea{" "}
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Nature and Adventure
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Muslim Honeymoons
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Woman Special{" "}
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Road Trips
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Students Special
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Luxury Tours
                      </a>{" "}
                    </div>
                    <div className="col-sm-6 col-lg-6 border-right mb-4">
                      <h6>Discover Other Holidays Options</h6>
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> All Inclusive Halal
                        Friendly Holidays
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Halal friendly Wellness
                        and Thermal Holidays
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> City Breaks Holidays
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dmenu dropdown">
                {" "}
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Visa Eligibility{" "}
                </a>
                <div
                  className="dropdown-menu sm-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <a className="dropdown-item" href="#">
                    Accomodation
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    Holi Sites
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    Landmarks
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    Shopping
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    Food &amp; Drink
                  </a>{" "}
                </div>
              </li>
              <li className="nav-item dropdown megamenu-li dmenu">
                {" "}
                <a
                  className="nav-link dropdown-toggle"
                  href=""
                  id="dropdown01"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Offers
                </a>
                <div
                  className="dropdown-menu megamenu sm-menu border-top"
                  aria-labelledby="dropdown01"
                >
                  <div className="row">
                    <div className="col-sm-6 col-lg-3 border-right mb-4">
                      <h6>Umrah Offers</h6>
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> 2 Night 3 Day packages
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> 4 Night 5 Days packages
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Makkah &amp; Madinah
                        Hotel
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Umrah by Bus offers
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> 8 Nights 9 Days Umrah
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Umrah with Guide
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Premium Umrah packages
                      </a>{" "}
                    </div>
                    <div className="col-sm-6 col-lg-3 border-right mb-4">
                      <h6>Flight &amp; Hotel Offers</h6>
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Lorem Ipsem
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Lorem Ipsem
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Lorem Ipsem
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Lorem Ipsem
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Lorem Ipsem
                      </a>{" "}
                    </div>
                    <div className="col-sm-6 col-lg-3 border-right mb-4">
                      <h6>Unique Offers</h6>
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Umrah with Kids
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Transit Via Saudi Umrah
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> People of determination
                        offers
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Women only offers
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Umrah for Senior
                        Citizens
                      </a>{" "}
                    </div>
                    <div className="col-sm-6 col-lg-3 border-right mb-4">
                      <h6>Other Offers</h6>
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> ENBD Card holders
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Transportation offers
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Sightseeing Offers
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="fab fa-magento" /> Meet &amp; Assist
                        Offers
                      </a>{" "}
                    </div>
                    <div className="col-sm-12 col-lg-12 border-right d-flex justify-content-end menuBtn_main">
                      {" "}
                      <a href="offer_list.html">
                        <button className="menuBtn" id="searchBtn">
                          View All Offers
                        </button>
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    {/*Header end here*/}
        </>
    )


}