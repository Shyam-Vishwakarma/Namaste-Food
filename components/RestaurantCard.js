import { CDN_URL } from "../utils/constants";
const RestaurantCard = (restaurant) => {
  const { name, avgRating, areaName, costForTwo, cloudinaryImageId } =
    restaurant?.restaurant;
  const src = `${CDN_URL}${cloudinaryImageId}`;
  return (
    <>
      <div className="w-60 bg-white shadow-xl rounded-md m-2 h-[25rem] p-2 items-center hover:scale-[1.01] cursor-default">
        <img
          className="h-[15rem] w-[20rem] object-cover rounded-t-md shadow-md cursor-pointer"
          src={src}
          alt="Image"
        ></img>
        <h2 className="mt-2 font-medium">{name}</h2>
        <h3>
          <span className="font-medium">{avgRating}</span> avg rating
        </h3>
        <h3>{areaName}</h3>
        <h3>{restaurant.restaurant.sla.deliveryTime} Minutes</h3>
        <h3 className="font-semibold  ">{costForTwo}</h3>
      </div>
    </>
  );
};
export default RestaurantCard;
