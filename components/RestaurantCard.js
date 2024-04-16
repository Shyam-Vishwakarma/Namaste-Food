import { CDN_URL } from "../utils/constants";
const RestaurantCard = (restaurant) => {
  const { name, avgRating, areaName, costForTwo, cloudinaryImageId } =
    restaurant?.restaurant;
  const src = `${CDN_URL}${cloudinaryImageId}`;
  return (
    <>
      <div className="res--card">
        <img className="res--img" src={src}></img>
        <h2 className="res-name txt">{name}</h2>
        <h3 className="res-rating txt">{avgRating} avg rating</h3>
        <h3 className="res-details txt">{areaName}</h3>
        <h3 className="res-details txt">
          {restaurant.restaurant.sla.deliveryTime} Minutes
        </h3>
        <h3 className="res-price txt">{costForTwo}</h3>
      </div>
    </>
  );
};
export default RestaurantCard;
