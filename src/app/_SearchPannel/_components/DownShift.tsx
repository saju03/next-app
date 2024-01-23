import axios from "axios";
import React, { useState } from "react";
import Downshift from "downshift";
import { AirportData, TwoSearchTypes } from "@/Interfaces";

interface PropsType {
  searchData: TwoSearchTypes;
  setSearchData: React.Dispatch<React.SetStateAction<TwoSearchTypes>>;
  isFromCity: boolean;
  index: number;
  isMultiCity: boolean;
}

export default function DownShift({
  searchData,
  setSearchData,
  isFromCity,
  index,
  isMultiCity
}: PropsType) {
  const [airpostList, setAirportList] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const getAirPortList = async (e: any) => {

    const preFixKey:string =  isFromCity ? "fromCity" :'toCity'
    if ( e.target.value == "") {
      if(isMultiCity){
        setSearchData({ ...searchData, [`${preFixKey}${index}`]: null });
      }else{
        setSearchData({ ...searchData, [preFixKey]: null });
      }
     
      
    } 


    setInputVal(e.target.value);
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_ElasticUrl}Data/GetAirPort?value=${e.target.value}&culture=1&size=10`
    );
    setAirportList(data?.hits?.hits);
  };

  const handleChange = (e: AirportData | null) => {

    if (searchData.searchType != "MultiCity") {
      if (isFromCity) {
        setSearchData({ ...searchData, fromCity: e });
        
      } else {
        setSearchData({ ...searchData, toCity: e });
      }
    } else {
      // To Identify from or to Location
      const preFix: string = isFromCity ? "fromCity" : "toCity";
      // Creating a key like 'formCity1'
      const objectKey: string = `${preFix}${index}`;
      // updating data
      setSearchData({ ...searchData, [objectKey]: e });
    }

    setInputVal(
      e?._source.city +
        "-" +
        e?._source.name +
        "-" +
        e?._source.countryname +
        "(" +
        e?._source.code +
        ")"
    );
  };
  return (
    <>
      <Downshift
        onChange={handleChange}
        itemToString={(item: AirportData | null) => {
          return item ? item?._source.name : "";
        }}
      >
        {({ getInputProps, getItemProps, isOpen, inputValue }) => (
          <div>
            <label>{isFromCity ? "Leaving from" : "Going to"}</label>
            <input
              {...getInputProps({
                placeholder: "City or Airport",
                onChange: getAirPortList,
                value: inputVal,
              })}
            />
            {isOpen ? (
              <ul>
                {airpostList.map((item: AirportData, i: number) => (
                  <li key={i} {...getItemProps({ item })}>
                    {item._source.city +
                      "-" +
                      item._source.name +
                      "-" +
                      item._source.countryname +
                      "(" +
                      item._source.code +
                      ")"}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        )}
      </Downshift> 
    </>
  );
}
