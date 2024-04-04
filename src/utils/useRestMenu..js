import { useEffect, useState } from "react";
import { MENU_API } from "./cdn_url";

const useRestMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
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
