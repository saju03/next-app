import React, { useEffect, useRef, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Range from "rc-slider";
import { resetFilter } from "../services/FlightResult";
// import { directFlights, refundable, airlineAirport, layoverAirportFilter, layoverTimeFilter, takeofByTimeFilter } from "../services/FlightResult";
import {
    airlineAirport,
    layoverAirportFilter,
    setFlightFilterData,
} from "../services/FlightResult";
import { produce } from "immer";
const resourceKeys = window.resourceKeys;
const FlightFilter = ({
    filterRef,
    flightResults,
    filteredFlights,
    setFilteredFlights,
    flag,
    setFlag,
    fund,
    setFund,
    airline,
    setAirlines,
    airlineFlag,
    setAirlineFlag,
    airlinesCheck,
    setAirlinesCheck,
    layoverAirport,
    setlayoverAirport,
    layoverChecked,
    setLayoverChecked,
    layoverTimeList,
    setLayoverTimeList,
    setairlinecalc,
    setlayoverCalc,
    pricefilter,
    setPriceFilter,
    stopFilter,
    setStopFilter,
    timeFilter,
    setTimeFilter,
    setLayoverTimeFilter,
    airlinesSorted,
    sortedName,
    setSortedName,
    tripType,
    layovertimeFilter,
    filterState,
    setFilterState,
    setAirlineArray,
    selectedStopTab, 
    setSelectedStopTab
}) => {

    
    const [place, setPlace] = useState({
        departure: "",
        arrival: "",
        departureCode: "",
        arrivalCode: "",
    });

    const [isOpenFilterTabs, setIsOpenFilterTabs] = useState({
        stopTab: false,
        fareTypeTab: false,
        priceTab: false,
        layoverTimeTab: false,
        layoverAirportTab: false,
        timeTab: false,
        airlinesTab: false,
    });
    
    
    


    useEffect(() => {
        let newItem = flightResults[0];
        let departurePlace =
            newItem.FlightJourneys[0].FlightItems[0].Departure.CityName[window.culture];
        let departureCode =
            newItem.FlightJourneys[0].FlightItems[0].Departure.AirportCode;
        let arrivalPlace =
            newItem.FlightJourneys[0].FlightItems[
                newItem.FlightJourneys[0].FlightItems.length - 1
            ].Arrival.CityName[window.culture]
        let arrivalCode =
            newItem.FlightJourneys[0].FlightItems[
                newItem.FlightJourneys[0].FlightItems.length - 1
            ].Arrival.AirportCode;
        setPlace((prevPlace) => ({
            ...prevPlace,
            departure: departurePlace,
            arrival: arrivalPlace,
            departureCode: departureCode,
            arrivalCode: arrivalCode,
        }));
    }, []);
    const [time, setTime] = useState([]);
    const [timeHour, setTimeHour] = useState([]);

    function handleTimeFilter(timeSeg, type, direction) {
        
        setTimeFilter((prvState) => {
            return produce(prvState, (draft) => {
                draft[type][direction][timeSeg] =
                    !prvState[type][direction][timeSeg];
            });
        });
    }
    const lang = JSON.parse(window.language)[0];
    //

    function handleLayoverTimeFilter(timeSeg, type) {
        setLayoverTimeFilter((prvState) => {
            return produce(prvState, (draft) => {
                draft[type][timeSeg] = !prvState[type][timeSeg];
            });
        });
    }







    // const handleFilterReset = (flight) => {
    //     setFilteredFlights(flight);
    // }
    return (
        <>
            <div className="col-lg-3"  >
                <div
                    className={`package_filter ${filterState ? "active" : ""}`}
                    ref={filterRef}
               >
                    {" "}
                    <span
                        className="filterClose"
                        onClick={() => {
                            setFilterState(false);
                            document.body.classList.remove("FilternoScroll");
                        }}
                    />
                    <div className="pack_FilterMain">
                        <div className="Fl_filter_hd">
                            <h2 className="">
                                <img
                                    src={`${base_url}images/filter_icon.svg`}
                                />{" "}
                                <span>{lang.flight_filter}</span>
                            </h2>
                            <button
                                className="Filtr_reset"
                                onClick={() =>
                                    resetFilter(
                                        flightResults,
                                        setFilteredFlights,
                                        filteredFlights,
                                        setStopFilter,
                                        setFund,
                                        setPriceFilter,
                                        pricefilter,
                                        setlayoverAirport,
                                        layoverAirport,
                                        setAirlines,
                                        setTimeFilter,
                                        setLayoverTimeFilter,
                                        setAirlineArray
                                    )
                                }
                            >
                                {lang.reset}
                            </button>
                        </div>


                        <div className="Filterbox">
                            <div className="Filterhead ">
                                <div
                                    onClick={() =>
                                        setIsOpenFilterTabs({
                                            ...isOpenFilterTabs,
                                            airlinesTab:
                                                !isOpenFilterTabs.airlinesTab,
                                        })
                                    }
                                    className="FilterTitle d-flex justify-content-between align-items-center"
                                >
                                    {" "}
                                    <span>{lang.airlines}</span>
                                    <span>
                                        <i
                                            className={`${
                                                isOpenFilterTabs.airlinesTab
                                                    ? "icon_uparrow"
                                                    : "icon_downarrow"
                                            } `}
                                        ></i>
                                    </span>{" "}
                                </div>
                            </div>
                            <div
                                className={`FilterContent packFilterType ${
                                    isOpenFilterTabs.airlinesTab ? "d-none" : ""
                                }`}
                            >
                                <ul>
                                    {airline.map((item, index) => (
                                        <li key={index}>
                                            <input
                                                type="checkbox"
                                                id={`ar-${index}`}
                                                checked={
                                                    airline[index].isChecked
                                                }
                                            />
                                            <label
                                                htmlFor={`ar-${index}`}
                                                onClick={() =>
                                                    setAirlines((prvState) => {
                                                        return produce(
                                                            prvState,
                                                            (draft) => {
                                                                draft[
                                                                    index
                                                                ].isChecked =
                                                                    !prvState[
                                                                        index
                                                                    ].isChecked;
                                                            }
                                                        );
                                                    })
                                                }
                                            >
                                                {item.name}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>



                        <div className="Filterbox">
                            <div className="Filterhead ">
                                <div
                                    onClick={() =>
                                        setIsOpenFilterTabs({
                                            ...isOpenFilterTabs,
                                            stopTab: !isOpenFilterTabs.stopTab,
                                        })
                                    }
                                    className="FilterTitle d-flex justify-content-between align-items-center"
                                >
                                    {" "}
                                    <span>{lang.stops}</span>
                                    <span>
                                        <i
                                            className={`${
                                                isOpenFilterTabs.stopTab
                                                    ? "icon_uparrow"
                                                    : "icon_downarrow"
                                            } `}
                                        ></i>
                                    </span>{" "}
                                </div>
                            </div>
                            <div
                                className={`FilterContent packFilterType ${
                                    isOpenFilterTabs.stopTab ? "d-none" : ""
                                }`}
                            >
                                <div className="row">
                                    <div className="col-12 col-md-12 col-lg-12">
                                        <ul
                                            className="nav nav-tabs nav-fill"
                                            role="tablist"
                                        >
                                            <li
                                                className="nav-item"
                                                onClick={() => {
                                                    setSelectedStopTab(
                                                        "onward"
                                                    );
                                                }}
                                            >
                                                {" "}
                                                <a
                                                    className={`nav-link ${
                                                        selectedStopTab ==
                                                        "onward"
                                                            ? "active "
                                                            : ""
                                                    }`}
                                                    data-toggle="tab"
                                                    href="#filteronward"
                                                    role="tab"
                                                    aria-controls="filteronward"
                                                    aria-selected="true"
                                                >
                                                    {" "}
                                                    <span>
                                                        {lang.onward}
                                                    </span>{" "}
                                                </a>{" "}
                                            </li>
                                            {tripType !== "OneWay" &&
                                                tripType !== "MultiCity" && (
                                                    <li
                                                        className="nav-item"
                                                        onClick={() => {
                                                            setSelectedStopTab(
                                                                "return"
                                                            );
                                                        }}
                                                    >
                                                        {" "}
                                                        <a
                                                            className={`nav-link ${
                                                                selectedStopTab ==
                                                                "return"
                                                                    ? "active "
                                                                    : ""
                                                            }`}
                                                            data-toggle="tab"
                                                            href="#filterreturn"
                                                            role="brandedtab2"
                                                            aria-controls="filterreturn"
                                                            aria-selected="false"
                                                        >
                                                            {" "}
                                                            <span>
                                                                {lang.return}
                                                            </span>{" "}
                                                        </a>{" "}
                                                    </li>
                                                )}
                                        </ul>
                                    </div>
                                </div>
                                {selectedStopTab == "onward" ? (
                                    <div className="tab-content mt-3">
                                        <ul>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    id="stop1"
                                                   
                                                    checked={
                                                        stopFilter.onward
                                                            .directFlight
                                                    }
                                                />
                                                <label for="stop1" onClick={() =>
                                                        setStopFilter(
                                                            (prevState) =>
                                                                produce(
                                                                    prevState,
                                                                    (draft) => {
                                                                        draft.onward.directFlight =
                                                                            !draft
                                                                                .onward
                                                                                .directFlight;
                                                                    }
                                                                )
                                                        )
                                                    }>
                                                    {lang.Direct_flights_only}{" "}
                                                </label>
                                            </li>
                                            <li >
                                                <input
                                                    type="checkbox"
                                                    id="stop2"
                                                   
                                                    checked={
                                                        stopFilter.onward
                                                            .oneStop
                                                    }
                                                />
                                                <label for="stop2" onClick={() =>
                                                        setStopFilter(
                                                            (prevState) =>
                                                                produce(
                                                                    prevState,
                                                                    (draft) => {
                                                                        draft.onward.oneStop =
                                                                            !draft
                                                                                .onward
                                                                                .oneStop;
                                                                    }
                                                                )
                                                        )
                                                    }>
                                                    1 {lang.stop}{" "}
                                                </label>
                                            </li>
                                            <li >
                                                <input
                                                    type="checkbox"
                                                    id="stop3"
                                                   
                                                    checked={
                                                        stopFilter.onward
                                                            .onePlusStop
                                                    }
                                                />
                                                <label for="stop3" onClick={() =>
                                                        setStopFilter(
                                                            (prevState) =>
                                                                produce(
                                                                    prevState,
                                                                    (draft) => {
                                                                        draft.onward.onePlusStop =
                                                                            !draft
                                                                                .onward
                                                                                .onePlusStop;
                                                                    }
                                                                )
                                                        )
                                                    }>
                                                    1+ {lang.stop}{" "}
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                ) : (
                                    <div className="tab-content mt-3">
                                        <ul>
                                            <li  >
                                                <input
                                                    type="checkbox"
                                                    id="stop1"
                                                  
                                                    checked={
                                                        stopFilter.return
                                                            .directFlight
                                                    }
                                                />
                                                <label for="stop1" onClick={() =>
                                                        setStopFilter(
                                                            (prevState) =>
                                                                produce(
                                                                    prevState,
                                                                    (draft) => {
                                                                        draft.return.directFlight =
                                                                            !draft
                                                                                .return
                                                                                .directFlight;
                                                                    }
                                                                )
                                                        )
                                                    }>
                                                    {lang.Direct_flights_only}{" "}
                                                </label>
                                            </li>
                                            <li  >
                                                <input
                                                    type="checkbox"
                                                    id="stop2"
                                                  
                                                    checked={
                                                        stopFilter.return
                                                            .oneStop
                                                    }
                                                />
                                                <label for="stop2" onClick={() =>
                                                        setStopFilter(
                                                            (prevState) =>
                                                                produce(
                                                                    prevState,
                                                                    (draft) => {
                                                                        draft.return.oneStop =
                                                                            !draft
                                                                                .return
                                                                                .oneStop;
                                                                    }
                                                                )
                                                        )
                                                    }>
                                                    1 {lang.stop}{" "}
                                                </label>
                                            </li>
                                            <li >
                                                <input
                                                    type="checkbox"
                                                    id="stop3"
                                                   
                                                    checked={
                                                        stopFilter.return
                                                            .onePlusStop
                                                    }
                                                />
                                                <label for="stop3" onClick={() =>
                                                        setStopFilter(
                                                            (prevState) =>
                                                                produce(
                                                                    prevState,
                                                                    (draft) => {
                                                                        draft.return.onePlusStop =
                                                                            !draft
                                                                                .return
                                                                                .onePlusStop;
                                                                    }
                                                                )
                                                        )
                                                    }>
                                                    1+ {lang.stop}{" "}
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="Filterbox">
                            <div className="Filterhead ">
                                <div
                                    onClick={() =>
                                        setIsOpenFilterTabs({
                                            ...isOpenFilterTabs,
                                            fareTypeTab:
                                                !isOpenFilterTabs.fareTypeTab,
                                        })
                                    }
                                    className="FilterTitle d-flex justify-content-between align-items-center"
                                >
                                    {" "}
                                    <span>{lang.fare_type}</span>
                                    <span>
                                        <i
                                            className={`${
                                                isOpenFilterTabs.fareTypeTab
                                                    ? "icon_uparrow"
                                                    : "icon_downarrow"
                                            } `}
                                        ></i>
                                    </span>{" "}
                                </div>
                            </div>
                            <div
                                className={`FilterContent packFilterType ${
                                    isOpenFilterTabs.fareTypeTab ? "d-none" : ""
                                }`}
                            >
                                <ul>
                                    <li >
                                        <input
                                           
                                            checked={fund.refundable}
                                            type="checkbox"
                                            id="Refund1"
                                        />
                                        <label htmlFor="Refund1" onClick={() =>
                                                setFund((prevState) =>
                                                    produce(
                                                        prevState,
                                                        (draft) => {
                                                            draft.refundable =
                                                                !draft.refundable;
                                                        }
                                                    )
                                                )
                                            }>
                                            {lang.flight_result_refundable}{" "}
                                        </label>
                                    </li>
                                    <li >
                                        <input
                                           
                                            checked={fund.nonRefundable}
                                            type="checkbox"
                                            id="Refund2"
                                        />
                                        <label htmlFor="Refund2" onClick={() =>
                                                setFund((prevState) =>
                                                    produce(
                                                        prevState,
                                                        (draft) => {
                                                            draft.nonRefundable =
                                                                !draft.nonRefundable;
                                                        }
                                                    )
                                                )
                                            }>
                                            {lang.flight_result_non_refundable}{" "}
                                        </label>
                                    </li>
                                    <li >
                                        <input
                                           
                                            checked={fund.refundableWithcharge}
                                            type="checkbox"
                                            id="Refund3"
                                        />
                                        <label htmlFor="Refund3" onClick={() =>
                                                setFund((prevState) =>
                                                    produce(
                                                        prevState,
                                                        (draft) => {
                                                            draft.refundableWithcharge =
                                                                !draft.refundableWithcharge;
                                                        }
                                                    )
                                                )
                                            }>
                                            {
                                                lang.flight_result_refundable_with_charge
                                            }{" "}
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="Filterbox">
                            <div className="Filterhead ">
                                <div
                                    onClick={() =>
                                        setIsOpenFilterTabs({
                                            ...isOpenFilterTabs,
                                            priceTab:
                                                !isOpenFilterTabs.priceTab,
                                        })
                                    }
                                    className="FilterTitle d-flex justify-content-between align-items-center"
                                >
                                    {" "}
                                    <span>{lang.price}</span>
                                    <span>
                                        <i
                                            className={`${
                                                isOpenFilterTabs.priceTab
                                                    ? "icon_uparrow"
                                                    : "icon_downarrow"
                                            } `}
                                        ></i>
                                    </span>{" "}
                                </div>
                            </div>
                            <div
                                className={`FilterContent ${
                                    isOpenFilterTabs.priceTab ? "d-none" : ""
                                }`}
                            >
                                <div className="priceFilterVlaue d-flex justify-content-between">
                                    <p className="slide_val">
                                        <span>{window.currency}</span>{" "}
                                        <span> {pricefilter.selectedLow}</span>
                                    </p>
                                    <p className="slide_val">
                                        <span>{window.currency}</span>{" "}
                                        <span> {pricefilter.selectedHigh}</span>
                                    </p>
                                </div>
                                <Slider
                                    range
                                    min={pricefilter.lowest}
                                    max={pricefilter.highest}
                                    defaultValue={[
                                        pricefilter.lowest,
                                        pricefilter.highest,
                                    ]}
                                    value={[
                                        pricefilter.selectedLow,
                                        pricefilter.selectedHigh,
                                    ]}
                                    step={0.01}
                                    onChange={(abc) => {
                                        setPriceFilter({...pricefilter ,selectedLow:abc[0],selectedHigh:abc[1] });
                                      
                                     
                                    }}
                                    allowCross={
                                        pricefilter.selectedLow &&
                                        pricefilter.selectedHigh
                                    }
                                />
                                {/* <div className="range_ui_block">
                                    <div className="clearfix"></div>
                                    <div className="slider-range"></div>
                                    <div className="clearfix"></div>
                                </div> */}
                            </div>
                        </div>

                        <div className="Filterbox">
                            <div className="Filterhead ">
                                <div
                                    onClick={() =>
                                        setIsOpenFilterTabs({
                                            ...isOpenFilterTabs,
                                            layoverTimeTab:
                                                !isOpenFilterTabs.layoverTimeTab,
                                        })
                                    }
                                    className="FilterTitle d-flex justify-content-between align-items-center"
                                >
                                    {" "}
                                    <span>{lang.layover_time}</span>
                                    <span>
                                        <i
                                            className={`${
                                                isOpenFilterTabs.layoverTimeTab
                                                    ? "icon_uparrow"
                                                    : "icon_downarrow"
                                            } `}
                                        ></i>
                                    </span>{" "}
                                </div>
                            </div>
                            <div
                                className={`FilterContent ${
                                    isOpenFilterTabs.layoverTimeTab
                                        ? "d-none"
                                        : ""
                                }`}
                            >
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
                                                    href="#timeonward"
                                                    role="tab"
                                                    aria-controls="timeonward"
                                                    aria-selected="true"
                                                >
                                                    {" "}
                                                    <span>
                                                        {lang.onward}
                                                    </span>{" "}
                                                </a>{" "}
                                            </li>
                                            {tripType !== "OneWay" &&
                                                tripType !== "MultiCity" && (
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
                                                            <span>
                                                                {lang.return}
                                                            </span>{" "}
                                                        </a>{" "}
                                                    </li>
                                                )}
                                        </ul>
                                        <div className="tab-content mt-3">
                                            <div
                                                className="tab-pane active show"
                                                id="timeonward"
                                                role="tabpanel"
                                                aria-labelledby="timeonward-tab"
                                            >
                                                <div className="d-flex flex-wrap filterDuration">
                                                    <div
                                                        className={`box1 ${
                                                            layovertimeFilter[
                                                                "departure"
                                                            ]["0-5"]
                                                                ? "active"
                                                                : ""
                                                        }`}
                                                        onClick={() =>
                                                            handleLayoverTimeFilter(
                                                                "0-5",
                                                                "departure"
                                                            )
                                                        }
                                                        checked={
                                                            layovertimeFilter[
                                                                "departure"
                                                            ]["0-5"]
                                                        }
                                                    >
                                                        0{resourceKeys.H} - 5{resourceKeys.H}{" "}
                                                    </div>
                                                    <div
                                                        className={`box1 ${
                                                            layovertimeFilter[
                                                                "departure"
                                                            ]["5-10"]
                                                                ? "active"
                                                                : ""
                                                        }`}
                                                        onClick={() =>
                                                            handleLayoverTimeFilter(
                                                                "5-10",
                                                                "departure"
                                                            )
                                                        }
                                                        checked={
                                                            layovertimeFilter[
                                                                "departure"
                                                            ]["5-10"]
                                                        }
                                                    >
                                                        5{resourceKeys.H} - 10{resourceKeys.H}
                                                    </div>
                                                    <div
                                                        className={`box1 ${
                                                            layovertimeFilter[
                                                                "departure"
                                                            ]["10-15"]
                                                                ? "active"
                                                                : ""
                                                        }`}
                                                        onClick={() =>
                                                            handleLayoverTimeFilter(
                                                                "10-15",
                                                                "departure"
                                                            )
                                                        }
                                                        checked={
                                                            layovertimeFilter[
                                                                "departure"
                                                            ]["10-15"]
                                                        }
                                                    >
                                                        10{resourceKeys.H} - 15{resourceKeys.H}
                                                    </div>
                                                    <div
                                                        className={`box1 ${
                                                            layovertimeFilter[
                                                                "departure"
                                                            ]["15-20"]
                                                                ? "active"
                                                                : ""
                                                        }`}
                                                        onClick={() =>
                                                            handleLayoverTimeFilter(
                                                                "15-20",
                                                                "departure"
                                                            )
                                                        }
                                                        checked={
                                                            layovertimeFilter[
                                                                "departure"
                                                            ]["15-20"]
                                                        }
                                                    >
                                                        15 +
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane"
                                                id="timereturn"
                                                role="tabpanel"
                                                aria-labelledby="timereturn-tab"
                                            >
                                                <div className="d-flex flex-wrap filterDuration">
                                                    <div
                                                        className={`box1 ${
                                                            layovertimeFilter[
                                                                "arrival"
                                                            ]["0-5"]
                                                                ? "active"
                                                                : ""
                                                        }`}
                                                        onClick={() =>
                                                            handleLayoverTimeFilter(
                                                                "0-5",
                                                                "arrival"
                                                            )
                                                        }
                                                        checked={
                                                            layovertimeFilter[
                                                                "arrival"
                                                            ]["0-5"]
                                                        }
                                                    >
                                                        0{resourceKeys.H} - 5{resourceKeys.H}{" "}
                                                    </div>
                                                    <div
                                                        className={`box1 ${
                                                            layovertimeFilter[
                                                                "arrival"
                                                            ]["5-10"]
                                                                ? "active"
                                                                : ""
                                                        }`}
                                                        onClick={() =>
                                                            handleLayoverTimeFilter(
                                                                "5-10",
                                                                "arrival"
                                                            )
                                                        }
                                                        checked={
                                                            layovertimeFilter[
                                                                "arrival"
                                                            ]["5-10"]
                                                        }
                                                    >
                                                        5{resourceKeys.H} - 10{resourceKeys.H}
                                                    </div>
                                                    <div
                                                        className={`box1 ${
                                                            layovertimeFilter[
                                                                "arrival"
                                                            ]["10-15"]
                                                                ? "active"
                                                                : ""
                                                        }`}
                                                        onClick={() =>
                                                            handleLayoverTimeFilter(
                                                                "10-15",
                                                                "arrival"
                                                            )
                                                        }
                                                        checked={
                                                            layovertimeFilter[
                                                                "arrival"
                                                            ]["10-15"]
                                                        }
                                                    >
                                                        10{resourceKeys.H} - 15{resourceKeys.H}
                                                    </div>
                                                    <div
                                                        className={`box1 ${
                                                            layovertimeFilter[
                                                                "arrival"
                                                            ]["15-20"]
                                                                ? "active"
                                                                : ""
                                                        }`}
                                                        onClick={() =>
                                                            handleLayoverTimeFilter(
                                                                "15-20",
                                                                "arrival"
                                                            )
                                                        }
                                                        checked={
                                                            layovertimeFilter[
                                                                "arrival"
                                                            ]["15-20"]
                                                        }
                                                    >
                                                        15 +
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Filterbox">
                            <div className="Filterhead ">
                                <div
                                    onClick={() =>
                                        setIsOpenFilterTabs({
                                            ...isOpenFilterTabs,
                                            layoverAirportTab:
                                                !isOpenFilterTabs.layoverAirportTab,
                                        })
                                    }
                                    className="FilterTitle d-flex justify-content-between align-items-center"
                                >
                                    {" "}
                                    <span>{lang.layover_airport}</span>
                                    <span>
                                        <i
                                            className={`${
                                                isOpenFilterTabs.layoverAirportTab
                                                    ? "icon_uparrow"
                                                    : "icon_downarrow"
                                            } `}
                                        ></i>
                                    </span>{" "}
                                </div>
                            </div>
                            <div
                                className={`FilterContent packFilterType ${
                                    isOpenFilterTabs.layoverAirportTab
                                        ? "d-none"
                                        : ""
                                }`}
                            >
                                <ul>
                                    {layoverAirport.map((item, index) => (
                                        <li key={index}>
                                            <input
                                                type="checkbox"
                                                id={`la-${index}`}
                                                checked={
                                                    layoverAirport[index]
                                                        .isChecked
                                                }
                                            />
                                            <label
                                                htmlFor={`la-${index}`}
                                                onClick={() =>
                                                    setlayoverAirport(
                                                        (prvState) => {
                                                            return produce(
                                                                prvState,
                                                                (draft) => {
                                                                    draft[
                                                                        index
                                                                    ].isChecked =
                                                                        !prvState[
                                                                            index
                                                                        ]
                                                                            .isChecked;
                                                                }
                                                            );
                                                        }
                                                    )
                                                }
                                            >
                                                {item.name}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="Filterbox">
                            <div className="Filterhead ">
                                <div
                                    onClick={() =>
                                        setIsOpenFilterTabs({
                                            ...isOpenFilterTabs,
                                            timeTab: !isOpenFilterTabs.timeTab,
                                        })
                                    }
                                    className="FilterTitle d-flex justify-content-between align-items-center"
                                >
                                    {" "}
                                    <span>{lang.time}</span>
                                    <span>
                                        <i
                                            className={`${
                                                isOpenFilterTabs.timeTab
                                                    ? "icon_uparrow"
                                                    : "icon_downarrow"
                                            } `}
                                        ></i>
                                    </span>{" "}
                                </div>
                            </div>
                            <div
                                className={`FilterContent ${
                                    isOpenFilterTabs.timeTab ? "d-none" : ""
                                }`}
                            >
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
                                                    href="#timesonward"
                                                    role="tab"
                                                    aria-controls="timesonward"
                                                    aria-selected="true"
                                                >
                                                    {" "}
                                                    <span
                                                        onClick={() => {
                                                            setTimeFilter(
                                                                (prevState) =>
                                                                    produce(
                                                                        prevState,
                                                                        (
                                                                            draft
                                                                        ) => {
                                                                            draft.type =
                                                                                "onward";
                                                                        }
                                                                    )
                                                            );
                                                        }}
                                                    >
                                                        {lang.flight_departure}
                                                    </span>{" "}
                                                </a>{" "}
                                            </li>
                                            {tripType !== "OneWay" &&
                                                tripType !== "MultiCity" && (
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
                                                            <span
                                                                onClick={() => {
                                                                    setTimeFilter(
                                                                        (
                                                                            prevState
                                                                        ) =>
                                                                            produce(
                                                                                prevState,
                                                                                (
                                                                                    draft
                                                                                ) => {
                                                                                    draft.type =
                                                                                        "return";
                                                                                }
                                                                            )
                                                                    );
                                                                }}
                                                            >
                                                                {lang.arrival}
                                                            </span>{" "}
                                                        </a>{" "}
                                                    </li>
                                                )}
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
                                                        <h4>
                                                            {lang.take_off}{" "}
                                                            {place.departure} (
                                                            {
                                                                place.departureCode
                                                            }
                                                            )
                                                        </h4>
                                                        <ul className="d-flex">
                                                            <li  onClick={(e) =>

                                                           { e.stopPropagation()
                                                                        handleTimeFilter(
                                                                            "0-6",
                                                                            "departure",
                                                                            "originDeparture"
                                                                        )}
                                                                    }>
                                                                <input
                                                                    type="checkbox"
                                                                    id="Dtime1"
                                                                   
                                                                    checked={
                                                                        timeFilter[
                                                                            "departure"
                                                                        ][
                                                                            "originDeparture"
                                                                        ]["0-6"]
                                                                    }
                                                                />
                                                                <label for="Dtime1" onClick={(e) =>{
                                                                     
                                                                        handleTimeFilter(
                                                                            "0-6",
                                                                            "departure",
                                                                            "originDeparture"
                                                                        )}
                                                                    }>
                                                                    {" "}
                                                                    <span className="Filter_stop_icon1"></span>{" "}
                                                                    <span>
                                                                        {" "}
                                                                        00 - 06{" "}
                                                                    </span>{" "}
                                                                </label>
                                                            </li>
                                                            <li onClick={(e) =>{
                                                                e.stopPropagation()
                                                                        handleTimeFilter(
                                                                            "6-12",
                                                                            "departure",
                                                                            "originDeparture"
                                                                        )}  }>
                                                                <input
                                                                    type="checkbox"
                                                                    id="Dtime2"
                                                                    
                                                                  
                                                                    checked={
                                                                        timeFilter[
                                                                            "departure"
                                                                        ][
                                                                            "originDeparture"
                                                                        ][
                                                                            "6-12"
                                                                        ]
                                                                    }
                                                                />
                                                                <label for="Dtime2" onClick={(e) =>{
                                                                     
                                                                        handleTimeFilter(
                                                                            "6-12",
                                                                            "departure",
                                                                            "originDeparture"
                                                                        )}  }>
                                                                    {" "}
                                                                    <span className="Filter_stop_icon2"></span>{" "}
                                                                    <span>
                                                                        {" "}
                                                                        06 - 12{" "}
                                                                    </span>{" "}
                                                                </label>
                                                            </li>
                                                            <li  onClick={(e) =>{
                                                                e.stopPropagation()
                                                                        handleTimeFilter(
                                                                            "12-18",
                                                                            "departure",
                                                                            "originDeparture"
                                                                        )}
                                                                    }>
                                                                <input
                                                                    type="checkbox"
                                                                    id="Dtime3"
                                                                   
                                                                    checked={
                                                                        timeFilter[
                                                                            "departure"
                                                                        ][
                                                                            "originDeparture"
                                                                        ][
                                                                            "12-18"
                                                                        ]
                                                                    }
                                                                />
                                                                <label for="Dtime3"  onClick={(e) =>{
                                                                     
                                                                        handleTimeFilter(
                                                                            "12-18",
                                                                            "departure",
                                                                            "originDeparture"
                                                                        )}
                                                                    }>
                                                                    {" "}
                                                                    <span className="Filter_stop_icon3"></span>{" "}
                                                                    <span>
                                                                        {" "}
                                                                        12 - 18{" "}
                                                                    </span>{" "}
                                                                </label>
                                                            </li>
                                                            <li  onClick={(e) =>{
                                                                e.stopPropagation()
                                                                        handleTimeFilter(
                                                                            "18-23",
                                                                            "departure",
                                                                            "originDeparture"
                                                                        )}
                                                                    }>
                                                                <input
                                                                    type="checkbox"
                                                                    id="Dtime4"
                                                                   
                                                                    checked={
                                                                        timeFilter[
                                                                            "departure"
                                                                        ][
                                                                            "originDeparture"
                                                                        ][
                                                                            "18-23"
                                                                        ]
                                                                    }
                                                                />
                                                                <label for="Dtime4" onClick={(e) =>{
                                                                     
                                                                        handleTimeFilter(
                                                                            "18-23",
                                                                            "departure",
                                                                            "originDeparture"
                                                                        )}
                                                                    }>
                                                                    {" "}
                                                                    <span className="Filter_stop_icon4"></span>{" "}
                                                                    <span>
                                                                        {" "}
                                                                        18 - 24{" "}
                                                                    </span>{" "}
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {tripType ==
                                                        "RoundTrip" && (
                                                        <div className="departArrivTimeFiltr mb-0">
                                                            <h4>
                                                                {lang.take_off}{" "}
                                                                {place.arrival}{" "}
                                                                (
                                                                {
                                                                    place.arrivalCode
                                                                }
                                                                )
                                                            </h4>
                                                            <ul className="d-flex">
                                                                <li onClick={(e) =>{
                                                                    e.stopPropagation()
                                                                            handleTimeFilter(
                                                                                "0-6",
                                                                                "departure",
                                                                                "destinationDeparture"
                                                                            )}
                                                                        }>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="D2time1"
                                                                        
                                                                        checked={
                                                                            timeFilter[
                                                                                "departure"
                                                                            ][
                                                                                "destinationDeparture"
                                                                            ][
                                                                                "0-6"
                                                                            ]
                                                                        }
                                                                    />
                                                                    <label for="D2time1" onClick={(e) =>{
                                                                         
                                                                            handleTimeFilter(
                                                                                "0-6",
                                                                                "departure",
                                                                                "destinationDeparture"
                                                                            )}
                                                                        }>
                                                                        {" "}
                                                                        <span className="Filter_stop_icon1"></span>{" "}
                                                                        <span>
                                                                            {" "}
                                                                            00 -
                                                                            06{" "}
                                                                        </span>{" "}
                                                                    </label>
                                                                </li>
                                                                <li onClick={(e) =>{
                                                                    e.stopPropagation()
                                                                            handleTimeFilter(
                                                                                "6-12",
                                                                                "departure",
                                                                                "destinationDeparture"
                                                                            )}
                                                                        }>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="D2time2"
                                                                        
                                                                        checked={
                                                                            timeFilter[
                                                                                "departure"
                                                                            ][
                                                                                "destinationDeparture"
                                                                            ][
                                                                                "6-12"
                                                                            ]
                                                                        }
                                                                    />
                                                                    <label for="D2time2" onClick={(e) =>{
                                                                         
                                                                            handleTimeFilter(
                                                                                "6-12",
                                                                                "departure",
                                                                                "destinationDeparture"
                                                                            )}
                                                                        }>
                                                                        {" "}
                                                                        <span className="Filter_stop_icon2"></span>{" "}
                                                                        <span>
                                                                            {" "}
                                                                            06 -
                                                                            12{" "}
                                                                        </span>{" "}
                                                                    </label>
                                                                </li>
                                                                <li   onClick={(e) =>{
                                                                    e.stopPropagation()
                                                                            handleTimeFilter(
                                                                                "12-18",
                                                                                "departure",
                                                                                "destinationDeparture"
                                                                            )}
                                                                        }> 
                                                                    <input
                                                                        type="checkbox"
                                                                        id="D2time3"
                                                                      
                                                                        checked={
                                                                            timeFilter[
                                                                                "departure"
                                                                            ][
                                                                                "destinationDeparture"
                                                                            ][
                                                                                "12-18"
                                                                            ]
                                                                        }
                                                                    />
                                                                    <label for="D2time3"  onClick={(e) =>{
                                                                         
                                                                            handleTimeFilter(
                                                                                "12-18",
                                                                                "departure",
                                                                                "destinationDeparture"
                                                                            )}
                                                                        }>
                                                                        {" "}
                                                                        <span className="Filter_stop_icon3"></span>{" "}
                                                                        <span>
                                                                            {" "}
                                                                            12 -
                                                                            18{" "}
                                                                        </span>{" "}
                                                                    </label>
                                                                </li>
                                                                <li  onClick={(e) =>{
                                                                            handleTimeFilter(
                                                                                "18-23",
                                                                                "departure",
                                                                                "destinationDeparture"
                                                                            )}
                                                                        }>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="D2time4"
                                                                       
                                                                        checked={
                                                                            timeFilter[
                                                                                "departure"
                                                                            ][
                                                                                "destinationDeparture"
                                                                            ][
                                                                                "18-23"
                                                                            ]
                                                                        }
                                                                    />
                                                                    <label for="D2time4" onClick={(e) =>{
                                                                         
                                                                            handleTimeFilter(
                                                                                "18-23",
                                                                                "departure",
                                                                                "destinationDeparture"
                                                                            )}
                                                                        }>
                                                                        {" "}
                                                                        <span className="Filter_stop_icon4"></span>{" "}
                                                                        <span>
                                                                            {" "}
                                                                            18 -
                                                                            24{" "}
                                                                        </span>{" "}
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane"
                                                id="timesreturn"
                                                role="tabpanel"
                                                aria-labelledby="timereturn-tab"
                                            >
                                                <div className="DepartTime Tab-condent-1">
                                                    <div className="departArrivTimeFiltr mb-3">
                                                        <h4>
                                                            {lang.arrival}{" "}
                                                            {place.arrival} (
                                                            {place.arrivalCode})
                                                        </h4>
                                                        <ul className="d-flex">
                                                            <li   onClick={(e) =>{
                                                                e.stopPropagation()
                                                                        handleTimeFilter(
                                                                            "0-6",
                                                                            "arrival",
                                                                            "originArrival"
                                                                        )}
                                                                    }>
                                                                <input
                                                                    type="checkbox"
                                                                    id="D3time1"
                                                                  
                                                                    checked={
                                                                        timeFilter[
                                                                            "arrival"
                                                                        ][
                                                                            "originArrival"
                                                                        ]["0-6"]
                                                                    }
                                                                />
                                                                <label for="D3time1" onClick={(e) =>{
                                                                     
                                                                        handleTimeFilter(
                                                                            "0-6",
                                                                            "arrival",
                                                                            "originArrival"
                                                                        )}
                                                                    }>
                                                                    {" "}
                                                                    <span className="Filter_stop_icon1"></span>{" "}
                                                                    <span>
                                                                        {" "}
                                                                        00 - 06{" "}
                                                                    </span>{" "}
                                                                </label>
                                                            </li>
                                                            <li    onClick={(e) =>{
                                                                e.stopPropagation()
                                                                        handleTimeFilter(
                                                                            "6-12",
                                                                            "arrival",
                                                                            "originArrival"
                                                                        )}
                                                                    }>
                                                                <input
                                                                    type="checkbox"
                                                                    id="D3time2"
                                                                 
                                                                    checked={
                                                                        timeFilter[
                                                                            "arrival"
                                                                        ][
                                                                            "originArrival"
                                                                        ][
                                                                            "6-12"
                                                                        ]
                                                                    }
                                                                />
                                                                <label for="D3time2" onClick={(e) =>{
                                                                     
                                                                        handleTimeFilter(
                                                                            "6-12",
                                                                            "arrival",
                                                                            "originArrival"
                                                                        )}}>
                                                                    {" "}
                                                                    <span className="Filter_stop_icon2"></span>{" "}
                                                                    <span>
                                                                        {" "}
                                                                        06 - 12{" "}
                                                                    </span>{" "}
                                                                </label>
                                                            </li>
                                                            <li  onClick={(e) =>{
                                                                e.stopPropagation()
                                                                        handleTimeFilter(
                                                                            "12-18",
                                                                            "arrival",
                                                                            "originArrival"
                                                                        )}
                                                                    }>
                                                                <input
                                                                    type="checkbox"
                                                                    id="D3time3"
                                                                   
                                                                    checked={
                                                                        timeFilter[
                                                                            "arrival"
                                                                        ][
                                                                            "originArrival"
                                                                        ][
                                                                            "12-18"
                                                                        ]
                                                                    }
                                                                />
                                                                <label for="D3time3" onClick={(e) =>{
                                                                     
                                                                        handleTimeFilter(
                                                                            "12-18",
                                                                            "arrival",
                                                                            "originArrival"
                                                                        )}
                                                                    }>
                                                                    {" "}
                                                                    <span className="Filter_stop_icon3"></span>{" "}
                                                                    <span>
                                                                        {" "}
                                                                        12 - 18{" "}
                                                                    </span>{" "}
                                                                </label>
                                                            </li>
                                                            <li onClick={(e) =>{
                                                                e.stopPropagation()
                                                                        handleTimeFilter(
                                                                            "18-23",
                                                                            "arrival",
                                                                            "originArrival"
                                                                        )}
                                                                    }>
                                                                <input
                                                                    type="checkbox"
                                                                    id="D3time4"
                                                                    
                                                                    checked={
                                                                        timeFilter[
                                                                            "arrival"
                                                                        ][
                                                                            "originArrival"
                                                                        ][
                                                                            "18-23"
                                                                        ]
                                                                    }
                                                                />
                                                                <label for="D3time4"  onClick={(e) =>{
                                                                     
                                                                        handleTimeFilter(
                                                                            "18-23",
                                                                            "arrival",
                                                                            "originArrival"
                                                                        )}
                                                                    }>
                                                                    {" "}
                                                                    <span className="Filter_stop_icon4"></span>{" "}
                                                                    <span>
                                                                        {" "}
                                                                        18 - 24{" "}
                                                                    </span>{" "}
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {tripType ==
                                                        "RoundTrip" && (
                                                        <div className="departArrivTimeFiltr mb-0">
                                                            <h4>
                                                                {lang.arrival}{" "}
                                                                {
                                                                    place.departure
                                                                }{" "}
                                                                (
                                                                {
                                                                    place.departureCode
                                                                }
                                                                )
                                                            </h4>
                                                            <ul className="d-flex">
                                                                <li   onClick={(e) =>{
                                                                    e.stopPropagation()
                                                                            handleTimeFilter(
                                                                                "0-6",
                                                                                "arrival",
                                                                                "destinationArrival"
                                                                            )
                                                                        }}>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="D4time1"
                                                                      
                                                                        checked={
                                                                            timeFilter[
                                                                                "arrival"
                                                                            ][
                                                                                "destinationArrival"
                                                                            ][
                                                                                "0-6"
                                                                            ]
                                                                        }
                                                                    />
                                                                    <label for="D4time1" onClick={(e) =>{
                                                                         
                                                                            handleTimeFilter(
                                                                                "0-6",
                                                                                "arrival",
                                                                                "destinationArrival"
                                                                            )}
                                                                        }>
                                                                        {" "}
                                                                        <span className="Filter_stop_icon1"></span>{" "}
                                                                        <span>
                                                                            {" "}
                                                                            00 -
                                                                            06{" "}
                                                                        </span>{" "}
                                                                    </label>
                                                                </li>
                                                                <li onClick={(e) =>{
                                                                    e.stopPropagation()
                                                                            handleTimeFilter(
                                                                                "6-12",
                                                                                "arrival",
                                                                                "destinationArrival"
                                                                            )}
                                                                        }>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="D4time2"
                                                                        
                                                                        checked={
                                                                            timeFilter[
                                                                                "arrival"
                                                                            ][
                                                                                "destinationArrival"
                                                                            ][
                                                                                "6-12"
                                                                            ]
                                                                        }
                                                                    />
                                                                    <label for="D4time2" onClick={(e) =>{
                                                                         
                                                                            handleTimeFilter(
                                                                                "6-12",
                                                                                "arrival",
                                                                                "destinationArrival"
                                                                            )}
                                                                        }>
                                                                        {" "}
                                                                        <span className="Filter_stop_icon2"></span>{" "}
                                                                        <span>
                                                                            {" "}
                                                                            06 -
                                                                            12{" "}
                                                                        </span>{" "}
                                                                    </label>
                                                                </li>
                                                                <li onClick={(e) =>{
                                                                    e.stopPropagation()
                                                                            handleTimeFilter(
                                                                                "12-18",
                                                                                "arrival",
                                                                                "destinationArrival"
                                                                            )}
                                                                        }>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="D4time3"
                                                                        
                                                                        checked={
                                                                            timeFilter[
                                                                                "arrival"
                                                                            ][
                                                                                "destinationArrival"
                                                                            ][
                                                                                "12-18"
                                                                            ]
                                                                        }
                                                                    />
                                                                    <label for="D4time3" onClick={(e) =>{
                                                                         
                                                                            handleTimeFilter(
                                                                                "12-18",
                                                                                "arrival",
                                                                                "destinationArrival"
                                                                            )}
                                                                        }>
                                                                        {" "}
                                                                        <span className="Filter_stop_icon3"></span>{" "}
                                                                        <span>
                                                                            {" "}
                                                                            12 -
                                                                            18{" "}
                                                                        </span>{" "}
                                                                    </label>
                                                                </li>
                                                                <li  onClick={(e) =>{
                                                                    e.stopPropagation()
                                                                            handleTimeFilter(
                                                                                "18-23",
                                                                                "arrival",
                                                                                "destinationArrival"
                                                                            )}
                                                                        }>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="D4time4"
                                                                       
                                                                        checked={
                                                                            timeFilter[
                                                                                "arrival"
                                                                            ][
                                                                                "destinationArrival"
                                                                            ][
                                                                                "18-23"
                                                                            ]
                                                                        }
                                                                    />
                                                                    <label for="D4time4" onClick={(e) =>{
                                                                         

                                                                            handleTimeFilter(
                                                                                "18-23",
                                                                                "arrival",
                                                                                "destinationArrival"
                                                                            )}
                                                                        }>
                                                                        {" "}
                                                                        <span className="Filter_stop_icon4"></span>{" "}
                                                                        <span>
                                                                            {" "}
                                                                            18 -
                                                                            24{" "}
                                                                        </span>{" "}
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    )}
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
        </>
    );
};

export default FlightFilter;
