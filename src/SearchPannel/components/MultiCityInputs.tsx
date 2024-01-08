import { MultiCityComponentProps } from "@/Interfaces";
import DatePicker from "react-datepicker";
import DownShift from "./DownShift";

type LoopLengthElementType = number;

interface MultiCityInputs extends MultiCityComponentProps {
    index: number,
    loopLength: LoopLengthElementType[],
    setLoopLength: React.Dispatch<React.SetStateAction<LoopLengthElementType[]>>
}




export default function MultiCityInputs({ MultiCitySearchData, setMultiCitySearchData, loopLength, setLoopLength, index }: MultiCityInputs) {

    const handleDate = () => {


    }
    return (
        <>


            <div className="field_row hm_multycity">
                <div className="field_clm_3">
                    <div className="form-group location_icon">
                        <DownShift searchData ={MultiCitySearchData} setSearchData ={setMultiCitySearchData} index ={index} isFromCity={true} isMultiCity={true} />
                    </div>
                </div>
                <div className="field_clm_3">
                    <div className="form-group location_icon">
                    <DownShift searchData ={MultiCitySearchData} setSearchData ={setMultiCitySearchData} index ={index} isFromCity={false}  isMultiCity={true}/>
                    </div>
                </div>
                <div className="field_clm_2">
                    <div className="form-group calendar_icon">
                        <label>Departure</label>

                        <DatePicker
                            onChange={handleDate}
                        />
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