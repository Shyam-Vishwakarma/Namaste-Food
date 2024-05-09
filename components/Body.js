import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
import TopRestaurantCard from "./TopRestaurantCard";
import TopRestaurantCard from "./TopRestaurantCard";
const Body = () => {
  const [restaurantListRender, setRestaurantListRender] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const restaurantList = useRestaurantList();
  const WithTopRestaurantLable = TopRestaurantCard(RestaurantCard);
  // update restaurantListRender when restaurantList changes
  useEffect(() => {
    setRestaurantListRender(restaurantList);
  }, [restaurantList]);

  const updateRestaurantList = () => {
    const resList = restaurantList.filter((res) => res.info.avgRating >= 4.4);
    setRestaurantListRender(resList);
  };
  const resetRestaurantList = () => setRestaurantListRender(restaurantList);
  const filterResList = (txt) => {
    if (txt === "") return;
    const resList = restaurantList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(txt.toLowerCase())
    );
    setRestaurantListRender(resList);
  };
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 style={{ textAlign: "center", color: "red", marginTop: "20rem" }}>
        You are offline!
      </h1>
    );
  // console.log("Body rendered");
  // return <Shimmer />;
  if (restaurantList?.length === 0) return <Shimmer />;
  return (
    <>
      <div className="ml-[3.5rem] mt-2 mb-3 flex align-middle">
        <button
          className="bg-orange-500 text-white text-sm text-center leading-6 font-medium py-2 px-3 rounded-md"
          onClick={updateRestaurantList}
        >
          Top rated restaurant
        </button>
        <input
          className="mr-5 ml-5 w-[25rem] align-middle py-2 h-10 px-3 border-2 border-slate-900 rounded-lg"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
            filterResList(searchTxt);
          }}
        ></input>
        <button
          className="bg-orange-500 text-white text-sm text-center leading-6 font-medium py-2 px-3 rounded-md mr-5"
          onClick={() => filterResList(searchTxt)}
        >
          SEARCH
        </button>
        <button
          className="bg-white text-sm text-orange-500 hover:shadow-md hover:scale-[1.01] text-center shadow-sm leading-6 font-medium py-2 px-3 rounded-md"
          onClick={resetRestaurantList}
        >
          Clear Filter
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {/* {Restaurant.map((res) => RestaurantCard(res))}; */}
        {restaurantListRender?.map((res) => {
          // if (res.info.avgRating > 4.5)
          //   return <WithTopRestaurantLable res={res} key={res.info.id} />;
          return (
            <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
              <RestaurantCard restaurant={res.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
