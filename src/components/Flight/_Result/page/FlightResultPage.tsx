'use client'
import React, { useEffect, useState } from "react";
import ModifySearch from "../components/ModifySearch";
import Filter from "../components/Filter";
import SortBlock from "../components/SortBlock";
import ResultBlock from "../components/ResultBlock";

import { verifyToken } from "@/lib/helpers/authHelpers";  
import { getResults } from "../_utils/services";

interface FlightResultPageProps {
  params: string[];
}
export default  function FlightResultPage({params}:FlightResultPageProps) {
  
  
  const [flightResults,setFlightResults]=useState([])

  
useEffect(()=>{
  getResults()
})

  return (
    <>
      <ModifySearch />
      <div>
        <section className="packageResultArea">
          <div className="container">
            <div className="row">
              <Filter />

              <div className="col-lg-9">
                <SortBlock />

                <ResultBlock />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
