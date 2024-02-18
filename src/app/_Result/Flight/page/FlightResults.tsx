'use client'
import React, { useEffect, useState } from "react";
import ModifySearch from "../../components/ModifySearch";
import Filter from "../../components/Filter";
import SortBlock from "../../components/SortBlock";
import ResultBlock from "../../components/ResultBlock";
import axios, { AxiosResponse } from "axios";
import { verifyToken } from "@/app/_utils/helpers/authHelpers";

export default  function FlightResults() {

  
  const [flightResults,setFlightResults]=useState([])

  const getSearchId = async()=>{

    const data = await axios.get(`http://localhost:3000/api/get-search-id`)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      verifyToken();
    }, 60000);

    verifyToken();
    return () => clearInterval(intervalId);
  }, []);


  
useEffect(()=>{
  getSearchId()
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
