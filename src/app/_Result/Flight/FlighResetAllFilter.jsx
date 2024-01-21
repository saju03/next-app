import React from 'react'
import { produce } from "immer";
import { resetFilter } from "../services/FlightResult";
const resourceKeys = window.resourceKeys
const FlighResetAllFilter = ({
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
}) => {
  return (
    <section className="packageResultArea MinHeight">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 ticket_page">
                        <div className="booking_fail no_result">
                            <div className="no_result_flight" />
                            <h2>{resourceKeys.No_Result_Found}</h2>
                            <h4>
                              {resourceKeys.No_flights_found_for_your_current_filters}
                            </h4>
                            <button className="theme_button addContinueBtn mt-3" 
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
                                        setLayoverTimeFilter
                                    )
                                }
                                >
                             {resourceKeys.Reset_all_Filters}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default FlighResetAllFilter