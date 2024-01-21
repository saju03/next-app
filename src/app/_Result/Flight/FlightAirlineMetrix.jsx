import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Carousel from "react-elastic-carousel";
import { produce } from "immer";
import AirlineMetrixBlock from "./AirlineMetrixBlock";
const FlightAirlineMetrix = ({airlineArray, setAirlineArray}) => {
  

    const breakPoints = [
        { width: 400, itemsToShow: 1 },
        { width: 550, itemsToShow: 4, pagination: false },
        { width: 850, itemsToShow: 6 },
        { width: 1150, itemsToShow: 6 },
        { width: 1300, itemsToShow: 6 },
        { width: 1450, itemsToShow: 7 },
        { width: 1750, itemsToShow: 7 },
    ]

    const items = [
        <div key="1" className="item">
            <div className="metrixBox d-flex justify-content-center align-items-center flex-column">
                <p>
                    <img src={`${base_url}images/AirlineIcons/1.png`} />
                </p>
                <h3>
                    <span>AED</span>
                    <span>120.00</span>
                </h3>
            </div>
        </div>,
    ];

    const lang = JSON.parse(window.language)[0];
    return (
        <>

            <div id="flightMatrix">
                <Carousel 
                   pagination={false}
                    showEmptySlots={true}
                    breakPoints={breakPoints}
                    className="metrix_carrousel owl-carousel"
                    showArrows={airlineArray?.length > 7}
                    isRTL={window.culture=='ar'}
                >
                    {airlineArray.map((airItem, index) => {
                        return (

                            <AirlineMetrixBlock key={i} airItem={airItem} index={index} setAirlineArray={setAirlineArray} />

                        );
                    })}
                </Carousel>
            </div>

        </>
    );
};

export default FlightAirlineMetrix;
