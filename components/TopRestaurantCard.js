import RestaurantCard from "./RestaurantCard";

const TopRestaurantCard = (RestaurantCard) => {
  return (res) => (
    <>
      <div>
        <label className=" text-sm font-semibold bg-orange-300 px-2 rounded py-2 w-{2rem} translate-y-16">
          Top Restaurant
        </label>
        <RestaurantCard restaurant={res.res.info} />
      </div>
    </>
  );
};

export default TopRestaurantCard;
