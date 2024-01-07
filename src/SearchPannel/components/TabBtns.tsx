import React from 'react'

export default function TabBtns({searchData,setSearchData}:any) {
  return (
    <div>
         <div className="flight_tabs_wrpr">
          <ul
            className="flight_tabs d-flex flex-wrap"
            id="onewayround_requestType"
          >
            <li>
              <a href="#;" id="HOneWay" className={`OneWayTab ${searchData.searchType=='OneWay'?"active":''}`} onClick={()=>setSearchData({...searchData,searchType:'OneWay'})}>
                {" "}
                
                One Way
              </a>
            </li>
            <li>
              <a href="#;" id="HTwoWay" className={`TwoWayTab ${searchData.searchType=='RoundTrip'?"active":''}`} onClick={()=>setSearchData({...searchData,searchType:'RoundTrip'})}>
                Round Trip
              </a>
            </li>
            <li>
              <a href="#" id="HMultiCity" className={`TwoWayTab ${searchData.searchType=='MultiCity'?"active":''}`}  onClick={()=>setSearchData({...searchData,searchType:'MultiCity'})}>
                Multi City{" "}
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}
