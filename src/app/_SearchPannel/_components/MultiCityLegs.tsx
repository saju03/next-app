import { MinDateState, MultiCityComponentProps, MultiCitySearchDataType, OneWayRoundSearchDataType, TwoSearchTypes } from "@/Interfaces";
import DatePicker from "react-datepicker";
import DownShift from "./DownShift";
import "react-datepicker/dist/react-datepicker.css";

type LoopLengthElementType = number;

interface MultiCityInputs extends MultiCityComponentProps {
    index: number,
    loopLength: LoopLengthElementType[],
    setLoopLength: React.Dispatch<React.SetStateAction<LoopLengthElementType[]>>
    minDate:MinDateState,
    setMinDate: React.Dispatch<React.SetStateAction<MinDateState>>
}




export default function MultiCityLegs({ MultiCitySearchData, setMultiCitySearchData, loopLength, setLoopLength, index,minDate,setMinDate }: MultiCityInputs) {
    
    const setMinDates = (date:Date)=>{

        for (let i = index; i<=4; i++) {
           setMinDate(prevMinDate => {
            
            const updatedMinDate = { ...prevMinDate, [`leg${i+1}`]: date };
            return updatedMinDate;
          })
           setMultiCitySearchData(MultiCitySearchData => {
            const updatedMinDate = { ...MultiCitySearchData, [`legDate${i}`]: date };
            return updatedMinDate;
          })
            
        }


    }
    
    const selectedDatePrefix = `legDate${index}` as keyof MultiCitySearchDataType
    const handleDate = (date:Date) => {
            
        setMinDates(date);
        

    }
    return (
        <>


            <div className="field_row hm_multycity">
                <div className="field_clm_3">
                    <div className="form-group location_icon">
                        <DownShift searchData={MultiCitySearchData} setSearchData={setMultiCitySearchData} index={index} isFromCity={true} isMultiCity={true} />
                    </div>
                </div>
                <div className="field_clm_3">
                    <div className="form-group location_icon">
                        <div>

                        <DownShift searchData={MultiCitySearchData} setSearchData={setMultiCitySearchData} index={index} isFromCity={false} isMultiCity={true} />
                        </div>
                    </div>
                </div>
                <div className="field_clm_2">
                    <div className="form-group calendar_icon">
                        <label>Departure</label>
                        <DatePicker selected={MultiCitySearchData[selectedDatePrefix]} onChange={handleDate} minDate={index == 1 ? new Date() : minDate[`leg${index}`]}/>

                    </div>
                </div>

                <div className="field_clm_3 field_clm_3_psngr pt-4">
                    {index == loopLength.length ? <div className=" d-flex">

                        {index == 4 ? " " : <button
                            className="button_dark  modifyplusBtn "
                            type="button"
                            onClick={() => {
                                if (loopLength.length < 4) {
                                    setLoopLength((prev) => [...prev, loopLength[loopLength.length - 1] + 1])

                                }
                            }}
                        >
                            <i className="plusBtn"> </i>
                        </button>
                        }

                        {index == 2 ? "" : <button
                            onClick={() => {
                                if (loopLength.length > 2)
                                    setLoopLength((prev): any => {

                                        if (prev) {
                                            const newArray = [...prev];
                                            newArray.pop();
                                            return newArray;
                                        }

                                    })
                            }}
                            className="button_dark  modifyplusBtn "
                            type="button"
                        >
                            <i className="minusBtn"> </i>
                        </button>}

                    </div> : ''}

                </div>
            </div>

        </>
    )
}