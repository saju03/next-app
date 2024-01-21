import { produce } from "immer";
import React from "react";
const resourceKeys = window.resourceKeys
const FlightNoResult = () => {
     const goBackHome = () => {
        let redirectUrl =
        window.culture;
        window.location.href = window.siteurl + "/" + redirectUrl;
     }
   
    return (
        <section className="packageResultArea MinHeight">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 ticket_page">
                        <div className="booking_fail no_result">
                            <div className="no_result_flight" />
                            <h2>{resourceKeys.No_Result_Found}</h2>
                            <h4>
                               {resourceKeys.No_flights_found_for_your_current_search}
                            </h4>
                            <button
                                className="theme_button addContinueBtn mt-3"
                                onClick={() =>
                                    goBackHome()
                                }
                            >
                              {resourceKeys.try_again}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FlightNoResult;
