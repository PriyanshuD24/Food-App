import { useEffect, useState } from "react";
import { RES_DATA } from "./cdn_url";
import { MENU_MOCK_DATA } from "./mockData";
import { RES_MOCK_DATA } from "./mockData";

const useResData = () => {
  // console.log("inside my custom hooks");
  const [list, setList] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    // console.log("fetching data");
    let resDataJSON;
    let resData = await fetch(RES_DATA)
      .then(async (val) => (resDataJSON = await val.json()))
      .catch((err) => (resDataJSON = RES_MOCK_DATA));
    // resDataJSON = await resData.json();
    let data = resDataJSON?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    let data2 = resDataJSON?.data?.cards.filter(
      (res) => res?.card?.card?.id == "restaurant_grid_listing"
    )[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    // console.log(data2);
    // let chkData = await fetch("https://www.swiggy.com/dapi/restaurants/list/update", {
    //   credentials: "include",
    //   body: '{"lat":28.4089123,"lng":77.3177894,"nextOffset":"COVCELQ4KIDAuc6q2JOxbTCnEw==","widgetOffset":{"NewListingView_category_bar_chicletranking_TwoRows":"","NewListingView_category_bar_chicletranking_TwoRows_Rendition":"","collectionV5RestaurantListWidget_SimRestoRelevance_food_seo":"10","inlineFacetFilter":"","restaurantCountWidget":""},"filters":{},"seoParams":{"seoUrl":"https://www.swiggy.com/","pageType":"FOOD_HOMEPAGE","apiName":"FoodHomePage"},"page_type":"DESKTOP_WEB_LISTING","_csrf":"xMtPPKeGppH7-ybrADDQf0wY8H0O3EnmPeJ2bjZs"}',
    //   method: "POST",

    // });
    // let json2=await chkData.json();
    // console.log(chkData);
    setList(data2);
  }

  return list;
};

export default useResData;
