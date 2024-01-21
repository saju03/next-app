import React, { useEffect, useRef, useState } from "react";
import FlightFilter from "./FlightFilter";
import FlightResultContainer from "./FlightResultBlock";
import FlightAirlineMetrix from "./FlightAirlineMetrix";
import axios from "axios";
import {
    fetchFlightResult,
    bestValueFetching,
    airlineArrayInit,
} from "../services/FlightResult";
import BrandedFareModal from "./BrandedFareModal";
import FlightDetails from "./FlightDetails";
import FLightResultLoader from "./FlightResultLoader";
import FlightNoResult from "./FlightNoResult";
import FlightSort from "./FlightSort";
import FlightResultBlock from "./FlightResultBlock";
const FlightResultPage = () => {
    const lang = JSON.parse(window.language)[0];
    const resourceKeys = window.resourceKey;
    const filterRef = useRef(null)
    const filterBtnRef = useRef(null)
    const [flightResults, setFlightResults] = useState([]);
    const [filteredFlights, setFilteredFlights] = useState([]);
    const [selectedFlight, setSelectedFlight] = useState([]);
    const [tripType, setTripType] = useState("");
    const [flag, setFlag] = useState({
        nonStop: false,
        oneStop: false,
        onePlusStop: false,
    });
    const [selectedFlightForDetails, setSelectedFlightForDetails] = useState([
        "",
    ]);
    const [bestFlightActive, setBestFlightActive] = useState(false);

    const [bestValueFlightKey, setBestValueFlightKey] = useState("");
    useEffect(() => {
        bestValueFetching(
            flightResults,
            bestFlightActive,
            setBestValueFlightKey
        );
    }, [bestFlightActive]);

    const [fund, setFund] = useState({
        refundable: false,
        nonRefundable: false,
        refundableWithcharge: false,
    });
    const [ancillaries, setAncillaries] = useState([]);
    const [loader, setLoader] = useState({
        bounceLoader: true,
        bookButtonLoader: false,
    });
    const [flightTripKey, setFlightTripKey] = useState("");
    const [getDetailsFromFare, setGetDetailsFromFare] = useState([]);
    const [detailflag, setDetailFlag] = useState(false);
    const [airline, setAirlines] = useState([]);
    const [airlineFlag, setAirlineFlag] = useState(true);
    const [airlinesCheck, setAirlinesCheck] = useState([]);
    const [layoverAirport, setlayoverAirport] = useState([]);
    const [layoverChecked, setLayoverChecked] = useState([]);
    const [layoverTimeList, setLayoverTimeList] = useState([]);
    const [airlinecalc, setairlinecalc] = useState([]);
    const [layovercalc, setlayoverCalc] = useState([]);
    const [isSearchRequestCompleted, setSearchRequestCompleted] =
        useState(false);
    const [fullLoader, setFullLoader] = useState(false);
    const [filterState, setFilterState] = useState(false);

    const [airlineFilterData, setAirlineFilterData] = useState({});
    const [pricefilter, setPriceFilter] = useState({
        highest: 0,
        lowest: 0,
        selectedLow: 0,
        selectedHigh: 0,
        fastest: 0,
    });
    const [stopFilter, setStopFilter] = useState({
        onward: {
            directFlight: false,
            oneStop: false,
            onePlusStop: false,
            // type: "onward",
        },
        return: {
            directFlight: false,
            oneStop: false,
            onePlusStop: false,
            //
        },
        type: "onward",
    });

    const [timeFilter, setTimeFilter] = useState({
        departure: {
            originDeparture: {
                "0-6": false,
                "6-12": false,
                "12-18": false,
                "18-23": false,
            },
            destinationDeparture: {
                "0-6": false,
                "6-12": false,
                "12-18": false,
                "18-23": false,
            },
        },
        arrival: {
            originArrival: {
                "0-6": false,
                "6-12": false,
                "12-18": false,
                "18-23": false,
            },
            destinationArrival: {
                "0-6": false,
                "6-12": false,
                "12-18": false,
                "18-23": false,
            },
        },
    });

    const [layovertimeFilter, setLayoverTimeFilter] = useState({
        departure: {
            "0-5": false,
            "5-10": false,
            "10-15": false,
            "15-20": false,
        },
        arrival: {
            "0-5": false,
            "5-10": false,
            "10-15": false,
            "15-20": false,
        },
    });
    const [sortedName, setSortedName] = useState([]);
    const [airLineImag, setAirlineImg] = useState([]);
    const [sortStatus, setSortStatus] = useState({
        type: "price",
        lowToHigh: true,
    });
    const [allAirportValues, setAllAirportValues] = useState([]);
    const [multiCityLength, setMulticityLength] = useState([]);
    const [airlineArray, setAirlineArray] = useState([]);
    const [selectedStopTab, setSelectedStopTab] = useState("onward");
    const filterProps = {
        airline,
        layoverAirport,
        fund,
        pricefilter,
        stopFilter,
        timeFilter,
        setTimeFilter,
        layovertimeFilter,
        setLayoverTimeFilter,
        sortStatus,
        setSortStatus,
        tripType,
        allAirportValues,
        setFund,
        setPriceFilter,
        setlayoverAirport,
        setAirlines,
    };
    useEffect(() => {
        const fastestFetch = flightResults.sort((a, b) => {
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
        // Convert the fastestTotal to a string before updating the state

        let firstObject = fastestFetch[0];

        if (
            firstObject &&
            firstObject.FareDetails &&
            firstObject.FareDetails.Total
        ) {
            let firstAdditionalFare = firstObject.FareDetails.Total;
            setPriceFilter({...pricefilter, fastest: firstAdditionalFare});
        }
    }, [flightResults]);

    const handleOutsideClick = (event) => {
        
        event.preventDefault()
        if (filterRef.current && !filterRef.current.contains(event.target)&&!filterBtnRef.current.contains(event.target)) {

            setFilterState(false);
            document.body.classList.remove("FilternoScroll");
        }
    };

    useEffect(() => {
       
        if (filterState) {
            document.addEventListener("click", handleOutsideClick);
        }
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [filterState]);


    const getTripValues = (tripType) => {
        if (tripType === "OneWay" || tripType === "RoundTrip") {
            return {
                from: window.fromPlace1,
                to: window.toPlace1,
            };
        } else if (tripType === "MultiCity") {
            const multicityValues = [];
            for (let i = 1; i <= multiCityLength; i++) {
                multicityValues.push({
                    from: window[`fromPlace${i}`],
                    to: window[`toPlace${i}`],
                });
            }
            return multicityValues;
        } else {
            // Handle other cases if needed
            return null;
        }
    };
    const propsForSort = {
        flightResults,
        filteredFlights,
        setBestFlightActive,
        bestFlightActive,

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

        setStopFilter,
        setFund,

        setlayoverAirport,

        setAirlines,
        setTimeFilter,
        setLayoverTimeFilter,
        // airlineMetrixUpdate
        airlineArray,
        tripType,
        selectedStopTab, 
        setSelectedStopTab
    };

    useEffect(() => {
        fetchFlightResult(
            setFlightResults,
            setAirlines,
            setlayoverAirport,
            setLayoverTimeList,
            setPriceFilter,
            setAirlineImg,
            setSearchRequestCompleted,
            pricefilter,
            setTripType,
            bestFlightActive,
            setBestValueFlightKey,
            setMulticityLength,
            flightResults,
            airline
        );
    }, []);
    useEffect(() => {
        if (flightResults.length > 0) {
            airlineArrayInit(
                flightResults,
                setAirlines,
                airline,
                setAirlineArray,
                airlineArray
            );
        }
    }, [flightResults]);
    console.log("flights", filteredFlights)
    const getDetails = (fareKey, tripkey) => {
        setLoader({ ...loader, bookButtonLoader: true });
        setDetailFlag(!detailflag);
        let FareKey = [];
        let fareKEY;
        if (FareKey[0]) {
            fareKEY = FareKey[0].toString();
        } else {
            fareKEY = fareKey.toString();
        }

        const apiURL = `${window.apiURL}api/Flight/Detail`;
        const token = window.accessToken;
        const headers = {
            Authorization: `Bearer ${token}`,
            SearchId: window.SearchId,
            Culture: window.culture,
            Version: 1,
        };

        const requestBody = {
            flightDetails: [
                {
                    fareKey: fareKEY,
                    flightTripKey: flightTripKey.length
                        ? flightTripKey
                        : tripkey,
                },
            ],
            currency: window.currency,
        };
        axios
            .post(apiURL, requestBody, { headers })
            .then((response) => {
                // for development pupose
                if (
                    response.data.Code == "400" &&
                    window.location.href.split("/")[2].split(".")[0] == "127"
                ) {
                    alert(`${response.data.Message} , ${apiURL}`);
                }

                let getDetailData = response.data.Data;
                setGetDetailsFromFare(response.data.Data);
                const ProcessId = getDetailData.ProcessId;
                const selectedFlight = getDetailData.FlightTrips[0];
                const paxURL = `${window.apiURL}api/Flight/GetPax`;
                const headers = {
                    Authorization: `Bearer ${token}`,
                    SearchId: window.SearchId,
                    Culture: window.culture,
                    Version: 1,
                };
                const requestBody = {
                    ProcessId: ProcessId,
                };
                axios
                    .post(paxURL, requestBody, { headers })
                    .then((response) => {
                        if (response.data.Code == 400) {
                            jAlert(
                                `Oops Internal Server Error ${paxURL}`,
                                "Maqam"
                            );
                            window.location.reload();
                        }
                        const paxDetails = response.data.Data;
                        const paymentUrl = `${window.apiURL}api/Flight/GetPayment`;
                        const headers = {
                            Authorization: `Bearer ${token}`,
                            SearchId: window.SearchId,
                            Culture: window.culture,
                            Version: 1,
                        };
                        const requestBody = {
                            ProcessId: ProcessId,
                            Currency: window.currency,
                        };
                        axios
                            .post(paymentUrl, requestBody, { headers })
                            .then((response) => {
                                if (response.data.Code == 400) {
                                    jAlert(
                                        `Oops Internal Server Error ${paymentUrl} `,
                                        "Maqam"
                                    );
                                    window.location.reload();
                                }
                                const paymentDetails = response.data.Data;
                                const chars =
                                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuwxyz0123456789";
                                var searchId = window.searchId + "_";
                                for (var i = 0; i < 4; i++) {
                                    searchId += chars.charAt(
                                        Math.floor(Math.random() * chars.length)
                                    );
                                }
                                const dataToSend = {
                                    searchId,
                                    ProcessId,
                                    getDetailData,
                                    paxDetails,
                                    paymentDetails,
                                    selectedFlight,
                                };

                                axios
                                    .post(
                                        `${window.base_url}Payment`,
                                        dataToSend
                                    )
                                    .then((response) => {
                                        setLoader({
                                            ...loader,
                                            bookButtonLoader: false,
                                        });

                                        /*************Web engage script starts*************/
                                        if(SHOW_WEBENGAGE == 1){
                                            try {
                                                var RegObj = FlightSelected(selectedFlight);
                                                webengage.track("Flight Selected", RegObj);
                                            } catch (err) {
                                                console.log(err.message);
                                            }
                                        }
                                        /*************Web engage script ends*************/

                                        window.location.href =
                                            window.base_url +
                                            window.culture +
                                            "/" +
                                            "FlightPassenger?SearchId=" +
                                            searchId;
                                    })
                                    .catch((error) => {
                                        console.error("Error:", error);
                                    });
                            })
                            .catch((error) => {
                                console.error("Error", error);
                            });
                    })
                    .catch((error) => {
                        console.error("Error", error);
                    });
            })
            .catch((error) => {
                console.error("Error", error);
            });
    };
    return (
        <>
            <FLightResultLoader
                isLoading={!isSearchRequestCompleted}
                isFilterAssembled={flightResults.length > 0}
            />

            {flightResults.length == 0 && isSearchRequestCompleted && (
                <FlightNoResult />
            )}

            {/* Flight Results Starts Here */}
            {flightResults.length > 0 /* && isSearchRequestCompleted  */ && (
                <>
                    {/* <FlightAirlineMetrix
                        // airline={airline}
                        // airLineImag={airLineImag}
                        // setAirlines={setAirlines}
                        airlineArray={airlineArray}
                        setAirlineArray={setAirlineArray}
                        // airlineMetrixUpdate={airlineMetrixUpdate}
                        // setAirlineMetrixUpdate = {setAirlineMetrixUpdate}
                    /> */}

                    <div
                        className="full_overlay"
                        style={{ display: `${filterState ? "block" : "none"}` }}
                    />
                    <a
                        className="Filterbtn"
                        id="FilterbtnFlight"
                        ref={filterBtnRef}
                        onClick={() => {
                            setFilterState(true);
                            document.body.classList.add("FilternoScroll");
                        }}
                    >
                        <i className="mob_filterIcon" /> <span>{lang?.filght_filter}</span>{" "}
                    </a>
                    <section className="packageResultArea">
                        <div className=" ">
                            <div className="row">
                                <FlightFilter
                                    filterState={filterState}
                                    setFilterState={setFilterState}
                                    flightResults={flightResults}
                                    filteredFlights={filteredFlights}
                                    setFilteredFlights={setFilteredFlights}
                                    flag={flag}
                                    setFlag={setFlag}
                                    fund={fund}
                                    setFund={setFund}
                                    airline={airline}
                                    setAirlines={setAirlines}
                                    airlineFlag={airlineFlag}
                                    setAirlineFlag={setAirlineFlag}
                                    airlinesCheck={airlinesCheck}
                                    setAirlinesCheck={setAirlinesCheck}
                                    layoverAirport={layoverAirport}
                                    setlayoverAirport={setlayoverAirport}
                                    layoverChecked={layoverChecked}
                                    setLayoverChecked={setLayoverChecked}
                                    layoverTimeList={layoverTimeList}
                                    setLayoverTimeList={setLayoverTimeList}
                                    setairlinecalc={setairlinecalc}
                                    setlayoverCalc={setlayoverCalc}
                                    pricefilter={pricefilter}
                                    setPriceFilter={setPriceFilter}
                                    stopFilter={stopFilter}
                                    setStopFilter={setStopFilter}
                                    timeFilter={timeFilter}
                                    setTimeFilter={setTimeFilter}
                                    layovertimeFilter={layovertimeFilter}
                                    setLayoverTimeFilter={setLayoverTimeFilter}
                                    // airlinesSorted={airlinesSorted}
                                    sortedName={sortedName}
                                    setSortedName={setSortedName}
                                    tripType={tripType}
                                    setAirlineArray={setAirlineArray}
                                    selectedStopTab={selectedStopTab}
                                    setSelectedStopTab={setSelectedStopTab}
                                    filterRef={filterRef}
                                />
                                <div className="col-lg-9">
                                    {fullLoader ? (
                                        <div className="full_overlay d-flex justify-content-center align-items-center flex-column">
                                            <div className="loader-lg">
                                                <div className="loader-lg-dot"></div>
                                                <div className="loader-lg-dot"></div>
                                                <div className="loader-lg-dot"></div>
                                                <div className="loader-lg-dot"></div>
                                                <div className="loader-lg-dot"></div>
                                                <div className="loader-lg-dot"></div>
                                            </div>
                                            <p class="font-16 mt-5">
                                                Please Wait...
                                            </p>
                                        </div>
                                    ) : (
                                        ""
                                    )}

                                    <FlightSort {...propsForSort} />
                                    <FlightResultBlock
                                        flightResults={flightResults}
                                        filteredFlights={filteredFlights}
                                        setAncillaries={setAncillaries}
                                        setFlightTripKey={setFlightTripKey}
                                        setFilteredFlights={setFilteredFlights}
                                        {...filterProps}
                                        setLoader={setLoader}
                                        loader={loader}
                                        setSelectedFlight={setSelectedFlight}
                                        setSelectedFlightForDetails={
                                            setSelectedFlightForDetails
                                        }
                                        isSearchRequestCompleted={
                                            isSearchRequestCompleted
                                        }
                                        sortedName={sortedName}
                                        setSortedName={setSortedName}
                                        getDetails={getDetails}
                                        bestValueFlightKey={bestValueFlightKey}
                                        setStopFilter={setStopFilter}
                                        {...propsForSort}
                                        setFullLoader={setFullLoader}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
            {/* Branded Fare */}
            <BrandedFareModal
                ancillaries={ancillaries}
                loader={loader}
                selectedFlight={selectedFlight}
                getDetails={getDetails}
                setFullLoader={setFullLoader}
            />
            {/* Branded Fare End */}
        </>
    );
};

export default FlightResultPage;
