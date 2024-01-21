import React, { useEffect, useState } from "react";
import moment from "moment/min/moment-with-locales";
import axios from "axios";
import {
    getBookingClass,
    getPaxType,
    getTravelClassResourceKey,
    getFullDateAr,
    getDateAr,
} from "./FlightUtils";
import parse from "html-react-parser";
const FlightDetails = ({ flightJourney }) => {
    const resourceKeys = window.resourceKeys;

    const [fareRules, setFareRules] = useState("");
    const [totalService, setTotalService] = useState(0);
    const [fareRuleContent, setFareRuleContent] = useState(
        "<h2>No Fare Rules Available</h2>"
    );
    const [isModelopen, setIsModelopen] = useState(false);
    const [loader, setLoader] = useState({
        bounceLoader: true,
    });
    const [isRoundTripJourney, setIsRoundTripJourney] = useState(false);

    const getFullDateAr = (dateTime) => {
        if (window.culture == "ar") {
            const date = new Date(dateTime);
            const day = moment(dateTime).format("DD")
            const month = moment(dateTime).locale("ar").format("ddd MMM");
            // const days = moment(dateTime).locale("ar").format("ddd");
            const year = date.getFullYear();
            debugger
            return day + month + " " + year;
        }
        // moment(flight.Arrival.DateTime).locale('ar_SA').format("DD MMM")
    };

    // const getDateAr = (dateTime) => {
    //     const date = new Date(dateTime);
    //     const month = moment(dateTime).locale("ar").format("MMM");
    //     const day = date.getDay();
    //     let a = month + " " + day;
    //     return month + " " + day;
    // };
    const getDateAr = (dateTime) => {
        const date = new Date(dateTime);

        const month = moment(dateTime).locale("ar").format("DD MMM");
        const day = date.getDay();
        let a = month + " " + day;
        return month;
    };

    useEffect(() => {
        let url = window.location.href.split("/");
        url[5] == "RoundTrip" && setIsRoundTripJourney(true);
        const flightTripKey = flightJourney?.FlightTripKey;
        const fareKey = flightJourney?.AdditionalFares
            ? flightJourney?.AdditionalFares[0]?.FareKey
            : "";
        const SearchUrl = `${window.apiURL}api/Ancillary/GetAncillaries`;
        const searchId = window.SearchId;
        const token = window.accessToken;

        const headers = {
            Authorization: `Bearer ${token}`,
            SearchId: searchId,
            Culture: window.culture,
            Version: 1,
        };
        const requestBody = {
            FlightTripKey: flightTripKey,
            FareKey: fareKey,
            Currency: window.currency,
            Type: ["MLF", "FR", "BGF"],
        };
        axios
            .post(SearchUrl, requestBody, { headers })
            .then((response) => {
                let a = window.location.href.split("/")[2].split(".")[0];
                let code = response.data.Code;
                if (response.data.Code == "400" && window.isDev == "1") {
                    alert(`${response.data.Message} , ${SearchUrl}`);
                    window.location.reload();
                }
                setFareRules(response?.data?.Data);

                setLoader({ ...loader, bounceLoader: false });
                setFareRuleContent(
                    response?.data?.Data?.BF[0]?.BrandProperties[0].FR[0]
                        ?.details?.content
                        ? response?.data?.Data?.BF[0]?.BrandProperties[0].FR[0]
                            ?.details?.content
                        : resourceKeys.No_Fare_Rules_Available
                );
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <div
            className="SideModalnew flDtlsModal modal right fade"
            id="fl_details_rslt"
            role="dialog"
        >
            <div className="modal-dialog">
                {/* Modal content*/}
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="" data-dismiss="modal">
                            ×
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="flightdetail_view">
                            <div className="fl_dtls_tab">
                                <div className=" ">
                                    <div className="row">
                                        <div className="col-12 col-md-12 col-lg-12">
                                            <ul
                                                className="nav nav-tabs nav-fill"
                                                role="tablist"
                                            >
                                                <li className="nav-item">
                                                    {" "}
                                                    <a
                                                        className="nav-link active show"
                                                        data-toggle="tab"
                                                        href="#tab1"
                                                        role="tab"
                                                        aria-controls="tab1"
                                                        aria-selected="true"
                                                    >
                                                        {resourceKeys.itenerary_and_baggage ? resourceKeys.itenerary_and_baggage : "Itenerary & Baggage"}
                                                    </a>{" "}
                                                </li>
                                                <li className="nav-item">
                                                    {" "}
                                                    <a
                                                        className="nav-link show"
                                                        data-toggle="tab"
                                                        href="#tab4"
                                                        role="tab"
                                                        aria-controls="tab4"
                                                        aria-selected="true"
                                                    >
                                                        {
                                                            resourceKeys.fare_summary
                                                        }
                                                    </a>{" "}
                                                </li>
                                                <li className="nav-item">
                                                    {" "}
                                                    <a
                                                        className="nav-link"
                                                        data-toggle="tab"
                                                        href="#tab2"
                                                        role="tab"
                                                        aria-controls="tab2"
                                                        aria-selected="false"
                                                    >
                                                        {
                                                            resourceKeys.fare_rules
                                                        }
                                                    </a>{" "}
                                                </li>
                                                {/* <li className="nav-item">
                                                    {" "}
                                                    <a
                                                        className="nav-link"
                                                        data-toggle="tab"
                                                        href="#tab3"
                                                        role="tab"
                                                        aria-controls="tab3"
                                                        aria-selected="false"
                                                    >
                                                        {resourceKeys.baggage}
                                                    </a>{" "}
                                                </li> */}
                                            </ul>

                                            <div className="tab-content mt-3">
                                                <div
                                                    className="tab-pane active show"
                                                    id="tab1"
                                                    role="tabpanel"
                                                    aria-labelledby="tab1-tab"
                                                >
                                                    <div className="fl_rvw_box flight_dtls_itinerary">
                                                        {flightJourney?.FlightJourneys?.map(
                                                            (item, i) => (
                                                                <div
                                                                    key={i}
                                                                    className="fl_itenary_repeatsec"
                                                                >
                                                                    <div
                                                                        className="rslt_modal_hd_main"
                                                                        style={{
                                                                            borderTop: 0,
                                                                        }}
                                                                    >
                                                                        <div className="rslt_modal_hd">
                                                                            {" "}
                                                                            <i
                                                                                className={` ${isRoundTripJourney &&
                                                                                    i ==
                                                                                    1
                                                                                    ? "fl_dtls_returnicon"
                                                                                    : "fl_dtls_onwardicon"
                                                                                    }`}
                                                                            />
                                                                            <h2>
                                                                                {" "}
                                                                                <span>
                                                                                    {
                                                                                        item
                                                                                            .FlightItems[0]
                                                                                            .Departure
                                                                                            .CityName[
                                                                                        window
                                                                                            .culture
                                                                                        ]
                                                                                    }
                                                                                </span>{" "}
                                                                                <span>
                                                                                    {
                                                                                        resourceKeys.to
                                                                                    }
                                                                                </span>{" "}
                                                                                <span>
                                                                                    {
                                                                                        item.FlightItems.at(
                                                                                            -1
                                                                                        )
                                                                                            .Arrival
                                                                                            .CityName[
                                                                                        window
                                                                                            .culture
                                                                                        ]
                                                                                    }
                                                                                </span>{" "}
                                                                            </h2>
                                                                        </div>
                                                                        <div className="rslt_modal_sub">
                                                                            <p>
                                                                                {
                                                                                    resourceKeys.total_duration
                                                                                }{" "}
                                                                                {item
                                                                                    ?.JourneyTime
                                                                                    ?.Days >
                                                                                    0
                                                                                    ? item
                                                                                        ?.JourneyTime
                                                                                        ?.Days +
                                                                                    resourceKeys.D
                                                                                    : ""}{" "}
                                                                                {item
                                                                                    ?.JourneyTime
                                                                                    ?.Hours >
                                                                                    0
                                                                                    ? item
                                                                                        ?.JourneyTime
                                                                                        ?.Hours +
                                                                                    "" +
                                                                                    resourceKeys.H
                                                                                    : ""}{" "}
                                                                                {item
                                                                                    ?.JourneyTime
                                                                                    ?.Minutes >
                                                                                    0
                                                                                    ? item
                                                                                        ?.JourneyTime
                                                                                        ?.Minutes +
                                                                                    "" +
                                                                                    resourceKeys.M
                                                                                    : 0 + resourceKeys.M + ""}
                                                                            </p>
                                                                        </div>

                                                                        <div className="rslt_modal_sub">
                                                                            <p>
                                                                                {window.culture ==
                                                                                    "en"
                                                                                    ? moment(
                                                                                        item
                                                                                            .FlightItems[0]
                                                                                            .Departure
                                                                                            .DateTime
                                                                                    )
                                                                                        .locale(
                                                                                            "en"
                                                                                        )
                                                                                        .format(
                                                                                            "ddd, DD MMM YYYY"
                                                                                        )
                                                                                    : getFullDateAr(
                                                                                        item
                                                                                            .FlightItems[0]
                                                                                            .Departure
                                                                                            .DateTime
                                                                                    )}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    {item.FlightItems.map(
                                                                        (
                                                                            flight,
                                                                            i
                                                                        ) => (
                                                                            <div
                                                                            // key={
                                                                            //     i
                                                                            // }
                                                                            >
                                                                                <div className="fl_rvw_box_repeat">
                                                                                    <div className="flDtls_box01 d-flex">
                                                                                        <div className="fldtls_time">
                                                                                            <h4>
                                                                                                {moment(
                                                                                                    flight
                                                                                                        .Departure
                                                                                                        .DateTime
                                                                                                ).format(
                                                                                                    "HH:mm"
                                                                                                )}
                                                                                            </h4>
                                                                                            <p>
                                                                                                {window.culture ==
                                                                                                    "en"
                                                                                                    ? moment(
                                                                                                        flight
                                                                                                            .Departure
                                                                                                            .DateTime
                                                                                                    ).format(
                                                                                                        "DD MMM"
                                                                                                    )
                                                                                                    : getDateAr(
                                                                                                        flight
                                                                                                            .Departure
                                                                                                            .DateTime
                                                                                                    )}
                                                                                            </p>
                                                                                        </div>
                                                                                        <div className="fl_rvw_dot">
                                                                                            <div className="round_dote" />
                                                                                        </div>
                                                                                        <div className="fldtls_countryname">
                                                                                            <h3>
                                                                                                {
                                                                                                    flight
                                                                                                        .Departure
                                                                                                        .AirportName[
                                                                                                    window
                                                                                                        .culture
                                                                                                    ]
                                                                                                }{" "}
                                                                                                (
                                                                                                {
                                                                                                    flight
                                                                                                        .Departure
                                                                                                        .AirportCode
                                                                                                }

                                                                                                )
                                                                                            </h3>
                                                                                            <p>
                                                                                                {" "}
                                                                                                <span>
                                                                                                    {
                                                                                                        resourceKeys.terminal
                                                                                                    }{" "}
                                                                                                    {
                                                                                                        flight
                                                                                                            .Departure
                                                                                                            .Terminal
                                                                                                    }
                                                                                                </span>{" "}
                                                                                            </p>
                                                                                            <p>
                                                                                                {" "}
                                                                                                <span>
                                                                                                    {
                                                                                                        flight
                                                                                                            .Departure
                                                                                                            .CityName[
                                                                                                        window
                                                                                                            .culture
                                                                                                        ]
                                                                                                    }

                                                                                                    ,{" "}
                                                                                                    {
                                                                                                        flight
                                                                                                            .Departure
                                                                                                            .CountryName[
                                                                                                        window
                                                                                                            .culture
                                                                                                        ]
                                                                                                    }
                                                                                                </span>{" "}
                                                                                            </p>
                                                                                            {/* <p>
                                                                                                {" "}
                                                                                                <span>
                                                                                                    {
                                                                                                        flight
                                                                                                            .Departure
                                                                                                            .CityName
                                                                                                            [window.culture]
                                                                                                    }
                                                                                                </span>{" "}
                                                                                            </p> */}
                                                                                            <p>
                                                                                                {" "}
                                                                                                <span>
                                                                                                    {
                                                                                                        flight
                                                                                                            .FlightInfo
                                                                                                            .EquipmentNumber
                                                                                                    }
                                                                                                </span>{" "}
                                                                                                <span>
                                                                                                    {
                                                                                                        flight
                                                                                                            .FlightInfo
                                                                                                            .Code
                                                                                                    }
                                                                                                </span>{" "}
                                                                                                <span>
                                                                                                    {
                                                                                                        flight
                                                                                                            .FlightInfo
                                                                                                            .Number
                                                                                                    }
                                                                                                </span>{" "}
                                                                                            </p>

                                                                                            <p>
                                                                                                {" "}
                                                                                                <span>
                                                                                                    {
                                                                                                        resourceKeys.cabin
                                                                                                    }{" "}
                                                                                                    {
                                                                                                        resourceKeys[
                                                                                                        getTravelClassResourceKey(
                                                                                                            getBookingClass(
                                                                                                                flight
                                                                                                                    .FlightInfo
                                                                                                                    .CabinClass
                                                                                                            )
                                                                                                        )
                                                                                                        ]
                                                                                                    }
                                                                                                </span>{" "}
                                                                                            </p>
                                                                                            <p>
                                                                                                <span>
                                                                                                    {flight
                                                                                                        .FlightInfo
                                                                                                        .Code !==
                                                                                                        flightJourney.OperatingVendor ? (
                                                                                                        <>
                                                                                                            {" "}
                                                                                                            {
                                                                                                                resourceKeys[
                                                                                                                "operated by"
                                                                                                                ]
                                                                                                            }

                                                                                                            :{" "}
                                                                                                            {
                                                                                                                flightJourney
                                                                                                                    .OperatingVendorName[
                                                                                                                window
                                                                                                                    .culture
                                                                                                                ]
                                                                                                            }{" "}
                                                                                                            <i className="rvw_mob_airicon">
                                                                                                                <img
                                                                                                                    src={`/images/AirlineIcons/${flightJourney.OperatingVendor}.png`}
                                                                                                                    width="95"
                                                                                                                />
                                                                                                            </i>{" "}
                                                                                                        </>
                                                                                                    ) : (
                                                                                                        ""
                                                                                                    )}
                                                                                                </span>{" "}
                                                                                            </p>
                                                                                            <p>
                                                                                                {" "}
                                                                                                <span>
                                                                                                    {
                                                                                                        resourceKeys.Booking_Code
                                                                                                    }{" "}
                                                                                                    {
                                                                                                        flight
                                                                                                            .FlightInfo
                                                                                                            .BookingCode
                                                                                                    }
                                                                                                </span>{" "}
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="flDtls_box01 d-flex">
                                                                                        <div className="fldtls_time">
                                                                                            {" "}
                                                                                            <span className="totalTime">
                                                                                                <span>
                                                                                                    {" "}
                                                                                                    {item
                                                                                                        ?.FlightItems[
                                                                                                        i
                                                                                                    ]
                                                                                                        ?.DurationPerLeg
                                                                                                        .Days >
                                                                                                        0
                                                                                                        ? item
                                                                                                            ?.FlightItems[
                                                                                                            i
                                                                                                        ]
                                                                                                            ?.DurationPerLeg
                                                                                                            .Days +
                                                                                                        resourceKeys.D
                                                                                                        : ""}
                                                                                                    {item
                                                                                                        ?.FlightItems[
                                                                                                        i
                                                                                                    ]
                                                                                                        ?.DurationPerLeg
                                                                                                        .Hours >
                                                                                                        0
                                                                                                        ? item
                                                                                                            ?.FlightItems[
                                                                                                            i
                                                                                                        ]
                                                                                                            ?.DurationPerLeg
                                                                                                            .Hours +
                                                                                                        "" +
                                                                                                        resourceKeys.H
                                                                                                        : ""}
                                                                                                    {
                                                                                                        "  "
                                                                                                    }

                                                                                                    :{" "}
                                                                                                    {item
                                                                                                        ?.FlightItems[
                                                                                                        i
                                                                                                    ]
                                                                                                        ?.DurationPerLeg
                                                                                                        .Minutes >
                                                                                                        0
                                                                                                        ? item
                                                                                                            ?.FlightItems[
                                                                                                            i
                                                                                                        ]
                                                                                                            ?.DurationPerLeg
                                                                                                            .Minutes +
                                                                                                        "" +
                                                                                                        resourceKeys.M
                                                                                                        : "0M"}
                                                                                                </span>{" "}
                                                                                            </span>{" "}
                                                                                        </div>
                                                                                        <div className="fl_rvw_dot">
                                                                                            {" "}
                                                                                        </div>
                                                                                        <div className="fldtls_countryname flight_rvw_mob_icon">
                                                                                            <div className="row">
                                                                                                <div className="col-lg-4">
                                                                                                    <i className="rvw_mob_airicon">
                                                                                                        <img
                                                                                                            src={`/images/AirlineIcons/${flight.FlightInfo.Code}.png`}
                                                                                                            width="95"
                                                                                                        />
                                                                                                    </i>
                                                                                                </div>
                                                                                                {/* <div className="col-lg-8">
                                                                                                    {" "}
                                                                                                    <span>
                                                                                                        {
                                                                                                            resourceKeys.Meals
                                                                                                        }

                                                                                                        :{" "}
                                                                                                    </span>
                                                                                                    {loader.bounceLoader ? (
                                                                                                        <div
                                                                                                            className="loader-sm"
                                                                                                            id="supportloader"
                                                                                                            style={{}}
                                                                                                        >
                                                                                                            <div className="bounce1" />
                                                                                                            <div className="bounce2" />
                                                                                                            <div className="bounce3" />
                                                                                                        </div>
                                                                                                    ) : (
                                                                                                        <span className="meals-td-tooltip">
                                                                                                            {fareRules?.BF[0].BrandProperties.map(
                                                                                                                (
                                                                                                                    bp,
                                                                                                                    bpIndex
                                                                                                                ) => {
                                                                                                                    return (
                                                                                                                        bp[
                                                                                                                            "ML-F"
                                                                                                                        ] &&
                                                                                                                        bp[
                                                                                                                            "ML-F"
                                                                                                                        ].map(
                                                                                                                            (
                                                                                                                                meal,
                                                                                                                                mIndex
                                                                                                                            ) => {
                                                                                                                                return (
                                                                                                                                    meal.segmentIdentifier ==
                                                                                                                                        flight.SegmentIdentifier &&
                                                                                                                                    (meal.displayText ==
                                                                                                                                    "No  Meals" ? (
                                                                                                                                        <span>
                                                                                                                                            {
                                                                                                                                                "No  Meals"
                                                                                                                                            }{" "}
                                                                                                                                        </span>
                                                                                                                                    ) : (
                                                                                                                                        <>
                                                                                                                                            <span>
                                                                                                                                                {
                                                                                                                                                    "Meal"
                                                                                                                                                }{" "}
                                                                                                                                            </span>
                                                                                                                                            <span class="meals-tooltiptext">
                                                                                                                                                {" "}
                                                                                                                                                <span>
                                                                                                                                                    {
                                                                                                                                                        meal.displayText
                                                                                                                                                    }
                                                                                                                                                </span>
                                                                                                                                            </span>{" "}
                                                                                                                                        </>
                                                                                                                                    ))
                                                                                                                                );
                                                                                                                            }
                                                                                                                        )
                                                                                                                    );
                                                                                                                }
                                                                                                            )}
                                                                                                        </span>
                                                                                                    )}
                                                                                                    <p>
                                                                                                        {" "}
                                                                                                        <span>
                                                                                                            {
                                                                                                                resourceKeys.baggage
                                                                                                            }

                                                                                                            :{" "}
                                                                                                        </span>{" "}
                                                                                                    </p>{" "}
                                                                                                    {loader.bounceLoader ? (
                                                                                                        <div
                                                                                                            className="loader-sm"
                                                                                                            id="supportloader"
                                                                                                            style={{}}
                                                                                                        >
                                                                                                            <div className="bounce1" />
                                                                                                            <div className="bounce2" />
                                                                                                            <div className="bounce3" />
                                                                                                        </div>
                                                                                                    ) : (
                                                                                                        <p>
                                                                                                            {" "}
                                                                                                            <span>
                                                                                                                {fareRules?.BF[0]?.BrandProperties?.map(
                                                                                                                    (
                                                                                                                        element,
                                                                                                                        index
                                                                                                                    ) => {
                                                                                                                        return element[
                                                                                                                            "BG-F"
                                                                                                                        ]?.map(
                                                                                                                            (
                                                                                                                                bg,
                                                                                                                                i
                                                                                                                            ) => {
                                                                                                                                if (
                                                                                                                                    bg.segmentIdentifier ==
                                                                                                                                    flight.SegmentIdentifier
                                                                                                                                ) {
                                                                                                                                    // var sda = parseInt(bg?.displayText);

                                                                                                                                    // if(parseFloat(bg?.displayText) > 0){
                                                                                                                                    return bg
                                                                                                                                        .applicableTo[0] !=
                                                                                                                                        2 ? (
                                                                                                                                        <p
                                                                                                                                            key={
                                                                                                                                                i
                                                                                                                                            }
                                                                                                                                        >
                                                                                                                                            {getPaxType(
                                                                                                                                                bg
                                                                                                                                                    .applicableTo[0]
                                                                                                                                            )}{" "}
                                                                                                                                            {bg?.displayText
                                                                                                                                                ? bg.displayText
                                                                                                                                                : ""}{" "}
                                                                                                                                            -{" "}
                                                                                                                                            {
                                                                                                                                                bg.type
                                                                                                                                            }
                                                                                                                                        </p>
                                                                                                                                    ) : bg.type !=
                                                                                                                                      "cabin" ? (
                                                                                                                                        getPaxType(
                                                                                                                                            bg?.applicableTo.at(
                                                                                                                                                0
                                                                                                                                            )
                                                                                                                                        ) +
                                                                                                                                        " - " +
                                                                                                                                        bg.displayText +
                                                                                                                                        " - " +
                                                                                                                                        bg.type
                                                                                                                                    ) : (
                                                                                                                                        ""
                                                                                                                                    );

                                                                                                                                    // }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        );
                                                                                                                    }
                                                                                                                )}
                                                                                                            </span>
                                                                                                        </p>
                                                                                                    )}
                                                                                                </div> */}
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="flDtls_box01 d-flex">
                                                                                        <div className="fldtls_time">
                                                                                            {" "}
                                                                                        </div>
                                                                                        <div className="fl_rvw_dot" />
                                                                                        <div className="fldtls_baggageDtls flight_rvw_mob_icon">
                                                                                            {" "}
                                                                                            <i className="rvw_mob_mealsicon" />{" "}
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flDtls_box01 lastflDtls_box01 d-flex">
                                                                                        <div className="fldtls_time">
                                                                                            <h4>
                                                                                                {" "}
                                                                                                {moment(
                                                                                                    flight
                                                                                                        .Arrival
                                                                                                        .DateTime
                                                                                                ).format(
                                                                                                    "HH:mm"
                                                                                                )}{" "}
                                                                                            </h4>
                                                                                            <p>
                                                                                                {window.culture ==
                                                                                                    "en"
                                                                                                    ? moment(
                                                                                                        flight
                                                                                                            .Arrival
                                                                                                            .DateTime
                                                                                                    )
                                                                                                        .locale(
                                                                                                            "en"
                                                                                                        )
                                                                                                        .format(
                                                                                                            "DD MMM"
                                                                                                        )
                                                                                                    : getDateAr(
                                                                                                        flight
                                                                                                            .Arrival
                                                                                                            .DateTime
                                                                                                    )}
                                                                                            </p>
                                                                                        </div>
                                                                                        <div className="fl_rvw_dot fl_rvw_dot_last">
                                                                                            <div className="round_dote" />
                                                                                        </div>
                                                                                        <div className="fldtls_countryname pb-0">
                                                                                            <h3>
                                                                                                {
                                                                                                    flight
                                                                                                        .Arrival
                                                                                                        .AirportName[
                                                                                                    window
                                                                                                        .culture
                                                                                                    ]
                                                                                                }{" "}
                                                                                                (
                                                                                                {
                                                                                                    flight
                                                                                                        .Arrival
                                                                                                        .AirportCode
                                                                                                }

                                                                                                )
                                                                                            </h3>
                                                                                            <p>
                                                                                                {
                                                                                                    resourceKeys.terminal
                                                                                                }{" "}
                                                                                                {
                                                                                                    flight
                                                                                                        .Arrival
                                                                                                        .Terminal
                                                                                                }
                                                                                            </p>
                                                                                            {/* <p>
                                                                                                {" "}
                                                                                                <span>
                                                                                                    {
                                                                                                        flight
                                                                                                            .Arrival
                                                                                                            .CountryName
                                                                                                            [window.culture]
                                                                                                    }
                                                                                                </span>{" "}
                                                                                            </p> */}

                                                                                            <p>
                                                                                                {" "}
                                                                                                <span>
                                                                                                    {
                                                                                                        flight
                                                                                                            .Arrival
                                                                                                            .CityName[
                                                                                                        window
                                                                                                            .culture
                                                                                                        ]
                                                                                                    }

                                                                                                    ,{" "}
                                                                                                    {
                                                                                                        flight
                                                                                                            .Arrival
                                                                                                            .CountryName[
                                                                                                        window
                                                                                                            .culture
                                                                                                        ]
                                                                                                    }
                                                                                                </span>{" "}
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>






                                                                                <div className="fl_dtls_bagbox">
                                                                                    <div className="fl_dtls_bagbox_list">
                                                                                        <ul>
                                                                                            <li>
                                                                                                {resourceKeys.Meals}:{" "}
                                                                                                {loader.bounceLoader ? (
                                                                                                    <div
                                                                                                        className="loader-sm"
                                                                                                        id="supportloader"
                                                                                                        style={{}}
                                                                                                    >
                                                                                                        <div className="bounce1" />
                                                                                                        <div className="bounce2" />
                                                                                                        <div className="bounce3" />
                                                                                                    </div>
                                                                                                ) : (
                                                                                                    <span className="meals-td-tooltip">
                                                                                                        {fareRules?.BF[0].BrandProperties.map(
                                                                                                            (
                                                                                                                bp,
                                                                                                                bpIndex
                                                                                                            ) => {
                                                                                                                return (
                                                                                                                    bp[
                                                                                                                    "ML-F"
                                                                                                                    ] &&
                                                                                                                    bp[
                                                                                                                        "ML-F"
                                                                                                                    ].map(
                                                                                                                        (
                                                                                                                            meal,
                                                                                                                            mIndex
                                                                                                                        ) => {
                                                                                                                            return (
                                                                                                                                meal.segmentIdentifier ==
                                                                                                                                flight.SegmentIdentifier &&
                                                                                                                                (meal.displayText ==
                                                                                                                                    "No  Meals" || meal.displayText == "" ? (
                                                                                                                                    <span>
                                                                                                                                        {
                                                                                                                                            resourceKeys.No_Meals
                                                                                                                                        }{" "}
                                                                                                                                    </span>
                                                                                                                                ) : (
                                                                                                                                    <>
                                                                                                                                        <span>
                                                                                                                                            {
                                                                                                                                                resourceKeys.Meals
                                                                                                                                            }{" "}
                                                                                                                                        </span>
                                                                                                                                        <span class="meals-tooltiptext">
                                                                                                                                            {" "}
                                                                                                                                            <span>
                                                                                                                                                {
                                                                                                                                                    meal.displayText
                                                                                                                                                }
                                                                                                                                            </span>
                                                                                                                                        </span>{" "}
                                                                                                                                    </>
                                                                                                                                ))
                                                                                                                            );
                                                                                                                        }
                                                                                                                    )
                                                                                                                );
                                                                                                            }
                                                                                                        )}
                                                                                                    </span>
                                                                                                )}
                                                                                            </li>
                                                                                            <li>
                                                                                                <h2>
                                                                                                    {resourceKeys.baggage}:
                                                                                                </h2>
                                                                                            </li>
                                                                                            {loader.bounceLoader ? (
                                                                                                <div
                                                                                                    className="loader-sm"
                                                                                                    id="supportloader"
                                                                                                    style={{}}
                                                                                                >
                                                                                                    <div className="bounce1" />
                                                                                                    <div className="bounce2" />
                                                                                                    <div className="bounce3" />
                                                                                                </div>
                                                                                            ) : (
                                                                                                <li>
                                                                                                    {" "}

                                                                                                    {fareRules?.BF[0]?.BrandProperties?.map(
                                                                                                        (
                                                                                                            element,
                                                                                                            index
                                                                                                        ) => {
                                                                                                            return element[
                                                                                                                "BG-F"
                                                                                                            ]?.map(
                                                                                                                (
                                                                                                                    bg,
                                                                                                                    i
                                                                                                                ) => {

                                                                                                                    if (
                                                                                                                        bg.segmentIdentifier ==
                                                                                                                        flight.SegmentIdentifier
                                                                                                                    ) {
                                                                                                                        console.log(bg.displayText);
                                                                                                                        let baggageValue = false;
                                                                                                                        if (bg?.displayText != "0kg" && bg?.displayText != "0 kg" && bg?.displayText != "k" && bg?.displayText != "p" && bg?.displayText != "pc" && bg?.displayText != "0 pc" && bg?.displayText != "0 Kg" && bg?.displayText != "" && bg?.displayText != null) {

                                                                                                                            baggageValue = resourceKeys[bg?.displayText];
                                                                                                                        }
                                                                                                                        // var sda = parseInt(bg?.displayText);

                                                                                                                        // if(parseFloat(bg?.displayText) > 0){
                                                                                                                        return bg
                                                                                                                            .applicableTo[0] !=
                                                                                                                            2 ? (

                                                                                                                            <>
                                                                                                                                {baggageValue ?
                                                                                                                                    <>
                                                                                                                                        <i class="fareTick"></i>
                                                                                                                                        <span

                                                                                                                                        >

                                                                                                                                            {getPaxType(
                                                                                                                                                bg
                                                                                                                                                    .applicableTo[0]
                                                                                                                                            )}{" "}
                                                                                                                                            {bg?.displayText
                                                                                                                                                ? bg.displayText
                                                                                                                                                : ""}{" "}
                                                                                                                                            -{" "}
                                                                                                                                            {
                                                                                                                                                (resourceKeys[bg.type] != undefined ? resourceKeys[bg.type] : resourceKeys[bg.type]) + " " + resourceKeys.baggage
                                                                                                                                            }
                                                                                                                                        </span>
                                                                                                                                        <br></br>
                                                                                                                                    </>
                                                                                                                                    : <><i class="fare_none_tick"></i> <span>{getPaxType(
                                                                                                                                        bg
                                                                                                                                            .applicableTo[0]
                                                                                                                                    )}</span>&nbsp;&nbsp;<span>{resourceKeys.no}</span>&nbsp;<span>{resourceKeys[bg.type]}</span>&nbsp;<span>{resourceKeys.Baggage_Available}</span><br></br></>
                                                                                                                                }
                                                                                                                            </>
                                                                                                                        ) :
                                                                                                                            bg.type !=
                                                                                                                                "cabin" ? (
                                                                                                                                <>
                                                                                                                                    {baggageValue ?
                                                                                                                                        <>
                                                                                                                                            <i class="fareTick"></i>
                                                                                                                                            <span

                                                                                                                                            >

                                                                                                                                                {getPaxType(
                                                                                                                                                    bg
                                                                                                                                                        .applicableTo[0]
                                                                                                                                                )}{" "}
                                                                                                                                                {bg?.displayText
                                                                                                                                                    ? bg.displayText
                                                                                                                                                    : ""}{" "}
                                                                                                                                                -{" "}
                                                                                                                                                {
                                                                                                                                                    (resourceKeys[bg.type] != undefined ? resourceKeys[bg.type] : bg.type) + " " + resourceKeys.baggage
                                                                                                                                                }
                                                                                                                                            </span>
                                                                                                                                            <br></br>
                                                                                                                                        </>
                                                                                                                                        : <><i class="fare_none_tick"></i> <span>{getPaxType(
                                                                                                                                            bg
                                                                                                                                                .applicableTo[0]
                                                                                                                                        )}</span>&nbsp;&nbsp;<span>{resourceKeys.no}</span>&nbsp;<span>{resourceKeys[bg.type]}</span>&nbsp;<span>{resourceKeys.Baggage_Available}</span><br></br></>
                                                                                                                                    }
                                                                                                                                </>
                                                                                                                            ) : (
                                                                                                                                ""
                                                                                                                            );

                                                                                                                        // }
                                                                                                                    }
                                                                                                                }
                                                                                                            );
                                                                                                        }
                                                                                                    )}

                                                                                                </li>
                                                                                            )}
                                                                                            {/* <li>
                                                                                                <i class="fareTick"></i>
                                                                                                <span>
                                                                                                    Adult
                                                                                                    30
                                                                                                    Kg
                                                                                                </span>
                                                                                                -
                                                                                                <span>
                                                                                                    checked
                                                                                                </span>
                                                                                            </li> */}
                                                                                            {/* <li>
                                                                                                <i class="fareTick"></i>
                                                                                                <span>
                                                                                                    Adult
                                                                                                    7Kg
                                                                                                </span>{" "}
                                                                                                -{" "}
                                                                                                <span>
                                                                                                    cabin
                                                                                                </span>
                                                                                            </li> */}
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                                {(
                                                                                    /* flightJourney.FlightJourneys.length /2 ==i && */
                                                                                    flight
                                                                                        .TransitTime
                                                                                        .Hours >
                                                                                    0) ||
                                                                                    flight
                                                                                        .TransitTime
                                                                                        .Minutes ? (
                                                                                    <div className="TransitTimeBox">
                                                                                        <p>
                                                                                            <span>
                                                                                                {
                                                                                                    resourceKeys.transit_time
                                                                                                }

                                                                                                :{" "}
                                                                                            </span>
                                                                                            <span>
                                                                                                {
                                                                                                    flight
                                                                                                        .Arrival
                                                                                                        .CityName[
                                                                                                    window
                                                                                                        .culture
                                                                                                    ]
                                                                                                }

                                                                                                ,{" "}
                                                                                            </span>
                                                                                            <span>
                                                                                                {
                                                                                                    flight
                                                                                                        .TransitTime
                                                                                                        .Hours
                                                                                                }
                                                                                                {
                                                                                                    resourceKeys.H
                                                                                                }{" "}
                                                                                                :{" "}
                                                                                                {
                                                                                                    flight
                                                                                                        .TransitTime
                                                                                                        .Minutes
                                                                                                }
                                                                                                {
                                                                                                    resourceKeys.M
                                                                                                }
                                                                                            </span>{" "}
                                                                                        </p>
                                                                                    </div>
                                                                                ) : (
                                                                                    ""
                                                                                )}
                                                                            </div>
                                                                        )
                                                                    )}
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                                <div
                                                    className="tab-pane"
                                                    id="tab2"
                                                    role="tabpanel"
                                                    aria-labelledby="tab2-tab"
                                                >
                                                    {loader.bounceLoader ? (
                                                        <div
                                                            className="loader-sm"
                                                            id="supportloader"
                                                            style={{}}
                                                        >
                                                            <div className="bounce1" />
                                                            <div className="bounce2" />
                                                            <div className="bounce3" />
                                                        </div>
                                                    ) : (
                                                        <div className="row FareRule">
                                                            <div className="d-flex flex-wrap align-items-center w-100 colum1">
                                                                <div className="col-lg-12">
                                                                    <div className="Rslt_Fare">
                                                                        <h3>
                                                                            {
                                                                                resourceKeys.fare_breakup
                                                                            }
                                                                        </h3>
                                                                        <h4>
                                                                            {
                                                                                resourceKeys.fare_breakup
                                                                            }
                                                                        </h4>
                                                                        <ul>
                                                                            {fareRules?.BF[0]?.FareDetails?.PaxFareSplitup?.map(
                                                                                (
                                                                                    item,
                                                                                    i
                                                                                ) => {
                                                                                    return (
                                                                                        <li
                                                                                            // key={
                                                                                            //     i
                                                                                            // }
                                                                                            className="d-flex justify-content-between align-items-center"
                                                                                        >
                                                                                            <span>
                                                                                                {getPaxType(
                                                                                                    item?.PaxType
                                                                                                )}

                                                                                                (
                                                                                                {item.PaxType ==
                                                                                                    1
                                                                                                    ? "ren"
                                                                                                    : "s"}
                                                                                                )x
                                                                                                {
                                                                                                    item?.Count
                                                                                                }
                                                                                            </span>{" "}
                                                                                            <span className="fareSpan">
                                                                                                <span>
                                                                                                    {
                                                                                                        fareRules
                                                                                                            ?.BF[0]
                                                                                                            ?.FareDetails
                                                                                                            ?.Currency
                                                                                                    }{" "}
                                                                                                </span>
                                                                                                <span>
                                                                                                    {(
                                                                                                        parseFloat(
                                                                                                            item.Count
                                                                                                        ) *
                                                                                                        (parseFloat(
                                                                                                            item.BaseFare
                                                                                                        ) +
                                                                                                            parseFloat(
                                                                                                                item.Tax
                                                                                                            ) +
                                                                                                            parseFloat(
                                                                                                                item.Service
                                                                                                            ))
                                                                                                    ).toFixed(
                                                                                                        flightJourney
                                                                                                            .AdditionalFares[0]
                                                                                                            .FareDetails
                                                                                                            ?.DecimalPoint
                                                                                                    )}
                                                                                                </span>
                                                                                            </span>{" "}
                                                                                        </li>
                                                                                    );
                                                                                }
                                                                            )}
                                                                            {fareRules
                                                                                ?.BF[0]
                                                                                ?.FareDetails
                                                                                ?.Discount >
                                                                                0 ? (
                                                                                <li
                                                                                    className={`d-flex justify-content-between align-items-center bor_tb `}
                                                                                >
                                                                                    <span>
                                                                                        {
                                                                                            resourceKeys.Discount
                                                                                        }
                                                                                    </span>{" "}
                                                                                    <span className="fareSpan">
                                                                                        <span>
                                                                                            {
                                                                                                fareRules
                                                                                                    ?.BF[0]
                                                                                                    ?.FareDetails
                                                                                                    ?.Currency
                                                                                            }{" "}
                                                                                        </span>
                                                                                        <span>
                                                                                            {
                                                                                                fareRules
                                                                                                    ?.BF[0]
                                                                                                    ?.FareDetails
                                                                                                    ?.Discount
                                                                                            }{" "}
                                                                                        </span>
                                                                                    </span>{" "}
                                                                                </li>
                                                                            ) : (
                                                                                ""
                                                                            )}

                                                                            <li className="total_fare d-flex justify-content-between align-items-center bor_tb">
                                                                                <span>
                                                                                    {
                                                                                        resourceKeys.total_fare
                                                                                    }
                                                                                </span>
                                                                                <span className="fareSpan">
                                                                                    <span>
                                                                                        {
                                                                                            fareRules
                                                                                                ?.BF[0]
                                                                                                ?.FareDetails
                                                                                                ?.Currency
                                                                                        }{" "}
                                                                                    </span>
                                                                                    <span>
                                                                                        {
                                                                                            fareRules
                                                                                                ?.BF[0]
                                                                                                ?.FareDetails
                                                                                                ?.Total
                                                                                        }{" "}
                                                                                    </span>
                                                                                </span>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12 FareRlCncelFee_Main">
                                                                    <h4 className="FareRlCncelFee_Hd">
                                                                        {
                                                                            resourceKeys.Cancellation_fee
                                                                        }
                                                                    </h4>
                                                                    <table className="FareRlCncelFee FareRlCncelFeeTable">
                                                                        <tbody>
                                                                            <tr>
                                                                                <th
                                                                                    width={
                                                                                        200
                                                                                    }
                                                                                >
                                                                                    {" "}
                                                                                    {
                                                                                        resourceKeys.cancellation_details
                                                                                    }
                                                                                </th>
                                                                                <th>
                                                                                    {" "}
                                                                                </th>
                                                                            </tr>
                                                                            <tr>
                                                                                <td
                                                                                    width={
                                                                                        200
                                                                                    }
                                                                                >
                                                                                    {flightJourney?.FlightJourneys?.map(
                                                                                        (
                                                                                            item
                                                                                        ) => {
                                                                                            return (
                                                                                                <p
                                                                                                    key={
                                                                                                        item.JourneyID
                                                                                                    }
                                                                                                >
                                                                                                    <span>
                                                                                                        {
                                                                                                            item
                                                                                                                ?.FlightItems[0]
                                                                                                                ?.Departure
                                                                                                                ?.AirportCode
                                                                                                        }
                                                                                                    </span>{" "}
                                                                                                    -{" "}
                                                                                                    <span>
                                                                                                        {
                                                                                                            item?.FlightItems.at(
                                                                                                                -1
                                                                                                            )
                                                                                                                ?.Arrival
                                                                                                                ?.AirportCode
                                                                                                        }
                                                                                                    </span>
                                                                                                </p>
                                                                                            );
                                                                                        }
                                                                                    )}
                                                                                </td>

                                                                                <td>
                                                                                    {/* className="non-refundable" */}{" "}
                                                                                    {
                                                                                        resourceKeys[fareRules
                                                                                            ?.BF[0]
                                                                                            ?.RefundInfo
                                                                                            ?.Name]
                                                                                    }
                                                                                    {fareRules?.BF[0]?.PenaltiesInfo?.map(
                                                                                        (
                                                                                            item,
                                                                                            i
                                                                                        ) => {
                                                                                            debugger
                                                                                            if (
                                                                                                item.PenaltyType ==
                                                                                                "Refund"
                                                                                            ) {
                                                                                                return (
                                                                                                    <p
                                                                                                        key={
                                                                                                            i
                                                                                                        }
                                                                                                    >
                                                                                                        {
                                                                                                            item.PassengerType
                                                                                                        }

                                                                                                        -
                                                                                                        {item.CurrencyCode +
                                                                                                            "(" +
                                                                                                            item.Amount.toFixed(
                                                                                                                3
                                                                                                            ) +
                                                                                                            `+ ${resourceKeys.fare_diff})`}
                                                                                                    </p>
                                                                                                );
                                                                                            }
                                                                                        }
                                                                                    )}
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th
                                                                                    width={
                                                                                        200
                                                                                    }
                                                                                >
                                                                                    {" "}
                                                                                    {
                                                                                        resourceKeys.Date_change_fee
                                                                                    }{" "}
                                                                                </th>
                                                                                <th>
                                                                                    {" "}
                                                                                </th>
                                                                            </tr>
                                                                            <tr>
                                                                                <td
                                                                                    width={
                                                                                        200
                                                                                    }
                                                                                >
                                                                                    {flightJourney?.FlightJourneys?.map(
                                                                                        (
                                                                                            item
                                                                                        ) => {
                                                                                            return (
                                                                                                <p
                                                                                                    key={
                                                                                                        item.JourneyID
                                                                                                    }
                                                                                                >
                                                                                                    <span>
                                                                                                        {
                                                                                                            item
                                                                                                                ?.FlightItems[0]
                                                                                                                ?.Departure
                                                                                                                ?.AirportCode
                                                                                                        }
                                                                                                    </span>{" "}
                                                                                                    -{" "}
                                                                                                    <span>
                                                                                                        {
                                                                                                            item?.FlightItems.at(
                                                                                                                -1
                                                                                                            )
                                                                                                                ?.Arrival
                                                                                                                ?.AirportCode
                                                                                                        }
                                                                                                    </span>
                                                                                                </p>
                                                                                            );
                                                                                        }
                                                                                    )}
                                                                                </td>
                                                                                <td>
                                                                                    {fareRules?.BF[0]?.PenaltiesInfo?.map(
                                                                                        (
                                                                                            item,
                                                                                            i
                                                                                        ) => {
                                                                                            if (
                                                                                                item.PenaltyType ==
                                                                                                "Exchange"
                                                                                            ) {
                                                                                                return (
                                                                                                    <p
                                                                                                        key={
                                                                                                            i
                                                                                                        }
                                                                                                    >
                                                                                                        {
                                                                                                            item.PassengerType
                                                                                                        }

                                                                                                        -
                                                                                                        {item.CurrencyCode +
                                                                                                            "(" +
                                                                                                            item.Amount.toFixed(
                                                                                                                3
                                                                                                            ) +
                                                                                                            `+ ${resourceKeys.fare_diff})`}
                                                                                                    </p>
                                                                                                );
                                                                                            }
                                                                                        }
                                                                                    )}
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-12 FareRule_notes">
                                                                <p>
                                                                    {
                                                                        resourceKeys.cancellation_policy_baggage_meals
                                                                    }
                                                                </p>

                                                                <p
                                                                    className={
                                                                        isModelopen
                                                                            ? ''
                                                                            : 'd-none'
                                                                    }
                                                                >
                                                                    {parse(fareRuleContent)}
                                                                </p>

                                                                <p className="mt-2">
                                                                    {
                                                                        resourceKeys.service_fee_will_apply ? resourceKeys.service_fee_will_apply : 'Note -Maqam service fee will apply on Changes & Cancellations,'
                                                                    }
                                                                    {" "}
                                                                    {isModelopen
                                                                        ? ''
                                                                        : (resourceKeys.more_details ? resourceKeys.more_details : 'For more details')}
                                                                    <a
                                                                        className="clickHere"
                                                                        href="javascript:void(0);"
                                                                        onClick={() => {
                                                                            setIsModelopen(
                                                                                !isModelopen
                                                                            )
                                                                        }
                                                                        }
                                                                    >
                                                                        {" "}

                                                                        {isModelopen
                                                                            ? (resourceKeys.view_less ? resourceKeys.view_less : 'View Less')
                                                                            : resourceKeys.click_here}
                                                                    </a>{" "}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* <div
                                                    className="tab-pane"
                                                    id="tab3"
                                                    role="tabpanel"
                                                    aria-labelledby="tab3-tab"
                                                >
                                                    <div className="BagDetails_rslt">
                                                        <ul>
                                                            {loader.bounceLoader ? (
                                                                <div
                                                                    className="loader-sm"
                                                                    id="supportloader"
                                                                    style={{}}
                                                                >
                                                                    <div className="bounce1" />
                                                                    <div className="bounce2" />
                                                                    <div className="bounce3" />
                                                                </div>
                                                            ) : (
                                                                flightJourney?.FlightJourneys?.map(
                                                                    (item) => {
                                                                        return (
                                                                            <li
                                                                                key={
                                                                                    item.JourneyID
                                                                                }
                                                                            >
                                                                                <div className="BagDetails_rslt_dvd">
                                                                                    <p>
                                                                                        <span>
                                                                                            {
                                                                                                item
                                                                                                    .FlightItems[0]
                                                                                                    .Departure
                                                                                                    ?.AirportCode
                                                                                            }
                                                                                        </span>{" "}
                                                                                        -{" "}
                                                                                        <span>
                                                                                            {
                                                                                                item.FlightItems.at(
                                                                                                    -1
                                                                                                )
                                                                                                    .Arrival
                                                                                                    ?.AirportCode
                                                                                            }
                                                                                        </span>
                                                                                    </p>
                                                                                </div>
                                                                                <div className="BagDetails_rslt_dvd">
                                                                                    {" "}
                                                                                    {item?.FlightItems?.map(
                                                                                        (
                                                                                            e,
                                                                                            i
                                                                                        ) => {
                                                                                            return fareRules?.BF[0]?.BrandProperties?.map(
                                                                                                (
                                                                                                    element,
                                                                                                    index
                                                                                                ) => {
                                                                                                    return element[
                                                                                                        "BG-F"
                                                                                                    ]?.map(
                                                                                                        (
                                                                                                            bg,
                                                                                                            i
                                                                                                        ) => {
                                                                                                            if (
                                                                                                                bg.segmentIdentifier ==
                                                                                                                e.SegmentIdentifier
                                                                                                            ) {
                                                                                                                return bg
                                                                                                                    .applicableTo[0] !=
                                                                                                                    2 ? (
                                                                                                                    <p
                                                                                                                        // key={
                                                                                                                        //     i
                                                                                                                        // }
                                                                                                                    >
                                                                                                                        {getPaxType(
                                                                                                                            bg
                                                                                                                                .applicableTo[0]
                                                                                                                        )}{" "}
                                                                                                                        {bg?.displayText
                                                                                                                            ? bg.displayText
                                                                                                                            : ""}{" "}
                                                                                                                        -{" "}
                                                                                                                        {
                                                                                                                            resourceKeys[
                                                                                                                                bg
                                                                                                                                    .type
                                                                                                                            ]
                                                                                                                        }
                                                                                                                    </p>
                                                                                                                ) : bg.type !=
                                                                                                                  "cabin" ? (
                                                                                                                    getPaxType(
                                                                                                                        bg?.applicableTo.at(
                                                                                                                            0
                                                                                                                        )
                                                                                                                    ) +
                                                                                                                    " - " +
                                                                                                                    bg.displayText +
                                                                                                                    " - " +
                                                                                                                    resourceKeys[
                                                                                                                        bg
                                                                                                                            .type
                                                                                                                    ]
                                                                                                                ) : (
                                                                                                                    ""
                                                                                                                );
                                                                                                            }
                                                                                                        }
                                                                                                    );
                                                                                                }
                                                                                            );
                                                                                        }
                                                                                    )}{" "}
                                                                                </div>
                                                                            </li>
                                                                        );
                                                                    }
                                                                )
                                                            )}{" "}
                                                        </ul>
                                                    </div>
                                                </div> */}

                                                {/* Fare Summery */}
                                                <div
                                                    className="tab-pane"
                                                    id="tab4"
                                                    role="tabpanel"
                                                    aria-labelledby="tab4-tab"
                                                >
                                                    <div className="row FareSummary">
                                                        <div className="col-lg-12">
                                                            <div className="table-responsive">
                                                                <table className="table">
                                                                    <tbody>
                                                                        <tr className="FareSummaryHead">
                                                                            <td>
                                                                                {
                                                                                    resourceKeys.passengers
                                                                                }
                                                                            </td>
                                                                            <td>
                                                                                {
                                                                                    resourceKeys.base_fare
                                                                                }
                                                                            </td>
                                                                            <td>
                                                                                {
                                                                                    resourceKeys.tax_and_fees
                                                                                }
                                                                            </td>
                                                                            <td>
                                                                                {
                                                                                    resourceKeys.per_passenger
                                                                                }
                                                                            </td>
                                                                            {flightJourney
                                                                                .AdditionalFares[0]
                                                                                .FareDetails
                                                                                ?.Discount >
                                                                                0 ? (
                                                                                <td>
                                                                                    {
                                                                                        resourceKeys.Discount
                                                                                    }
                                                                                </td>
                                                                            ) : (
                                                                                ""
                                                                            )}
                                                                            <td>
                                                                                {
                                                                                    resourceKeys.total_fare
                                                                                }
                                                                            </td>
                                                                        </tr>

                                                                        {flightJourney.AdditionalFares[0].FareDetails?.PaxFareSplitup.map(
                                                                            (
                                                                                element,
                                                                                index
                                                                            ) => {
                                                                                return (
                                                                                    <tr>
                                                                                        <td
                                                                                            className="FS_span"
                                                                                            bgcolor="#FFFFFF"
                                                                                        >
                                                                                            <p className="d-inline">
                                                                                                <span>
                                                                                                    {getPaxType(
                                                                                                        element?.PaxType
                                                                                                    )}
                                                                                                </span>
                                                                                                <span>
                                                                                                    (
                                                                                                    {
                                                                                                        element?.Count
                                                                                                    }

                                                                                                    )
                                                                                                </span>
                                                                                            </p>
                                                                                        </td>
                                                                                        <td
                                                                                            className="FS_span"
                                                                                            bgcolor="#FFFFFF"
                                                                                        >
                                                                                            <span>
                                                                                                {
                                                                                                    flightJourney
                                                                                                        .AdditionalFares[0]
                                                                                                        .FareDetails
                                                                                                        ?.Currency
                                                                                                }
                                                                                            </span>{" "}
                                                                                            <span>
                                                                                                {parseFloat(
                                                                                                    element.BaseFare
                                                                                                ).toFixed(
                                                                                                    flightJourney
                                                                                                        .AdditionalFares[0]
                                                                                                        .FareDetails
                                                                                                        ?.DecimalPoint
                                                                                                )}
                                                                                            </span>
                                                                                        </td>
                                                                                        <td
                                                                                            className="FS_span"
                                                                                            bgcolor="#FFFFFF"
                                                                                        >
                                                                                            <span>
                                                                                                {
                                                                                                    flightJourney
                                                                                                        .AdditionalFares[0]
                                                                                                        .FareDetails
                                                                                                        ?.Currency
                                                                                                }
                                                                                            </span>{" "}
                                                                                            <span>
                                                                                                {(
                                                                                                    parseFloat(
                                                                                                        element.Tax
                                                                                                    ) +
                                                                                                    parseFloat(
                                                                                                        element.Service
                                                                                                    )
                                                                                                ).toFixed(
                                                                                                    flightJourney
                                                                                                        .AdditionalFares[0]
                                                                                                        .FareDetails
                                                                                                        ?.DecimalPoint
                                                                                                )}
                                                                                            </span>
                                                                                        </td>
                                                                                        <td
                                                                                            className="FS_span"
                                                                                            bgcolor="#FFFFFF"
                                                                                        >
                                                                                            <span>
                                                                                                {
                                                                                                    flightJourney
                                                                                                        .AdditionalFares[0]
                                                                                                        .FareDetails
                                                                                                        ?.Currency
                                                                                                }
                                                                                            </span>{" "}
                                                                                            <span>
                                                                                                {(
                                                                                                    parseFloat(
                                                                                                        element.Tax
                                                                                                    ) +
                                                                                                    parseFloat(
                                                                                                        element.BaseFare
                                                                                                    ) +
                                                                                                    parseFloat(
                                                                                                        element.Service
                                                                                                    )
                                                                                                ).toFixed(
                                                                                                    flightJourney
                                                                                                        .AdditionalFares[0]
                                                                                                        .FareDetails
                                                                                                        ?.DecimalPoint
                                                                                                )}
                                                                                            </span>
                                                                                        </td>
                                                                                        {flightJourney
                                                                                            .AdditionalFares[0]
                                                                                            .FareDetails
                                                                                            ?.Discount >
                                                                                            0 ? (
                                                                                            <td
                                                                                                className="FS_span"
                                                                                                bgcolor="#FFFFFF"
                                                                                            >
                                                                                                <span>
                                                                                                    {
                                                                                                        flightJourney
                                                                                                            .AdditionalFares[0]
                                                                                                            .FareDetails
                                                                                                            ?.Currency
                                                                                                    }
                                                                                                </span>{" "}
                                                                                                <span>
                                                                                                    {
                                                                                                        element.Discount
                                                                                                    }
                                                                                                </span>
                                                                                            </td>
                                                                                        ) : (
                                                                                            ""
                                                                                        )}

                                                                                        <td
                                                                                            className="FS_span"
                                                                                            bgcolor="#FFFFFF"
                                                                                        >
                                                                                            <span>
                                                                                                {
                                                                                                    flightJourney
                                                                                                        .AdditionalFares[0]
                                                                                                        .FareDetails
                                                                                                        ?.Currency
                                                                                                }
                                                                                            </span>{" "}
                                                                                            <span>
                                                                                                {(
                                                                                                    parseFloat(
                                                                                                        element.Total
                                                                                                    ) *
                                                                                                    parseFloat(
                                                                                                        element.Count
                                                                                                    )
                                                                                                ).toFixed(
                                                                                                    flightJourney
                                                                                                        .AdditionalFares[0]
                                                                                                        .FareDetails
                                                                                                        ?.DecimalPoint
                                                                                                )}
                                                                                            </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                );
                                                                            }
                                                                        )}

                                                                        {/* fare summery end */}

                                                                        <tr>
                                                                            <td
                                                                                style={{}}
                                                                                className="FS_span FareSummaryT_lft"
                                                                                bgcolor="#FFFFFF"
                                                                            />
                                                                            <td
                                                                                style={{
                                                                                    border: 0,
                                                                                }}
                                                                                className="FS_span"
                                                                                bgcolor="#FFFFFF"
                                                                            />
                                                                            <td
                                                                                style={{
                                                                                    border: 0,
                                                                                }}
                                                                                className="FS_span"
                                                                                bgcolor="#FFFFFF"
                                                                            />
                                                                            {flightJourney
                                                                                .AdditionalFares[0]
                                                                                .FareDetails
                                                                                ?.Discount >
                                                                                0 ? (
                                                                                <td
                                                                                    style={{
                                                                                        border: 0,
                                                                                    }}
                                                                                    className="FS_span"
                                                                                    bgcolor="#FFFFFF"
                                                                                />
                                                                            ) : (
                                                                                ""
                                                                            )}
                                                                            <td
                                                                                style={{
                                                                                    border: 0,
                                                                                }}
                                                                                className="FS_span"
                                                                                bgcolor="#FFFFFF"
                                                                            />
                                                                            <td
                                                                                style={{}}
                                                                                className="FS_span FareSummaryTotal FareSummaryT_rht"
                                                                                bgcolor="#FFFFFF"
                                                                            >
                                                                                <h4>
                                                                                    <span>
                                                                                        {
                                                                                            flightJourney
                                                                                                .AdditionalFares[0]
                                                                                                .FareDetails
                                                                                                ?.Currency
                                                                                        }
                                                                                    </span>{" "}
                                                                                    <span>
                                                                                        {parseFloat(
                                                                                            flightJourney
                                                                                                .AdditionalFares[0]
                                                                                                .FareDetails
                                                                                                ?.Total
                                                                                        ).toFixed(
                                                                                            flightJourney
                                                                                                .AdditionalFares[0]
                                                                                                .FareDetails
                                                                                                ?.DecimalPoint
                                                                                        )}
                                                                                    </span>
                                                                                </h4>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td
                                                                                style={{
                                                                                    padding: 0,
                                                                                }}
                                                                                colSpan={
                                                                                    6
                                                                                }
                                                                            >
                                                                                <table
                                                                                    width="100%"
                                                                                    border={
                                                                                        0
                                                                                    }
                                                                                    cellSpacing={
                                                                                        0
                                                                                    }
                                                                                    cellPadding={
                                                                                        0
                                                                                    }
                                                                                >
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td
                                                                                                bgcolor="#FFFFFF"
                                                                                                className="tdbdrnone"
                                                                                            >
                                                                                                {
                                                                                                    resourceKeys.fare_difference_in_fare_summary
                                                                                                }
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
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
            </div>
        </div>
    );
};

export default FlightDetails;
