import Card, { addVegSign } from "./Card";
import { useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
// import { RES_DATA } from "../utils/cdn_url";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";
import Filter from "./Filter";

//cardData[i].info.[name,id,cloudinaryImageId,cuisines,avgRatingString,.sla.slaString,locality,areaName]
// card data from swiggy

let Cardcontainer = () => {

  let [filteredListOfRest, setfilteredListOfRest] = useState(null);
 // console.log("im in body" ,filteredListOfRest)
  const status = useOnlineStatus();
  const CardWithVeg = addVegSign(Card);

  if (status == false) {
    return <Offline />;
  }



  return (
    <div className=" mx-auto p-3  ">
      <Filter Data={{ filteredListOfRest, setfilteredListOfRest }} />
      {filteredListOfRest == null ? (
        <Shimmer />
      ) : (
        <div className="Cardcontainer grid  grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-6  justify-items-center items-center ">
          {filteredListOfRest.map((res) => {
            // console.log(res?.info?.veg, res.info.name);
           // console.log(res);
            return (
              <Link to={"/restraurant/" + res.info.id} data-testid="rescard">
                
                  {res?.info?.veg ? (
                    <CardWithVeg key={res?.info?.id} data={res} />
                  ) : (
                    <Card key={res?.info?.id} data={res} />
                  )}
                
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Cardcontainer;
