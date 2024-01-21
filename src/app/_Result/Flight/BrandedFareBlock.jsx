import React, { useState } from 'react';
import { getBookingClass, getTravelClassResourceKey, getPaxType } from './FlightUtils';

const BrandedFareBlock = ({ ancillary, setFullLoader, getDetails, Segment }) => {


    let mealCheck = false;
    const [bookBtnLoader, setBookBtnLoader] = useState('')
    const resourceKeys = window.resourceKeys;
    return (<>
        <div className="FareBoxHeadTwo">

            <div className='branded_scroll_main'>

                {ancillary?.BrandProperties?.map((item, index) => {
                    debugger

                    let baggage = []
                    item["BG-F"].map((element) => {

                        element?.applicableTo.at(0) != 2 ? baggage.push(getPaxType(element?.applicableTo.at(0)) + " - " + element?.displayText + ' - ' + resourceKeys[element?.type]) : element?.type != 'cabin' ? baggage.push(getPaxType(element?.applicableTo?.at(0)) + " - " + element?.displayText + ' - ' + resourceKeys[element?.type]) : ''

                    })
                    let uniqueArray = [...new Set(baggage)];


                    return (
                        <>
                            <div className='branded_onward_dvd'>
                                <h2>

                                    <span>
                                        {window.location.href.split('/')[5] == "RoundTrip" && index == 1 ? resourceKeys.return + ':' : resourceKeys.onward + ':'}
                                    </span>
                                    <span>
                                        {" "}

                                        {window.location.href.split('/')[5] == "RoundTrip" && index == 1 ? item.BrandNameReturn : item.BrandName}
                                    </span>
                                </h2>

                                <p>
                                    <span>


                                        {resourceKeys[getTravelClassResourceKey(getBookingClass(item?.FlightInfo[0]?.cabin))]}
                                        /
                                        {resourceKeys.coach}{" "}
                                    </span>

                                    <span className='fare_destin'>
                                        {'('}<span>{Segment[item.journeyIdentifier].onward}</span>{" - "}<span>{Segment[item.journeyIdentifier].return}</span>{')'}
                                    </span>
                                </p>
                                <div className="brandFareScrol">


                                    {
                                        uniqueArray.map((item, i) => {
                                            return (
                                                <div key={i} className="FareDtlsTwo d-flex align-items-start">

                                                    {" "}
                                                    <i className="fareTick" />{" "}

                                                    <span className="farealowed">
                                                        {resourceKeys?.baggage_allowance}{" "}
                                                        {" "}{item}{' '}{resourceKeys?.baggage}
                                                    </span>
                                                </div>
                                            )
                                        })
                                    }
                                    {
                                        item["ML-F"].map((item, i) => {



                                            if (item.displayText != "" && item.displayText != "No  Meals") {

                                                mealCheck = true;

                                            }
                                        })}

                                    <div class="fareSubHead">
                                        <h2> {resourceKeys.Meals} </h2>
                                    </div>

                                    {mealCheck ?

                                        <div class="FareDtlsTwo d-flex align-items-start">
                                            <i class="fareTick"></i>
                                            <span className="meals-td-tooltip">
                                                <span class="farealowed">{resourceKeys.Meals}</span>

                                                <span class="meals-tooltiptext">
                                                    {item["ML-F"].map((meal, mIndex) => {
                                                        return (
                                                            meal.displayText ?

                                                                <span>{meal.displayText}{" "}</span>
                                                                : resourceKeys.No_Meals)
                                                    })}

                                                </span>


                                            </span>

                                        </div> :
                                        <div class="FareDtlsTwo d-flex align-items-center"> <i class="fare_none_tick"></i> <span class="farenone_alowed">{resourceKeys.No_Meals}</span></div>}



                                    {/* {item?.FlightInfo[0]?.cabin ?
                                    <>
                                        <div className="fareSubHead">
                                            <h2>
                                                {" "}
                                                {resourceKeys.cabin_class}{" "}
                                            </h2>
                                        </div>
                                        <div className="FareDtlsTwo d-flex align-items-start">
                                            {" "}
                                            <i className="fareTick" />{" "}
                                            <span className="farealowed">
                                                {" "}
                                                {
                                                    resourceKeys[getTravelClassResourceKey(getBookingClass(item?.FlightInfo[0]?.cabin))]

                                                }{" "}
                                            </span>{" "}
                                        </div>
                                    </>
                                    : ''} */}
                                    {item?.BrandedFeatures?.length ? <div className="fareSubHead">
                                        <h2>
                                            {" "}
                                            {resourceKeys.Features}{" "}
                                        </h2>
                                    </div> : ''}

                                    {
                                        item?.BrandedFeatures?.map((item, i) => {

                                            return (
                                                <div key={i} className="FareDtlsTwo d-flex align-items-start">

                                                    {" "}
                                                    <i className="fareTick" />{" "}

                                                    <span className="farealowed">
                                                        {" "}
                                                        {item}{" "}
                                                    </span>{" "}




                                                </div>
                                            )



                                        })
                                    }
                                </div>
                            </div>
                        </>
                    )

                })}
            </div>

            <div className="brndedPrice">
                {ancillary
                    ?.FareDetails
                    ?.Discount > 0 ? <div className="strikePrice">
                    <span>
                        {
                            ancillary
                                ?.FareDetails
                                ?.Currency
                        }
                    </span>{" "}
                    <span>
                        {
                            parseFloat(ancillary
                                ?.FareDetails
                                ?.StrikeOutAmount).toFixed(ancillary
                                    ?.FareDetails.DecimalPoint)
                        }
                    </span>{" "}
                </div> : ''}
                <h3 className="actuelPrice">
                    {" "}
                    <span>
                        {" "}
                        {
                            ancillary
                                ?.FareDetails
                                ?.Currency
                        }
                    </span>{" "}
                    <span>
                        {" "}
                        {
                            parseFloat(ancillary
                                ?.FareDetails
                                ?.Total).toFixed(ancillary
                                    ?.FareDetails?.DecimalPoint)
                        }
                    </span>{" "}
                </h3>
                <span className="refundable">
                    {ancillary[0]?.IsRefundable && resourceKeys[ancillary?.RefundInfo?.Name]}
                </span>
                <div className="w-100">

                    {bookBtnLoader == ancillary?.FareKey ? <> <div
                        className="loader-sm"
                        id="supportloader"
                    >
                        <div className="bounce1" />
                        <div className="bounce2" />
                        <div className="bounce3" />
                    </div>

                    </>

                        : <button
                            className="theme_btnStyle brndedBookBtn"
                            onClick={() => {
                                getDetails(ancillary.FareKey)
                                setBookBtnLoader(ancillary?.FareKey)
                                setFullLoader(true)
                            }

                            }
                        >   {" "}
                            {resourceKeys.book}{" "}
                        </button>}




                </div>
            </div>

        </div>

    </>);
}

export default BrandedFareBlock;
