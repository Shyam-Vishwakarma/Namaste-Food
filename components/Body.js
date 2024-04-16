import RestaurantCard from "./RestaurantCard";
import { Restaurant } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [restaurantListRender, setRestaurantListRender] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  const updateRestaurantList = () => {
    const resList = restaurantList.filter((res) => res.info.avgRating >= 4.4);
    setRestaurantListRender(resList);
  };
  const resetRestaurantList = () => setRestaurantListRender(restaurantList);
  const filterResList = (txt) => {
    if (txt === "") return;
    // setSearchTxt("");
    const resList = restaurantList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(txt.toLowerCase())
    );
    setRestaurantListRender(resList);
  };

  useEffect(() => {
    console.log("useEffect");
    fetchData();
  }, []);

  const fetchData = async function () {
    const data = await fetch(RES_API_URL);
    const jsonData = await data.json();
    const res =
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    console.log(res);
    setRestaurantList(res);
    setRestaurantListRender(res);
  };

  console.log("Body rendered");
  if (restaurantList?.length === 0) {
    return (
      <>
        <Shimmer />
      </>
    );
  }
  return (
    <>
      <div className="filter-container">
        <button className="btn" onClick={updateRestaurantList}>
          Top rated restaurant
        </button>
        <input
          className="searchBox"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
            filterResList(searchTxt);
          }}
        ></input>
        <button className="btn" onClick={() => filterResList(searchTxt)}>
          SEARCH
        </button>
        <button className="btn" onClick={resetRestaurantList}>
          Clear Filter
        </button>
      </div>
      <div className="res--container">
        {/* {Restaurant.map((res) => RestaurantCard(res))}; */}
        {restaurantListRender?.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            <RestaurantCard restaurant={res.info} />
          </Link>
        ))}
      </div>
    </>
  );
};
export default Body;
