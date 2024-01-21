import React, { useEffect, useState } from "react";
import { getBookingClass, getFullDateAr, getPaxType, getTravelClassResourceKey } from "./FlightUtils";
import Carousel from 'react-elastic-carousel';
import moment from 'moment/min/moment-with-locales';
import index from "react-horizontal-strip-datepicker";
import BrandedFareBlock from "./BrandedFareBlock";



const BrandedFareModal = ({
    ancillaries,
    loader,
    selectedFlight,
    getDetails,
    setFullLoader
}) => {
    const resourceKeys = window.resourceKeys;

    const [detailflag, setdetailflag] = useState([]);

    const [journeyID, setJourneyID] = useState("");
    const [Segment,setSegment] = useState('')
    const [isRoundTrip, setIsRoundTrip] = useState(false)


    const [viewwidth, setWidth] = useState(window.innerWidth);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);








    useEffect(() => {
        selectedFlight?.FlightJourneys
            ? setJourneyID(selectedFlight?.FlightJourneys[0].JourneyIdentifier)
            : "";
        let url = window.location.href.split('/')
        url[5] == 'RoundTrip' && setIsRoundTrip(true)
            let segment = {}
    selectedFlight?.FlightJourneys?.map((item) => {
        segment[item.JourneyIdentifier] = {
            onward: item
                .FlightItems[0]
                ?.Departure
                ?.AirportCode,
            return: item.FlightItems.at(
                -1
            )
                ?.Arrival
                ?.AirportCode
        }

    })

   setSegment(segment);

    }, [selectedFlight]);



    return (
        <div
            className="SideModalnew flDtlsModal brandedfare_new modal right fade"
            id="fl_brandes_rslt"
            role="dialog"
        >

            <div className="modal-dialog">
                {/* Modal content BF*/}
                <div className="modal-content">
                    <div className="modal-header slideModalClos">
                        <button
                            className=""
                            type="button"
                            data-dismiss="modal"
                        >
                            ×
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="branded_view">
                            <div className="fl_branded_tab">


                                {selectedFlight?.FlightJourneys?.map((item, i) => {

                                    return (
                                        <div key={item.FlightTripKey + index}
                                            className="rslt_modal_hd_main"
                                            style={{ borderTop: 0, paddingTop: 0 }}
                                        >

                                            <div className="rslt_modal_hd" >
                                                {" "}
                                                <i className={` ${isRoundTrip && i == 1 ? 'fl_dtls_returnicon' : 'fl_dtls_onwardicon'}`} />

                                                {" "}


                                                <h2 >
                                                    {" "}  <span>
                                                        {selectedFlight?.FlightJourneys
                                                            ? window.culture == "en"
                                                                ? item
                                                                    ?.FlightItems[0]
                                                                    ?.Departure
                                                                    ?.CityName[window.culture]
                                                                : item
                                                                    ?.FlightItems[0]
                                                                    ?.Departure
                                                                    ?.CityName?.ar
                                                            : "null"}
                                                        {" "} </span>
                                                    <span>{" "} to {" "} </span>
                                                    <span> {" "}
                                                        {selectedFlight.FlightJourneys
                                                            ? window.culture == "en"
                                                                ? item
                                                                    ?.FlightItems.at(-1)
                                                                    ?.Arrival
                                                                    ?.CityName[window.culture]
                                                                : item?.FlightItems?.at(
                                                                    -1
                                                                )?.Arrival?.CityName
                                                                    ?.ar
                                                            : "null"}
                                                    </span>
                                                </h2> {" "}

                                            </div>

                                            <div className="rslt_modal_sub">
                                                <p>
                                                    {resourceKeys.total_duration}{" "}
                                                    {item?.JourneyTime
                                                        ?.Days > 0
                                                        ? item?.JourneyTime
                                                            ?.Days + "D"
                                                        : ""}{" "}
                                                    {item?.JourneyTime
                                                        ?.Hours > 0
                                                        ? item?.JourneyTime
                                                            ?.Hours + "" + resourceKeys.H
                                                        : ""}{" "}
                                                    {item?.JourneyTime
                                                        ?.Minutes > 0
                                                        ? item?.JourneyTime
                                                            ?.Minutes + "" + resourceKeys.M
                                                        : ""}

                                                </p>
                                            </div>

                                            <div className="rslt_modal_sub">
                                                <p>
                                                    {selectedFlight.FlightJourneys
                                                        ? window.culture == "en" ? moment(item.FlightItems[0].Departure.DateTime).locale('en').format("ddd, DD MMM YYYY") : getFullDateAr(item?.FlightItems[0]?.Departure?.DateTime)
                                                        : ""}
                                                </p>
                                            </div>

                                        </div>

                                    )
                                })}







                                <div className="">
                                    <div className="row">
                                        <div className="col-12 col-md-12 col-lg-12">
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
                                            ) :
                                                <div className="tab-content mt-3">
                                                    <div
                                                        className="tab-pane active show"
                                                        id="brandedtab1"
                                                        role="tabpanel"
                                                        aria-labelledby="brandedtab1-tab"
                                                    >
                                                        <Carousel className="brandedFare_carrousel" itemsToShow={viewwidth <= 768 ? 1 : 3} pagination={false} showArrows={ancillaries?.length > 1} itemPadding={[0, 8, 0, 8]} isRTL={window.culture == "ar"} >

                                                            {ancillaries?.map((ancillary) => {
                                                                let mealCheck = false;

                                                                return (
                                                                    <div className="item"  >
                                                                        <div className="brandedFareBox">


                                                                            <BrandedFareBlock getDetails={getDetails} ancillary={ancillary} setFullLoader={setFullLoader} selectedFlight={selectedFlight} Segment = {Segment}/>

                                                                        </div>
                                                                    </div>
                                                                )
                                                            })



                                                            }
                                                        </Carousel >
                                                    </div>
                                                </div>
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default BrandedFareModal;
