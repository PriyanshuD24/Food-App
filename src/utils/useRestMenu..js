import { useEffect, useState } from "react";
import { MENU_API } from "./cdn_url";
import { MENU_MOCK_DATA } from "./mockData";

const useRestMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    var json;
    const data = await fetch(MENU_API + resId)
      .then(async (val) => (json = await val.json()))
      .catch((err) => (json = MENU_MOCK_DATA));
    // json = await data.json();
    //console.log(json);

    // const cards = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const cards = json?.data?.cards.filter((res) => {
      return "groupedCard" in res;
    });

    setResMenu(cards[0].groupedCard?.cardGroupMap?.REGULAR?.cards);
  }
  // console.log(resMenu);
  return resMenu;
};

export default useRestMenu;
