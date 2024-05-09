export const useTopRestaurants = (restaurantList) => {
  return restaurantList.filter((res) => res.info.avgRating >= 4.4);
};
