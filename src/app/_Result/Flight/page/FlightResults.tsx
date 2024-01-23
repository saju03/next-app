import React from "react";
import ModifySearch from "../../components/ModifySearch";
import Filter from "../../components/Filter";
import SortBlock from "../../components/SortBlock";
import ResultBlock from "../../components/ResultBlock";

export default function FlightResults() {
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
