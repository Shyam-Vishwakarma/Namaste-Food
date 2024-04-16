import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import { RES_MENU_URL } from "../utils/constants";
import MenuCard from "./MenuCard";
import { useParams } from "react-router-dom";
import ShimmerRestaurant from "./ShimmerRestaurant";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurantDetail, setRestaurantDetail] = useState([]);
  const [menuCards, setMenuCards] = useState([]);
  const fetchMenu = async () => {
    const data = await fetch(RES_MENU_URL + resId);
    const resDetail = await data.json();
    //   console.log(resDetail.data.cards[2].card.card.info);
    setRestaurantDetail(resDetail.data.cards[2].card.card.info);
    setMenuCards(resDetail.data.cards[4].groupedCard.cardGroupMap.REGULAR);
    // console.log(menuCards.cards[1].card.card.itemCards);
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  const {
    name,
    avgRatingString,
    costForTwoMessage,
    cloudinaryImageId,
    totalRatingsString,
  } = restaurantDetail;
  //   const deliveryTime =
  //     restaurantDetail.nearestOutletNudge.nearestOutletInfo.siblingOutlet.sla
  //       .deliveryTime;
  if (restaurantDetail.length === 0) return <ShimmerRestaurant />;
  return (
    <>
      <div className="container res-container">
        <div>
          <h1 className="name">{name}</h1>
          <p className="details">
            {avgRatingString}{" "}
            <span className="ratingNumbers"> ({totalRatingsString})</span> -{" "}
            {costForTwoMessage}
          </p>
          <p className="delivery-time">30 minutes</p>
        </div>
        <div>
          <img src={CDN_URL + cloudinaryImageId} className="image"></img>
        </div>
      </div>
      {menuCards &&
        menuCards.cards &&
        menuCards.cards[1] &&
        menuCards.cards[1].card.card.itemCards &&
        menuCards.cards[1].card.card.itemCards.map((itemCard) => {
          return (
            <MenuCard key={itemCard.card.info.id} item={itemCard.card.info} />
          );
        })}

      {/* <MenuCard item={menuCards.cards[1].card.card.itemCards[0].card.info} /> */}
    </>
  );
};
export default RestaurantMenu;
