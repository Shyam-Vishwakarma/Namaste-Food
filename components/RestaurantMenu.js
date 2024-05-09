import { CDN_URL } from "../utils/constants";
// import MenuCard from "./MenuCard";
import { useParams } from "react-router-dom";
import useRestaurantDetail from "../utils/useRestaurantDetail";
import ShimmerRestaurant from "./ShimmerRestaurant";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();
  const { restaurantDetail, menuCards } = useRestaurantDetail(resId);
  const {
    name,
    avgRatingString,
    costForTwoMessage,
    cloudinaryImageId,
    totalRatingsString,
  } = restaurantDetail;
  if (restaurantDetail.length === 0) return <ShimmerRestaurant />;
  if (!menuCards || !menuCards.cards) {
    return <ShimmerRestaurant />;
  }

  // console.log(menuCards);
  const categoryCards = menuCards.cards.filter(
    (card) =>
      card.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // categoryCards.map((card) => console.log(card.card.card));
  const itemCards = menuCards?.cards[1]?.card?.card?.itemCards;
  return (
    <>
      <div className="flex justify-between bg-slate-200 px-3 shadow-lg rounded-md items-center h-[12rem] w-[45rem] m-auto mb-10">
        <div className="h-40">
          <h1 className="font-semibold text-xl">{name}</h1>
          <p className="mt-5 font-medium">
            <span className="">{avgRatingString}</span>{" "}
            <span className="text-sm font-normal"> ({totalRatingsString})</span>{" "}
            - {costForTwoMessage}
          </p>
          <p className="delivery-time">30 minutes</p>
        </div>
        <div>
          <img
            className="h-40 rounded-md w-40 object-cover shadow-lg"
            src={CDN_URL + cloudinaryImageId}
          ></img>
        </div>
      </div>
      {/* {categoryCards.map((card) => {
        return (
          <CorousolForCategory
            category={card.card.card}
            key={card.card.card.title}
          />
        );
      })} */}
      <div className="bg-slate-200 w-[45rem] mx-auto rounded shadow-md">
        {categoryCards.map((card, index) => {
          return (
            <RestaurantCategory
              key={card.card.card.title}
              category={card.card.card}
              showItem={index === showIndex ?? false}
              setShowIndex={() => setShowIndex(index)}
            />
          );
        })}
      </div>

      {/* {itemCards.map((itemCard) => {
        return (
          <MenuCard key={itemCard.card.info.id} item={itemCard.card.info} />
        );
      })} */}
    </>
  );
};
export default RestaurantMenu;
