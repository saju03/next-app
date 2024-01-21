import React, { useState } from 'react';
import { resetFilter } from '../services/FlightResult';
import { produce } from "immer";
import { useEffect } from 'react';
const AirlineMetrixBlock = ({airItem,index, setAirlineArray}) => {
    const [isActive,setActive]= useState(false)
    return (
        <div className="item">
        <div className={`metrixBox d-flex justify-content-center align-items-center flex-column ${airItem.isChecked ? "active":''}`} onClick={() =>{
        setActive(!isActive)
        setAirlineArray((prvState) => {
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
        }>
            <p>
                <img src={`${base_url}images/AirlineIcons/${airItem.img}.png`}  alt='ICON'/>
            </p>
            <h3>
                <span>{airItem.name} {" "}</span>
                <span className="matrixcurrency"> <span>{airItem.currencyCode}</span> <span>{airItem.cheapestFare} </span></span>
            </h3>
        </div>
    </div>
    );
}

export default AirlineMetrixBlock;
