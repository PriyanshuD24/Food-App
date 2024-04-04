import { RATING_STAR, RES_LOGO, VEG_SIGN } from "../utils/cdn_url";

let Card = (props) => {
  // console.log(props);

  const { cloudinaryImageId, name, avgRatingString, sla, areaName, cuisines } = props?.data?.info;
  //   console.log(isVeg , myData.name);

  return (
    <div className="card  w-80  p-2 hover:cursor-pointer hover:scale-95 transition  duration-200  ">
      <div className="relative">
        <img
          className="res-icon rounded-xl w-full h-[250px]  mb-3 object-cover"
          src={RES_LOGO + cloudinaryImageId}
          alt=""
        />
        {/* <div className="discount rounded-xl text-white bg-gradient-to-b from-[rgba(255,255,255,0)] to-[#000000d2] z-10 absolute bottom-0 w-full h-[120px]  "><span className="absolute bottom-0  text-2xl mx-2 mb-1 font-bold ">
{myData.aggregatedDiscountInfoV3.header} {myData.aggregatedDiscountInfoV3.subHeader}</span></div> */}
      </div>

      <div className="res-name text-xl font-bold  text-ellipsis whitespace-nowrap  overflow-hidden">
        {name}
      </div>

      <div className="res-rating flex  items-center ">
        <span>
          <img src={RATING_STAR} className="w-5 " />
        </span>
        <span className="rating mr-4 ml-1">{avgRatingString}</span>
        <span className="  "> {sla.slaString}</span>
      </div>

      <div className="res-cusine text-[#02060c60] dark:text-[#dedede] duration-100 text-ellipsis whitespace-nowrap  overflow-hidden ">
        {cuisines.join(", ")}
      </div>
      <div className="res-location text-[#02060c60] dark:text-[#dedede] duration-100 ">
        {areaName}{" "}
      </div>
    </div>
  );
};

//higher order component (input and output = component)
export const addVegSign = (Card) => {
  return (props) => {
    return (
      <div className="relative ">
        <div className="w-10 absolute z-20 m-4 right-0 shadow-lg  ">
          <img src={VEG_SIGN} alt="veg" className="" />
        </div>
        <Card {...props} />
      </div>
    );
  };
};

export default Card;
