import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestMenu from "../utils/useRestMenu.";
import RestMenuCategories from "./RestMenuCategories";
// import Collapsible from 'react-collapsible';
// import { RES_LOGO } from "../utils/cdn_url";

const RestMenu = () => {
  var { resId } = useParams();
  const resMenu = useRestMenu(resId);
  const [isVisible, setIsVisible] = useState(null); // index that is visible

  useEffect(() => {
    window.scrollTo(0, 0); // to scroll on top
  }, []);

  if (resMenu == null || resMenu == undefined) return <Shimmer />;
  const len = resMenu.length - 1;

  return (
    <div className="max-w-[800px] mx-auto px-4">
      {/* name of rest*/}
      <div className=" font-extrabold text-4xl pb-6 ">{resMenu[len]?.card?.card?.name}</div>

      {resMenu.map((arr, index) => {
        if (
          arr?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) {
          // console.log("hi");
          return (
            <RestMenuCategories
              data={arr?.card?.card}
              setIsVisible={() => {
                return index == isVisible ? setIsVisible(null) : setIsVisible(index);
              }}
              open={isVisible}
              idx={index}
            />
          );
        }
      })}
    </div>
  );
};
export default RestMenu;
