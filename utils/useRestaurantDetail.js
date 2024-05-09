import { useEffect, useState } from "react";
import { RES_MENU_URL } from "../utils/constants";

const useRestaurantDetail = (resId) => {
  // fetchdata
  // return {resDetail, menuCards};
  const [restaurantDetail, setRestaurantDetail] = useState([]);
  const [menuCards, setMenuCards] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(RES_MENU_URL + resId);
      const resDetail = await data.json();
      setRestaurantDetail(resDetail.data.cards[2].card.card.info);
      setMenuCards(resDetail.data.cards[4].groupedCard?.cardGroupMap?.REGULAR);
    } catch (err) {
      console.log(err);
    }
  };
  return { restaurantDetail, menuCards };
};
export default useRestaurantDetail;
