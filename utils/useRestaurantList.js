import { useEffect, useState } from "react";
import { RES_API_URL } from "../utils/constants";

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(RES_API_URL);
      const jsonData = await data.json();
      const res =
        jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      setRestaurantList(res);
    } catch (err) {
      console.log(err);
    }
  };
  return restaurantList;
};
export default useRestaurantList;
