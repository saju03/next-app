import React from "react";

export default function TravellerBox({
  setOpen,
  isOpen,
  searchData,
  setSearchData,
}: any) {

// use redux to store the session data for a backups 


  const handleTravelerPlus = (pax: number) => {
    switch (pax) {
      case 0:
                if (searchData.adult + searchData.child + searchData.infant >= 9) {
                  alert("maax num pax");
                } else {
                  setSearchData({ ...searchData, adult: searchData.adult + 1 });
                }
        break;

        case 1:if (searchData.adult + searchData.child + searchData.infant >= 9) {
                    alert("maax num pax");
                }else{
                    setSearchData({ ...searchData, child: searchData.child + 1 });
                }

            break;

      case 2:if (searchData.adult + searchData.child + searchData.infant >= 9) {
                alert("maax num pax");
            }else{
                if(searchData.adult<=searchData.infant){
                    alert('infant should be less than adult')
                }else{
                    setSearchData({ ...searchData, infant: searchData.infant + 1 });
                }
            }
        break;
        default:
    }
  };
  const handleTravelerMinus = (pax: number) => {
    switch (pax) {
        case 0:
                  if (searchData.adult  <= 1) {
                    alert("min one adult required ");
                  } else {
                    setSearchData({ ...searchData, adult: searchData.adult - 1 });
                  }
          break;
  
          case 1:if (searchData.child  <= 0) {
                      alert("its 0");
                  }else{
                      setSearchData({ ...searchData, child: searchData.child - 1 });
                  }
  
              break;
  
        case 2:if (searchData.infant <= 0) {
                  alert("its 0");
              }else{
                  
                      setSearchData({ ...searchData, infant: searchData.infant - 1 });
                  
              }
          break;
          default:
      }

  };

  return (
    <>
      <div
        className="psngerBox"
        id="trvlersClass"
        style={{ display: isOpen ? "" : "none" }}
      >
        <button
          type="button"
          className="close"
          onClick={() => setOpen(false)}
        />
        <div className="trvelrsList">
          <h4>TRAVELLERS</h4>
          <div className="d-flex traveller_rows justify-content-between">
            <div className="travelersLHalf">
              <p>
                Adults <span>12+ Years</span>
              </p>
            </div>
            <div className="travelersRHalf d-flex">
              <button
                className="btn text-center  plus-minus-button"
                type="button"
                onClick={() => handleTravelerMinus(0)}
              >
                {" "}
                -{" "}
              </button>
              <div className="psnrs_travel"> {searchData.adult} </div>
              <button
                className="btn text-center  plus-minus-button"
                type="button"
                onClick={() => handleTravelerPlus(0)}
              >
                {" "}
                +
              </button>
            </div>
          </div>
          <div className="d-flex traveller_rows justify-content-between">
            <div className="travelersLHalf">
              <p>
                Children <span>2 - 11 Years</span>
              </p>
            </div>
            <div className="travelersRHalf d-flex">
              <button
                className="btn text-center  plus-minus-button"
                type="button"
                onClick={() => handleTravelerMinus(1)}
              >
                {" "}
                -{" "}
              </button>
              <div className="psnrs_travel">{searchData.child} </div>
              <button
                className="btn text-center  plus-minus-button"
                type="button"
                onClick={() => handleTravelerPlus(1)}
              >
                {" "}
                +
              </button>
            </div>
          </div>
          <div className="d-flex traveller_rows justify-content-between">
            <div className="travelersLHalf">
              <p>
                Infants <span>0 - 2 Years</span>
              </p>
            </div>
            <div className="travelersRHalf d-flex">
              <button
                className="btn text-center  plus-minus-button"
                type="button"
                onClick={() => handleTravelerMinus(2)}
              >
                {" "}
                -{" "}
              </button>
              <div className="psnrs_travel"> {searchData.infant} </div>
              <button
                className="btn text-center  plus-minus-button"
                type="button"
                onClick={() => handleTravelerPlus(2)}
              >
                {" "}
                +
              </button>
            </div>
          </div>
        </div>
        <div className="selectCabn">
          <div className="form-group down_arrow">
            <select className="form-control  " id=" ">
              <option value="Economy">Economy</option>
              <option value="PremiumEconomy"> Premium Economy</option>
              <option value="BusinessClass"> Business Class</option>
              <option value="FirstClass">First Class</option>
            </select>
          </div>
        </div>
        <div className="psngr_applyBox">
          <button className="btn btn-block">Apply</button>
        </div>
      </div>
    </>
  );
}
