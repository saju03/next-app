import React from "react";
import // sortResults,
// fastestTripSort,
// bestValueSort,
"../services/FlightResult";
import { useEffect } from "react";
import { useState } from "react";

const FlightSort = ({
    flightResults,
    filteredFlights,
    setFilteredFlights,
    airline,
    layoverAirport,
    fund,
    pricefilter,
    stopFilter,
    timeFilter,
    layovertimeFilter,
    sortedName,
    setPriceFilter,
    sortStatus,
    setSortStatus,
    setBestFlightActive,
    bestFlightActive,
    tripType,
    airlineArray,
    // airlineMetrixUpdate
}) => {
    const [isAscending, setIsAscending] = useState(true);
    const [currency, setCurency] = useState("");
    const [fastestPrice, setFastestPrice] = useState(0);
    const [bestValuePrice, setBestValuePrice] = useState("");
    const [active, setActive] = useState({
        cheepActive: true,
        fastActive: false,
        bestValueActive: false,
    });
    const [results, setResults] = useState([]);
    const [sortTypeForActiveClass, setSortTypeForActiveClass] =
        useState("price");

    const lang = JSON.parse(window.language)[0];

    useEffect(() => {
        handlerFilter(airline, layoverAirport);
    }, [
        flightResults,
        airline,
        layoverAirport,
        fund,
        pricefilter,
        stopFilter,
        timeFilter,
        layovertimeFilter,
        sortedName,
        sortStatus,
        airlineArray,
    ]);
    function handlerFilter(airline, layoverAirport) {
        //

        const tempResults = flightResults.filter((item) => {
            let airlineCheck = false;
            //airline filter
            if (airline.some((elem) => elem.isChecked)) {
                let airlineObj = airline.find((airlineItem) => {
                    return (
                        airlineItem.name ==
                        item.OperatingVendorName[window.culture]
                    );
                });

                airlineCheck = airlineObj.isChecked;
            } else {
                airlineCheck = true;
            }

            let airLineMatrixCheck = false;

            if (airlineArray.some((elem) => elem.isChecked)) {
                let airlineMatrixObj = airlineArray.find((airlineItem) => {
                    return (
                        airlineItem.name ==
                        item.OperatingVendorName[window.culture]
                    );
                });

                airLineMatrixCheck = airlineMatrixObj.isChecked;
            } else {
                airLineMatrixCheck = true;
            }

            let airportCheck = false;
            if (layoverAirport.some((elem) => elem.isChecked)) {
                let airportObj = layoverAirport.find((airportItem) => {
                    return (
                        airportItem.name ==
                        item.FlightJourneys[0].FlightItems[0].Arrival
                            .AirportName[window.culture]
                    );
                });

                if (airportObj != undefined)
                    airportCheck = airportObj.isChecked;
            } else {
                airportCheck = true;
            }

            //fare type

            let fareTypeCheck = false;
            if (
                fund.refundable ||
                fund.nonRefundable ||
                fund.refundableWithcharge
            ) {
                if (
                    fund.refundable &&
                    item.AdditionalFares[0].RefundInfo.Name == "Refundable"
                ) {
                    fareTypeCheck = true;
                } else if (
                    fund.nonRefundable &&
                    item.AdditionalFares[0].RefundInfo.Name == "Non Refundable"
                ) {
                    fareTypeCheck = true;
                } else if (
                    fund.refundableWithcharge &&
                    item.AdditionalFares[0].RefundInfo.Name ==
                        "Refundable with Charges"
                ) {
                    fareTypeCheck = true;
                }
            } else {
                fareTypeCheck = true;
            }

            //price filter
            let priceFilterCheck = false;
            let total = parseFloat(item.FareDetails.Total);
            if (
                total >= pricefilter.selectedLow &&
                total <= pricefilter.selectedHigh
            ) {
                priceFilterCheck = true;
            }

            //stop filter
            let stopTypeCheckOnward = false;
            let stopTypeCheckReturn = false;
            let stopTypeCheck = false;
            if (
                stopFilter.onward.directFlight ||
                stopFilter.onward.oneStop ||
                stopFilter.onward.onePlusStop ||
                stopFilter.return.directFlight ||
                stopFilter.return.oneStop ||
                stopFilter.return.onePlusStop
            ) {
                if (
                    stopFilter.onward.directFlight ||
                    stopFilter.onward.oneStop ||
                    stopFilter.onward.onePlusStop
                ) {
                    if (
                        stopFilter.onward.directFlight &&
                        item.FlightJourneys[0].TotalStops == 0
                    ) {
                        stopTypeCheckOnward = true;
                    } else if (
                        stopFilter.onward.oneStop &&
                        item.FlightJourneys[0].TotalStops == 1
                    ) {
                        stopTypeCheckOnward = true;
                    } else if (
                        stopFilter.onward.onePlusStop &&
                        item.FlightJourneys[0].TotalStops > 1
                    ) {
                        stopTypeCheckOnward = true;
                    }
                } else {
                    stopTypeCheckOnward = true;
                }

                if (
                    stopFilter.return.directFlight ||
                    stopFilter.return.oneStop ||
                    stopFilter.return.onePlusStop
                ) {
                    if (
                        stopFilter.return.directFlight &&
                        item.FlightJourneys[1].TotalStops == 0
                    ) {
                        stopTypeCheckReturn = true;
                    } else if (
                        stopFilter.return.oneStop &&
                        item.FlightJourneys[1].TotalStops == 1
                    ) {
                        stopTypeCheckReturn = true;
                    } else if (
                        stopFilter.return.onePlusStop &&
                        item.FlightJourneys[1].TotalStops > 1
                    ) {
                        stopTypeCheckReturn = true;
                    }
                } else {
                    stopTypeCheckReturn = true;
                }
                stopTypeCheck = stopTypeCheckOnward && stopTypeCheckReturn
            } else {
                stopTypeCheck = true
            }

            // timeFilter

            let timeCheck = false;

            if (item.FlightTripKey == "Trip-038-5006-000") {
            }

            if (
                timeFilter.departure.originDeparture["0-6"] ||
                timeFilter.departure.originDeparture["6-12"] ||
                timeFilter.departure.originDeparture["12-18"] ||
                timeFilter.departure.originDeparture["18-23"] ||
                timeFilter.departure.destinationDeparture["0-6"] ||
                timeFilter.departure.destinationDeparture["6-12"] ||
                timeFilter.departure.destinationDeparture["12-18"] ||
                timeFilter.departure.destinationDeparture["18-23"] ||
                timeFilter.arrival.originArrival["0-6"] ||
                timeFilter.arrival.originArrival["6-12"] ||
                timeFilter.arrival.originArrival["12-18"] ||
                timeFilter.arrival.originArrival["18-23"] ||
                timeFilter.arrival.destinationArrival["0-6"] ||
                timeFilter.arrival.destinationArrival["6-12"] ||
                timeFilter.arrival.destinationArrival["12-18"] ||
                timeFilter.arrival.destinationArrival["18-23"]
            ) {
                let tripReturnDepartTime = "";
                let tripReturnArrivalTime = "";

                let tripOnwardDepartTime = new Date(
                    item.FlightJourneys[0].FlightItems[0].Departure.DateTime
                ).getHours();

                let tripOnwardArrivalTime = new Date(
                    item.FlightJourneys[0].FlightItems[
                        item.FlightJourneys[0].FlightItems.length - 1
                    ].Arrival.DateTime
                ).getHours();
                if (tripType === "RoundTrip") {
                    tripReturnDepartTime = new Date(
                        item.FlightJourneys[1].FlightItems[0].Departure.DateTime
                    ).getHours();

                    tripReturnArrivalTime = new Date(
                        item.FlightJourneys[1].FlightItems[
                            item.FlightJourneys[1].FlightItems.length - 1
                        ].Arrival.DateTime
                    ).getHours();
                }

                let timeCheckOnwardDepart = false;
                let timeCheckOnwardArrival = false;
                let timeCheckReturnDepart = false;
                let timeCheckReturndArrival = false;

                if (
                    timeFilter.departure.originDeparture["0-6"] ||
                    timeFilter.departure.originDeparture["6-12"] ||
                    timeFilter.departure.originDeparture["12-18"] ||
                    timeFilter.departure.originDeparture["18-23"]
                ) {
                    if (
                        timeFilter.departure.originDeparture["0-6"] &&
                        tripOnwardDepartTime < 6
                    ) {
                        timeCheckOnwardDepart = tripOnwardDepartTime < 6;
                    } else if (
                        timeFilter.departure.originDeparture["6-12"] &&
                        tripOnwardDepartTime > 6 &&
                        tripOnwardDepartTime < 12
                    ) {
                        timeCheckOnwardDepart =
                            tripOnwardDepartTime > 6 &&
                            tripOnwardDepartTime < 12;
                    } else if (
                        timeFilter.departure.originDeparture["12-18"] &&
                        tripOnwardDepartTime > 12 &&
                        tripOnwardDepartTime < 18
                    ) {
                        timeCheckOnwardDepart =
                            tripOnwardDepartTime > 12 &&
                            tripOnwardDepartTime < 18;
                    } else if (
                        timeFilter.departure.originDeparture["18-23"] &&
                        tripOnwardDepartTime > 18 &&
                        tripOnwardDepartTime < 24
                    ) {
                        timeCheckOnwardDepart =
                            tripOnwardDepartTime > 18 &&
                            tripOnwardDepartTime < 24;
                    }
                } else {
                    timeCheckOnwardDepart = true;
                }

                if (
                    timeFilter.arrival.originArrival["0-6"] ||
                    timeFilter.arrival.originArrival["6-12"] ||
                    timeFilter.arrival.originArrival["12-18"] ||
                    timeFilter.arrival.originArrival["18-23"]
                ) {
                    if (
                        timeFilter.arrival.originArrival["0-6"] &&
                        tripOnwardArrivalTime < 6
                    ) {
                        timeCheckReturnDepart = tripOnwardArrivalTime < 6;
                    } else if (
                        timeFilter.arrival.originArrival["6-12"] &&
                        tripOnwardArrivalTime > 6 &&
                        tripOnwardArrivalTime < 12
                    ) {
                        timeCheckReturnDepart =
                            tripOnwardArrivalTime > 6 &&
                            tripOnwardArrivalTime < 12;
                    } else if (
                        timeFilter.arrival.originArrival["12-18"] &&
                        tripOnwardArrivalTime > 12 &&
                        tripOnwardArrivalTime < 18
                    ) {
                        timeCheckReturnDepart =
                            tripOnwardArrivalTime > 12 &&
                            tripOnwardArrivalTime < 18;
                    } else if (
                        timeFilter.arrival.originArrival["18-23"] &&
                        tripOnwardArrivalTime > 18 &&
                        tripOnwardArrivalTime < 24
                    ) {
                        timeCheckReturnDepart =
                            tripOnwardArrivalTime > 18 &&
                            tripOnwardArrivalTime < 24;
                    }
                } else {
                    timeCheckReturnDepart = true;
                }

                if (tripType === "RoundTrip") {
                    if (
                        timeFilter.departure.destinationDeparture["0-6"] ||
                        timeFilter.departure.destinationDeparture["6-12"] ||
                        timeFilter.departure.destinationDeparture["12-18"] ||
                        timeFilter.departure.destinationDeparture["18-23"]
                    ) {
                        if (
                            timeFilter.departure.destinationDeparture["0-6"] &&
                            tripReturnDepartTime < 6
                        ) {
                            timeCheckOnwardArrival = tripReturnDepartTime < 6;
                        } else if (
                            timeFilter.departure.destinationDeparture["6-12"] &&
                            tripReturnDepartTime > 6 &&
                            tripReturnDepartTime < 12
                        ) {
                            timeCheckOnwardArrival =
                                tripReturnDepartTime > 6 &&
                                tripReturnDepartTime < 12;
                        } else if (
                            timeFilter.departure.destinationDeparture[
                                "12-18"
                            ] &&
                            tripReturnDepartTime > 12 &&
                            tripReturnDepartTime < 18
                        ) {
                            timeCheckOnwardArrival =
                                tripReturnDepartTime > 12 &&
                                tripReturnDepartTime < 18;
                        } else if (
                            timeFilter.departure.destinationDeparture[
                                "18-23"
                            ] &&
                            tripReturnDepartTime > 18 &&
                            tripReturnDepartTime < 24
                        ) {
                            timeCheckOnwardArrival =
                                tripReturnDepartTime > 18 &&
                                tripReturnDepartTime < 24;
                        }
                    } else {
                        timeCheckOnwardArrival = true;
                    }

                    if (
                        timeFilter.arrival.destinationArrival["0-6"] ||
                        timeFilter.arrival.destinationArrival["6-12"] ||
                        timeFilter.arrival.destinationArrival["12-18"] ||
                        timeFilter.arrival.destinationArrival["18-23"]
                    ) {
                        if (
                            timeFilter.arrival.destinationArrival["0-6"] &&
                            tripReturnArrivalTime < 6
                        ) {
                            timeCheckReturndArrival = tripReturnArrivalTime < 6;
                        } else if (
                            timeFilter.arrival.destinationArrival["6-12"] &&
                            tripReturnArrivalTime > 6 &&
                            tripReturnArrivalTime < 12
                        ) {
                            timeCheckReturndArrival =
                                tripReturnArrivalTime > 6 &&
                                tripReturnArrivalTime < 12;
                        } else if (
                            timeFilter.arrival.destinationArrival["12-18"] &&
                            tripReturnArrivalTime > 12 &&
                            tripReturnArrivalTime < 18
                        ) {
                            timeCheckReturndArrival =
                                tripReturnArrivalTime > 12 &&
                                tripReturnArrivalTime < 18;
                        } else if (
                            timeFilter.arrival.destinationArrival["18-23"] &&
                            tripReturnArrivalTime > 18 &&
                            tripReturnArrivalTime < 24
                        ) {
                            timeCheckReturndArrival =
                                tripReturnArrivalTime > 18 &&
                                tripReturnArrivalTime < 24;
                        }
                    } else {
                        timeCheckReturndArrival = true;
                    }
                } else {
                    timeCheckOnwardArrival = true;
                    timeCheckReturndArrival = true;
                }

                timeCheck =
                    timeCheckOnwardDepart &&
                    timeCheckOnwardArrival &&
                    timeCheckReturnDepart &&
                    timeCheckReturndArrival;
            } else {
                timeCheck = true;
            }
            //

            // layover filter
            let layoverTypecheck = false;
            if (
                layovertimeFilter.departure["0-5"] ||
                layovertimeFilter.departure["5-10"] ||
                layovertimeFilter.departure["10-15"] ||
                layovertimeFilter.departure["15-20"] ||
                layovertimeFilter.arrival["0-5"] ||
                layovertimeFilter.arrival["5-10"] ||
                layovertimeFilter.arrival["10-15"] ||
                layovertimeFilter.arrival["15-20"]
            ) {
                let layoverTripOnwardDepartTime =
                    item.FlightJourneys[0].FlightItems[0].TransitTime.Days *
                        24 *
                        60 +
                    item.FlightJourneys[0].FlightItems[0].TransitTime.Hours *
                        60 +
                    item.FlightJourneys[0].FlightItems[0].TransitTime.Minutes;

                let layoverTripArrivalDepartTime = 0;
                if (tripType === "RoundTrip") {
                    layoverTripArrivalDepartTime =
                        item.FlightJourneys[1].FlightItems[0].TransitTime.Days *
                            24 *
                            60 +
                        item.FlightJourneys[1].FlightItems[0].TransitTime
                            .Hours *
                            60 +
                        item.FlightJourneys[1].FlightItems[0].TransitTime
                            .Minutes;
                }

                let onwardCheck = false;
                let returnCheck = false;
                if (layoverTripOnwardDepartTime > 300) {
                }

                if (
                    layovertimeFilter.departure["0-5"] ||
                    layovertimeFilter.departure["5-10"] ||
                    layovertimeFilter.departure["10-15"] ||
                    layovertimeFilter.departure["15-20"]
                ) {
                    if (
                        layovertimeFilter.departure["0-5"] &&
                        layoverTripOnwardDepartTime > 0 &&
                        layoverTripOnwardDepartTime <= 300
                    ) {
                        onwardCheck =
                            layoverTripOnwardDepartTime > 0 &&
                            layoverTripOnwardDepartTime <= 300;
                    } else if (
                        layovertimeFilter.departure["5-10"] &&
                        layoverTripOnwardDepartTime > 300 &&
                        layoverTripOnwardDepartTime <= 600
                    ) {
                        onwardCheck =
                            layoverTripOnwardDepartTime > 300 &&
                            layoverTripOnwardDepartTime <= 600;
                    } else if (
                        layovertimeFilter.departure["10-15"] &&
                        layoverTripOnwardDepartTime > 600 &&
                        layoverTripOnwardDepartTime <= 900
                    ) {
                        onwardCheck =
                            layoverTripOnwardDepartTime > 600 &&
                            layoverTripOnwardDepartTime <= 900;
                    } else if (
                        layovertimeFilter.departure["15-20"] &&
                        layoverTripOnwardDepartTime > 900
                    ) {
                        onwardCheck = layoverTripOnwardDepartTime > 900;
                    }
                } else {
                    onwardCheck = true;
                }

                if (tripType === "RoundTrip") {
                    if (
                        layovertimeFilter.arrival["0-5"] ||
                        layovertimeFilter.arrival["5-10"] ||
                        layovertimeFilter.arrival["10-15"] ||
                        layovertimeFilter.arrival["15-20"]
                    ) {
                        if (
                            layovertimeFilter.arrival["0-5"] &&
                            layoverTripArrivalDepartTime > 0 &&
                            layoverTripArrivalDepartTime <= 300
                        ) {
                            returnCheck =
                                layoverTripArrivalDepartTime > 0 &&
                                layoverTripArrivalDepartTime <= 300;
                        } else if (
                            layovertimeFilter.arrival["5-10"] &&
                            layoverTripArrivalDepartTime > 300 &&
                            layoverTripArrivalDepartTime <= 600
                        ) {
                            returnCheck =
                                layoverTripArrivalDepartTime > 300 &&
                                layoverTripArrivalDepartTime <= 600;
                        } else if (
                            layovertimeFilter.arrival["10-15"] &&
                            layoverTripArrivalDepartTime > 600 &&
                            layoverTripArrivalDepartTime <= 900
                        ) {
                            returnCheck =
                                layoverTripArrivalDepartTime > 600 &&
                                layoverTripArrivalDepartTime <= 900;
                        } else if (
                            layovertimeFilter.arrival["15-20"] &&
                            layoverTripArrivalDepartTime > 900
                        ) {
                            returnCheck = layoverTripArrivalDepartTime > 900;
                        }
                    } else {
                        returnCheck = true;
                    }
                } else {
                    returnCheck = true;
                }
                layoverTypecheck = onwardCheck && returnCheck;

                //  ;
            } else {
                layoverTypecheck = true;
            }

            return (
                airlineCheck &&
                airLineMatrixCheck &&
                stopTypeCheck &&
                airportCheck &&
                fareTypeCheck &&
                priceFilterCheck &&
                timeCheck &&
                layoverTypecheck
                // airlineMatrixCheck
            );
        });

        let sortedResults = handleSort(tempResults);

        // Now groupedResults is sorted based on the "fastest" value

        let groupedResults = sortedResults.reduce((acc, obj) => {
            const key = obj.FareDetails.Total;

            if (!acc[key]) {
                acc[key] = [];
            }
            // Add object to list for given key's value
            acc[key].push(obj);
            return acc;
        }, {});
        setFilteredFlights(groupedResults);
    }

    function handleSort(results) {
        if (sortStatus.type == "price") {
            results.sort((a, b) => {
                return sortStatus.lowToHigh
                    ? a.FareDetails.Total - b.FareDetails.Total
                    : b.FareDetails.Total - a.FareDetails.Total;
            });
        } else if (sortStatus.type == "duration") {
            results.sort((a, b) => {
                const durationA =
                    a.TripDuration.Days * 24 * 60 +
                    a.TripDuration.Hours * 60 +
                    a.TripDuration.Minutes;
                const durationB =
                    b.TripDuration.Days * 24 * 60 +
                    b.TripDuration.Hours * 60 +
                    b.TripDuration.Minutes;

                return sortStatus.lowToHigh
                    ? durationA - durationB
                    : durationB - durationA;
            });
        } else if (sortStatus.type == "best") {
            results?.sort((a, b) => {
                const durationA =
                    a.TripDuration.Days * 24 * 60 +
                    a.TripDuration.Hours * 60 +
                    a.TripDuration.Minutes;
                const durationB =
                    b.TripDuration.Days * 24 * 60 +
                    b.TripDuration.Hours * 60 +
                    b.TripDuration.Minutes;

                const totalA = parseFloat(a.FareDetails.Total);
                const totalB = parseFloat(b.FareDetails.Total);

                if (durationA !== durationB) {
                    return sortStatus.lowToHigh && durationA - durationB;
                }

                // return sortStatus.lowToHigh ? totalA - totalB : totalB - totalA;
            });

            let bestValArr = results?.filter((e) => {
                return (
                    results[0].TripDuration.Days * 24 * 60 +
                        results[0]?.TripDuration.Hours * 60 +
                        results[0]?.TripDuration.Minutes ==
                    e?.TripDuration.Days * 24 * 60 +
                        e.TripDuration.Hours * 60 +
                        e.TripDuration.Minutes
                );
            });
            bestValArr?.sort((a, b) => {
                return a.FareDetails.Total - b.FareDetails.Total;
            });
            results = [bestValArr?.at(0)];
        }

        return results;
    }

    useEffect(() => {
        const allFlights = Object.values(filteredFlights).reduce(
            (flights, flightsArray) => {
                return flights.concat(flightsArray);
            },
            []
        );

        // Sort all flight objects based on trip duration
        allFlights.sort((a, b) => {
            const durationA =
                a.TripDuration.Days * 24 * 60 +
                a.TripDuration.Hours * 60 +
                a.TripDuration.Minutes;
            const durationB =
                b.TripDuration.Days * 24 * 60 +
                b.TripDuration.Hours * 60 +
                b.TripDuration.Minutes;

            return durationA - durationB;
        });

        let fastestPrice = allFlights[0] ? allFlights[0].FareDetails.Total : "";

        let bestvalsort = allFlights.sort((a, b) => {
            const durationA =
                a.TripDuration.Days * 24 * 60 +
                a.TripDuration.Hours * 60 +
                a.TripDuration.Minutes;
            const durationB =
                b.TripDuration.Days * 24 * 60 +
                b.TripDuration.Hours * 60 +
                b.TripDuration.Minutes;

            const totalA = parseFloat(a.FareDetails.Total);
            const totalB = parseFloat(b.FareDetails.Total);

            if (durationA !== durationB) {
                return sortStatus.lowToHigh && durationA - durationB;
            }
        });

        let bestPrice = parseFloat(
            bestvalsort?.at(0)?.FareDetails?.Total
        ).toFixed(
            results[0]?.FareDetails?.DecimalPoint
                ? results[0]?.FareDetails?.DecimalPoint
                : 3
        );

        let currency = allFlights[0] ? allFlights[0].FareDetails.Currency : "";
        setFastestPrice(fastestPrice);
        setBestValuePrice(bestPrice);
        setCurency(currency);
    }, [filteredFlights]);

    return (
        <div className="Fl_ChepestCoul">
            <div className="Fl_ChepestList">
                <ul className="">
                    <li
                        onClick={() => {
                            setSortStatus((prev) => ({
                                type: "price",
                                lowToHigh:
                                    prev.type == "price"
                                        ? !prev.lowToHigh
                                        : true,
                            })),
                                setSortTypeForActiveClass("price");
                            setActive({
                                cheepActive: true,
                                fastActive: false,
                                bestValueActive: false,
                            });
                        }}
                    >
                        {" "}
                        <a
                            className={`${active.cheepActive ? "active" : ""}`}
                            href="javascript:void(0);"
                        >
                            {" "}
                            <i className="Fl_ChepestIcon" />
                            <div className="cheap_text">
                                {" "}
                                <span>{lang.cheapest}</span>
                                <h3>
                                    <span>{currency}</span>{" "}
                                    <span>
                                        {parseFloat(pricefilter.lowest).toFixed(
                                            flightResults[0]?.FareDetails
                                                ?.DecimalPoint
                                                ? flightResults[0]?.FareDetails
                                                      ?.DecimalPoint
                                                : 3
                                        )}
                                    </span>
                                </h3>
                            </div>
                            <i className="Fl_Chepest_arrowIcon" />{" "}
                        </a>{" "}
                    </li>
                    <li
                        // onClick={() => {
                        //     //
                        //     fastestTripSort(
                        //         results,
                        //         isAscending,
                        //         setIsAscending,
                        //         filteredFlights,
                        //         setPriceFilter,
                        //         setFilteredFlights
                        //     );
                        //     setActive({
                        //         cheepActive: false,
                        //         fastActive: true,
                        //         bestValueActive: false,
                        //     });
                        // }}

                        onClick={() => {
                            setSortStatus((prev) => ({
                                type: "duration",
                                lowToHigh:
                                    prev.type == "duration"
                                        ? !prev.lowToHigh
                                        : true,
                            })),
                                setSortTypeForActiveClass("duration");
                            setActive({
                                cheepActive: false,
                                fastActive: true,
                                bestValueActive: false,
                            });
                        }}
                    >
                        {" "}
                        <a
                            className={`${active.fastActive ? "active" : ""}`}
                            href="javascript:void(0);"
                        >
                            {" "}
                            <i className="Fl_FastestIcon" />
                            <div className="cheap_text">
                                {" "}
                                <span>{lang.fastest}</span>
                                <h3>
                                    <span>{currency}</span>{" "}
                                    <span>
                                        {parseFloat(fastestPrice).toFixed(
                                            flightResults[0]?.FareDetails
                                                ?.DecimalPoint
                                                ? flightResults[0]?.FareDetails
                                                      ?.DecimalPoint
                                                : 3
                                        )}
                                    </span>
                                </h3>
                            </div>
                            <i className="Fl_Chepest_arrowIcon" />{" "}
                        </a>{" "}
                    </li>
                    <li
                        // onClick={() => {
                        //     bestValueSort(
                        //         results,
                        //         isAscending,
                        //         setIsAscending,
                        //         filteredFlights
                        //     );
                        //     setActive({
                        //         cheepActive: false,
                        //         fastActive: false,
                        //         bestValueActive: true,
                        //     });
                        // }}

                        onClick={() => {
                            setSortStatus((prev) => ({
                                type: "best",
                                // lowToHigh:
                                //     prev.type == "best"
                                //         ? !prev.lowToHigh
                                //         : true,
                            })),
                                setSortTypeForActiveClass("best");
                            setActive({
                                cheepActive: false,
                                fastActive: false,
                                bestValueActive: true,
                            });
                        }}
                        // onClick={()=>setBestFlightActive(true)}
                    >
                        {" "}
                        <a
                            className={`${
                                active.bestValueActive ? "active" : ""
                            }`}
                            href="javascript:void(0);"
                        >
                            {" "}
                            <i className="Fl_BestIcon" />
                            <div className="cheap_text">
                                {" "}
                                <span>{lang.best_value}</span>
                                <h3>
                                    <span>{currency}</span>{" "}
                                    <span>
                                        {parseFloat(bestValuePrice).toFixed(
                                            flightResults[0]?.FareDetails
                                                ?.DecimalPoint
                                                ? flightResults[0]?.FareDetails
                                                      ?.DecimalPoint
                                                : 3
                                        )}
                                    </span>
                                </h3>
                            </div>
                            {/* <i className="Fl_Chepest_arrowIcon" />{" "} */}
                        </a>{" "}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FlightSort;
