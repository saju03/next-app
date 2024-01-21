import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import FlightDetails from "./FlightDetails";

import FLightResultLoader from "./FlightResultLoader";
import FlightSort from "./FlightSort";
import FlighResetAllFilter from "./FlighResetAllFilter";
const resourceKeys = window.resourceKeys;

const FlightResultBlock = ({
    flightResults,
    filteredFlights,
    setAncillaries,
    setFlightTripKey,
    setLoader,
    loader,
    setSelectedFlight,
    setSelectedFlightForDetails,
    sortStatus,
    setSortStatus,
    bestValueFlightKey,
    getDetails,
    setFullLoader,
    setFilteredFlights,
    setStopFilter,
    setFund,
    setPriceFilter,
    pricefilter,
    setlayoverAirport,
    layoverAirport,
    setAirlines,
    setTimeFilter,
    setLayoverTimeFilter,
    setActive,
}) => {
    console.warn(Object.keys(filteredFlights).length)
    const [bestValueFlight, setBestValueFlight] = useState([]);
    const [fastest, setFastest] = useState([]);
    function convertToMinutes(tripDuration) {
        const { Days, Hours, Minutes } = tripDuration;
        return Days * 24 * 60 + Hours * 60 + Minutes;
    }
    const currency = window.currency;

    const [priceIndex, setPriceIndex] = useState([]);
    const [showFlightDetails, setShowFlightDetails] = useState("");
    const [fareRuleContent, setFareRuleContent] = useState("");
    const [selectButtonLoader, setSelectButtonLoader] = useState("");
    // const [isModelopen, setIsModelopen] = useState(false);

    const showMorePrice = (index) => {
        if (priceIndex.includes(index)) {
            const updatedPriceIndex = priceIndex.filter(
                (item) => item !== index
            );
            setPriceIndex(updatedPriceIndex);
        } else {
            const updatedPriceIndex = [...priceIndex, index];
            setPriceIndex(updatedPriceIndex);
        }
    };

    const handleGetPax = (flightTripKey) => {
        const apiURL = `${window.apiURL}api/Ancillary/GetAncillaries`;
        const token = window.accessToken;
        const headers = {
            Authorization: `Bearer ${token}`,
            SearchId: window.SearchId,
        };
        const requestBody = {
            FlightTripKey: flightTripKey,
            Currency: window.currency,
            Type: ["BF"],
        };
        setLoader({ ...loader, bounceLoader: true });
        setAncillaries([""]);
        axios
            .post(apiURL, requestBody, { headers })
            .then((response) => {
                let a = window.location.href.split("/")[2].split(".")[0];
                let code = response.data.Code;
                if (response.data.Code == "400" && window.isDev == "1") {
                    alert(`${response.data.Message} , ${apiURL}`);
                    window.location.reload();
                }
                setAncillaries(response.data.Data.BF);
                setLoader({ ...loader, bounceLoader: false });
            })
            .catch((error) => {
                console.error(error);
            });
        setFlightTripKey(flightTripKey);
    };

    return (
        <>
            <div className="result_col">
                {/* Flight Result Pannel */}
                {flightResults.length == 0 ? (
                    <FLightResultLoader isLoading={flightResults.length == 0} />
                ) : (
                    ""
                )}
                {Object.keys(filteredFlights).length === 0 && (
                    <FlighResetAllFilter
                        flightResults={flightResults}
                        setFilteredFlights={setFilteredFlights}
                        filteredFlights={filteredFlights}
                        setStopFilter={setStopFilter}
                        setFund={setFund}
                        setPriceFilter={setPriceFilter}
                        pricefilter={pricefilter}
                        setlayoverAirport={setlayoverAirport}
                        layoverAirport={layoverAirport}
                        setAirlines={setAirlines}
                        setTimeFilter={setTimeFilter}
                        setLayoverTimeFilter={setLayoverTimeFilter}
                    />
                )}

                {Object.entries(filteredFlights).map(
                    ([groupPrice, flightArray], groupIndex) => {
                        bestValueFlightKey;
                        const numberOfFlights =
                            Object.keys(filteredFlights).length;
                        // flightArray = sortStatus.type == "best" ? bestValueFlight : flightArray

                        return flightArray.map((flightJourney, fIndex) => {
                            // let gIndex = sortStatus.type === "best" ? 0 : groupIndex;
                            return (
                                <>
                                    {(
                                        sortStatus.type === "best"
                                            ? groupIndex === 0 && fIndex === 0
                                            : priceIndex.includes(groupIndex) ||
                                              (!priceIndex.includes(
                                                  groupIndex
                                              ) &&
                                                  fIndex === 0)
                                    ) ? (
                                        <div className="result_panel FlightResultSection">
                                           
                                            {/* Length: {fIndex} */}
                                            <div className="row no-gutters">
                                                {/* RelsutLeft */}
                                                <div className="result_panel_col_l">
                                                    <div className="result_details">
                                                        <div className="rslt_fund_main">
                                                            <div
                                                                className={
                                                                    flightJourney
                                                                        .AdditionalFares[0]
                                                                        .RefundInfo
                                                                        .Name ===
                                                                    "Non Refundable"
                                                                        ? "rslt_nonrefundable"
                                                                        : "rslt_refundable"
                                                                }
                                                            >
                                                                


                                                                {flightJourney?.AdditionalFares[0].RefundInfo.Name ==
                                                                "Refundable with Charges"
                                                                    ? resourceKeys.flight_result_refundable_with_charge
                                                                    : flightJourney?.AdditionalFares[0].RefundInfo.Name ==
                                                                    "Non Refundable"
                                                                    ? resourceKeys.flight_result_non_refundable
                                                                    : flightJourney?.AdditionalFares[0].RefundInfo.Name ==
                                                                    "Refundable"
                                                                    ? resourceKeys.flight_result_refundable
                                                                    : flightJourney?.AdditionalFares[0].RefundInfo.Name
                                                                    }



                                                            
                                                            </div>
                                                        </div>
                                                        {/*-leg repeater-  || RESULT BLOCK */}
                                                        {flightJourney.FlightJourneys.map(
                                                            (
                                                                journeyItem,
                                                                Jindex
                                                            ) => {
                                                                return (
                                                                    <div className="result_one_leg">
                                                                        <div className="row no-gutters">
                                                                            <div className="col-lg-3 col-md-3">
                                                                                <div className="fl_rslt_clm1">
                                                                                    <div className="Fl_rslt_sec">
                                                                                        {" "}
                                                                                        <div className="airlogo">
                                                                                            {" "}
                                                                                            <img
                                                                                                src={`${base_url}images/AirlineIcons/${journeyItem.FlightItems[0].FlightInfo.Code}.png`}
                                                                                                alt="img"
                                                                                            />{" "}
                                                                                        </div>
                                                                                        <div className="fl_name">
                                                                                            {
                                                                                                journeyItem
                                                                                                    .FlightItems[0]
                                                                                                    .FlightInfo
                                                                                                    .Name[
                                                                                                    window
                                                                                                        .culture
                                                                                                ]
                                                                                            }
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="air_code">
                                                                                        <div>
                                                                                            <p>
                                                                                                {journeyItem.FlightItems.map(
                                                                                                    (
                                                                                                        item,
                                                                                                        index
                                                                                                    ) => {
                                                                                                        return (
                                                                                                            <>
                                                                                                                {
                                                                                                                    item
                                                                                                                        .FlightInfo
                                                                                                                        .Code
                                                                                                                }
                                                                                                                {
                                                                                                                    item
                                                                                                                        .FlightInfo
                                                                                                                        .Number
                                                                                                                }
                                                                                                                {index !==
                                                                                                                    journeyItem
                                                                                                                        .FlightItems
                                                                                                                        .length -
                                                                                                                        1 &&
                                                                                                                    " - "}
                                                                                                            </>
                                                                                                        );
                                                                                                    }
                                                                                                )}
                                                                                            </p>
                                                                                            {/* <p>
                                                                                                {' '}{
                                                                                                    journeyItem
                                                                                                        .FlightItems[0]
                                                                                                        .FlightInfo
                                                                                                        .Code
                                                                                                }{' '}
                                                                                                {
                                                                                                    journeyItem
                                                                                                        .FlightItems[0]
                                                                                                        .FlightInfo
                                                                                                        .Number
                                                                                                }{' '}  
                                                                                            </p> */}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-9 col-md-9 Result_time_sec">
                                                                                <div className="air_time_sector align-items-center rhtPdng">
                                                                                    {" "}
                                                                                    <span className="air_time_Time">
                                                                                        {journeyItem.FlightItems[0].Departure.DateTime.split(
                                                                                            "T"
                                                                                        )[1].substring(
                                                                                            0,
                                                                                            5
                                                                                        )}
                                                                                    </span>{" "}
                                                                                    <span
                                                                                        className="air_time_aircode all_airport_rslt"
                                                                                        style={{
                                                                                            backgroundColor:
                                                                                                journeyItem.FlightItems[0].Departure.AirportName[
                                                                                                    window
                                                                                                        .culture
                                                                                                ]
                                                                                                    .toLowerCase()
                                                                                                    .includes(
                                                                                                        "all airport"
                                                                                                    )
                                                                                                    ? "yellow"
                                                                                                    : "",
                                                                                        }}
                                                                                    >
                                                                                        {
                                                                                            journeyItem
                                                                                                .FlightItems[0]
                                                                                                .Departure
                                                                                                .AirportCode
                                                                                        }
                                                                                    </span>{" "}
                                                                                </div>
                                                                                <div className="air__stops">
                                                                                    <div className="airDurationStops">
                                                                                        {" "}
                                                                                        <span>
                                                                                            {flightJourney
                                                                                                .FlightJourneys[
                                                                                                Jindex
                                                                                            ]
                                                                                                .TotalStops ===
                                                                                            0
                                                                                                ? resourceKeys.non
                                                                                                : flightJourney
                                                                                                      .FlightJourneys[
                                                                                                      Jindex
                                                                                                  ]
                                                                                                      .TotalStops}{" "}
                                                                                            {
                                                                                                resourceKeys.stop
                                                                                            }
                                                                                        </span>
                                                                                        <div className="flightIcon">
                                                                                            {" "}
                                                                                        </div>
                                                                                        <div className="result_time_bag_main">
                                                                                            <div className="rslt_time">
                                                                                                <i className="Fresult_time" />
                                                                                                <p>
                                                                                                    {journeyItem
                                                                                                        .JourneyTime
                                                                                                        .Days >
                                                                                                    0
                                                                                                        ? journeyItem
                                                                                                              .JourneyTime
                                                                                                              .Days +
                                                                                                          `${resourceKeys.D}`
                                                                                                        : ""}{" "}
                                                                                                    {journeyItem
                                                                                                        .JourneyTime
                                                                                                        .Hours >
                                                                                                    0
                                                                                                        ? journeyItem
                                                                                                              .JourneyTime
                                                                                                              .Hours +
                                                                                                          `${resourceKeys.H}`
                                                                                                        : ""}{" "}
                                                                                                    {journeyItem
                                                                                                        .JourneyTime
                                                                                                        .Minutes >
                                                                                                    0
                                                                                                        ? journeyItem
                                                                                                              .JourneyTime
                                                                                                              .Minutes +
                                                                                                          `${resourceKeys.M}`
                                                                                                        : 0+`${resourceKeys.M}`+""}{" "}
                                                                                                    {/* {
                                                                                                        flightJourney
                                                                                                            .FlightJourneys[
                                                                                                            flightJourney
                                                                                                                .FlightJourneys
                                                                                                                .length -
                                                                                                                1
                                                                                                        ]
                                                                                                            .JourneyTime
                                                                                                            .Minutes
                                                                                                    } */}
                                                                                                </p>
                                                                                            </div>
                                                                                            <div className="rslt_bag">
                                                                                                <i className="Fresult_bag" />
                                                                                                <p>
                                                                                                    {
                                                                                                        resourceKeys.baggage_options_available
                                                                                                    }
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="air_time_sector align-items-center lftPdng">
                                                                                    {" "}
                                                                                    <span className="air_time_Time">
                                                                                        {journeyItem.FlightItems[
                                                                                            journeyItem
                                                                                                .FlightItems
                                                                                                .length -
                                                                                                1
                                                                                        ].Arrival.DateTime.split(
                                                                                            "T"
                                                                                        )[1].substring(
                                                                                            0,
                                                                                            5
                                                                                        )}
                                                                                    </span>{" "}
                                                                                    <span
                                                                                        className="air_time_aircode"
                                                                                        style={{
                                                                                            backgroundColor:
                                                                                                journeyItem.FlightItems[
                                                                                                    journeyItem
                                                                                                        .FlightItems
                                                                                                        .length -
                                                                                                        1
                                                                                                ].Arrival.AirportName[
                                                                                                    window
                                                                                                        .culture
                                                                                                ]
                                                                                                    .toLowerCase()
                                                                                                    .includes(
                                                                                                        "all airport"
                                                                                                    )
                                                                                                    ? "yellow"
                                                                                                    : "",
                                                                                        }}
                                                                                    >
                                                                                        {
                                                                                            journeyItem
                                                                                                .FlightItems[
                                                                                                journeyItem
                                                                                                    .FlightItems
                                                                                                    .length -
                                                                                                    1
                                                                                            ]
                                                                                                .Arrival
                                                                                                .AirportCode
                                                                                        }
                                                                                    </span>{" "}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            }
                                                        )}
                                                        {/*-leg repeater-*/}
                                                        {/*-leg repeater-*/}

                                                        {/*-leg repeater-*/}
                                                    </div>
                                                </div>
                                                {/* RelsutLeft */}
                                                {/* Resultright */}
                                                <div className="result_panel_col_R d-flex flex-column justify-content-center">
                                                    {flightJourney.FareDetails
                                                        .Total ==
                                                        pricefilter.lowest && (
                                                        <div className="rslt_rht_fastest">
                                                            <div className="rslt_fastest_btn">
                                                                <i className="fastest_icon" />
                                                                {
                                                                    resourceKeys.cheapest
                                                                }
                                                            </div>
                                                        </div>
                                                    )}

                                                    {flightJourney.FareDetails
                                                        .Total ==
                                                        pricefilter.fastest && (
                                                        <div className="rslt_rht_fastest">
                                                            <div className="rslt_fastest_btn">
                                                                <i className="fastest_icon" />
                                                                {
                                                                    resourceKeys.fastest
                                                                }
                                                            </div>
                                                        </div>
                                                    )}
                                                    {flightJourney.FareDetails
                                                        .Total ==
                                                        pricefilter.fastest &&
                                                        flightJourney
                                                            .FareDetails
                                                            .Total ==
                                                            pricefilter.lowest && (
                                                            <>
                                                                <div className="rslt_rht_fastest">
                                                                    <div className="rslt_fastest_btn">
                                                                        <i className="fastest_icon" />
                                                                        {
                                                                            resourceKeys.Fastest_and_Cheapest
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )}

                                                    <div className="resultfareDetails">
                                                        <div className="FrSelctMain">
                                                            {flightJourney
                                                                ?.FareDetails
                                                                ?.Discount >
                                                            0 ? (
                                                                <div class="strikedfare">
                                                                    <span class="strikePrice">
                                                                        <span>
                                                                            {
                                                                                flightJourney
                                                                                    ?.FareDetails
                                                                                    ?.Currency
                                                                            }
                                                                        </span>{" "}
                                                                        <span>
                                                                            {parseFloat(
                                                                                flightJourney
                                                                                    ?.FareDetails
                                                                                    ?.StrikeOutAmount
                                                                            ).toFixed(
                                                                                flightJourney
                                                                                    ?.FareDetails
                                                                                    .DecimalPoint
                                                                            )}
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            ) : (
                                                                ""
                                                            )}
                                                            <div className="resultFare">
                                                                <span>
                                                                    {
                                                                        flightJourney
                                                                            ?.FareDetails
                                                                            ?.Currency
                                                                    }
                                                                </span>{" "}
                                                                <span>
                                                                    {parseFloat(
                                                                        flightJourney
                                                                            .FareDetails
                                                                            .Total
                                                                    ).toFixed(
                                                                        flightJourney
                                                                            ?.FareDetails
                                                                            .DecimalPoint
                                                                    )}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="FrSelctMain">
                                                            <div className=" ">
                                                                <div
                                                                    className="FlgtSelect d-flex"
                                                                    onClick={() => {
                                                                        setFlightTripKey(
                                                                            flightJourney.FlightTripKey
                                                                        );
                                                                    }}
                                                                >
                                                                    {" "}
                                                                    {flightJourney.AdditionalRequests.includes(
                                                                        "BF"
                                                                    ) ? (
                                                                        <a
                                                                            href="#"
                                                                            data-toggle="modal"
                                                                            data-target="#fl_brandes_rslt"
                                                                            className="theme_btnStyle resltselectbtn branded_btn"
                                                                            onClick={(
                                                                                e
                                                                            ) => {
                                                                                e.preventDefault();
                                                                                handleGetPax(
                                                                                    flightJourney.FlightTripKey
                                                                                );
                                                                                setSelectedFlight(
                                                                                    flightJourney
                                                                                );
                                                                            }}
                                                                        >
                                                                            {
                                                                                <span>
                                                                                    {" "}
                                                                                    {
                                                                                        resourceKeys.more_prices
                                                                                    }
                                                                                </span>
                                                                            }{" "}
                                                                            <i className="">
                                                                                +
                                                                            </i>
                                                                        </a>
                                                                    ) : // LOADDER FOR SELECT
                                                                    selectButtonLoader ==
                                                                      flightJourney.flightTripKey ? (
                                                                        <>
                                                                            <div
                                                                                className="loader-sm"
                                                                                id="supportloader"
                                                                            >
                                                                                <div className="bounce1" />
                                                                                <div className="bounce2" />
                                                                                <div className="bounce3" />
                                                                            </div>
                                                                        </>
                                                                    ) : (
                                                                        <a
                                                                            href="#"
                                                                            className="theme_btnStyle resltselectbtn branded_btn"
                                                                            onClick={(
                                                                                e
                                                                            ) => {
                                                                                e.preventDefault();
                                                                                setSelectButtonLoader(
                                                                                    flightJourney.FlightTripKey
                                                                                );
                                                                                getDetails(
                                                                                    flightJourney
                                                                                        .AdditionalFares[0]
                                                                                        .FareKey,
                                                                                    flightJourney.FlightTripKey
                                                                                );
                                                                                setFullLoader(
                                                                                    true
                                                                                );
                                                                            }}
                                                                        >
                                                                            {
                                                                                resourceKeys.select
                                                                            }{" "}
                                                                        </a>
                                                                    )}
                                                                </div>
                                                                Provider -{" "}
                                                                {
                                                                    flightJourney
                                                                        ?.SupplierInfo
                                                                        ?.Name
                                                                }{" "}
                                                            </div>
                                                            <div className="Fl_Dtls">
                                                                <div className="d-flex">
                                                                    <a
                                                                        href="javascript:void(0);"
                                                                        data-toggle="modal"
                                                                        data-target="#fl_details_rslt"
                                                                        className="button_light flightdetailsbt result_btn"
                                                                        onClick={(
                                                                            e
                                                                        ) => {
                                                                            e.preventDefault();
                                                                            setSelectedFlightForDetails(
                                                                                flightJourney
                                                                            );
                                                                            setShowFlightDetails(
                                                                                flightJourney.FlightTripKey
                                                                            );
                                                                        }}
                                                                    >
                                                                        {
                                                                            resourceKeys.flight_details
                                                                        }{" "}
                                                                         
                                                                    </a>
                                                                </div>
                                                            </div>

                                                            {showFlightDetails ==
                                                                flightJourney.FlightTripKey && (
                                                                <FlightDetails
                                                                    flightJourney={
                                                                        flightJourney
                                                                    }
                                                                    setFareRuleContent={
                                                                        setFareRuleContent
                                                                    }
                                                                
                                                                />
                                                            )}
                                                        </div>

                                                                                                    

                                                    </div>
                                                </div>
                                                {/* Resultright */}
                                            </div>
                                       
                                            {sortStatus.type !== "best" &&
                                                fIndex === 0 &&
                                                flightArray.length > 1 && (
                                                    <a
                                                        href="javascript:void(0);"
                                                        className="result__more_options"
                                                        onClick={() =>
                                                            showMorePrice(
                                                                groupIndex
                                                            )
                                                        }
                                                    >
                                                        {priceIndex.includes(
                                                            groupIndex
                                                        )
                                                            ? resourceKeys.hide
                                                            : `+${
                                                                  flightArray.length -
                                                                  1
                                                              } ${
                                                                  resourceKeys.more_at_same_price
                                                              }`}
                                                        <i
                                                            className={
                                                                priceIndex.includes(
                                                                    groupIndex
                                                                )
                                                                    ? "flight_moreoption_up"
                                                                    : "flight_moreoption_down"
                                                            }
                                                        />
                                                    </a>
                                                )}
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </>
                            );
                        });
                    }
                )}
            </div>
        </>
    );
};

export default FlightResultBlock;
