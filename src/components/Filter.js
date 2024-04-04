import { useState } from "react";
import useResData from "../utils/useResData";

const Filter = (props) => {
  const { filteredListOfRest, setfilteredListOfRest } = props.Data;
  let listOfRest = useResData();
  let [inputValue, setInputValue] = useState("");
  let [showBestRest, setShowBestRest] = useState(false);
  //console.log(props.Data, listOfRest);
  if (listOfRest != null && filteredListOfRest == null) {
    setfilteredListOfRest(listOfRest);
  }

  return (
    <div className="buttons filter flex items-center justify-center flex-wrap-reverse mb-4 gap-4 ">
      <div>
        <button
          variant="contained"
          className="hover:cursor-pointer uppercase hover:shadow-sm px-4 py-1.5 rounded text-white m-10 bg-[#F16667] hover:bg-[#dd4747]  dark:bg-[#dd4747]  dark:hover:bg-[#F16667] transition-colors duration-300 ease-in-out"
          onClick={() => {
            setInputValue("");
            if (showBestRest == false) {
              setfilteredListOfRest(listOfRest.filter((val) => val.info.avgRating > 4.0));
              setShowBestRest(true);
            } else {
              setfilteredListOfRest(listOfRest);
              setShowBestRest(false);
            }
          }}
        >
          {showBestRest==false ? "Best" : "All"} restaurants
        </button>
      </div>

      <div className=" search ">
        <input
          className="ml-5 mr-1 h-10 bg-slate-200 dark:text-black  px-3 outline-none rounded-lg "
          type="text"
          placeholder="Search Hotels"
          value={inputValue}
          onChange={(e) => {
            console.log(e.target.value);
            setInputValue(e.target.value);
            setfilteredListOfRest(
              listOfRest.filter((res) => {
                return res.info.name.toLowerCase().includes(e.target.value.toLowerCase());
              })
            );
          }}
          // onKeyUp={(e) => {
          //   if (e.code == "Enter") {
          //     setfilteredListOfRest(
          //       listOfRest.filter((res) => {
          //         return res.info.name.toLowerCase().includes(inputValue.toLowerCase());
          //       })
          //     );
          //   }
          // }}
        />
        {/* 
        <button
          className="hover:cursor-pointer ml-1 text-xl"
          data-testid="searchBtn"
          onClick={() => {
            setfilteredListOfRest(
              listOfRest.filter((res) => {
                return res.info.name.toLowerCase().includes(inputValue.toLowerCase());
              })
            );
          }}
        >
          &#128269;
        </button> */}
      </div>
    </div>
  );
};
export default Filter;
