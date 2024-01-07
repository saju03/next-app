import axios from "axios";
import React, { useState } from "react";
import Downshift from "downshift";
export default function DownShift({searchData,setSearchData,fromCity}:any) {
  const [airpostList, setAirportList] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const getAirPortList = async (e: any) => {
    if(fromCity&&e.target.value==''){
        setSearchData({...searchData,fromCity:''})
    }
    
    if(!fromCity&&e.target.value==''){
        setSearchData({...searchData,toCity:''})
    }
    setInputVal(e.target.value);
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_ElasticUrl}Data/GetAirPort?value=${e.target.value}&culture=1&size=10`
    );
    setAirportList(data.hits.hits);
  };

  const handleChange = (e: any) => {
    if(fromCity){
        setSearchData({...searchData,fromCity:e})
    }else{
        setSearchData({...searchData,toCity:e})
    }
  
    setInputVal(e._source.city +"-" +e._source.name +"-" +e._source.countryname +"(" +e._source.code +")");
  };
  return (
    <>
      <Downshift onChange={handleChange} itemToString={(item)=>item._source.city +"-" +item._source.name +"-" +item._source.countryname +"(" +item._source.code +")"}>
        {({ getInputProps, getItemProps, isOpen, inputValue }) => (
          <div>
            <label>{fromCity?"Leaving from":"Going to"}</label>
            <input
              {...getInputProps({
                placeholder: "Select an option",
                onChange: getAirPortList,
                value: inputVal,
              })}
            />
            {isOpen ? (
              <ul>
                {airpostList.map((item: any, i: number) => (
                  <li key={i} {...getItemProps({ item })}>
                    {item._source.city +"-" +item._source.name +"-" +item._source.countryname +"(" +item._source.code +")"}
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
