// import { useState } from "react";
import { useState } from "react";
import MenuCard from "./MenuCard";
const RestaurantCategory = ({ category, showItem, setShowIndex }) => {
  //   console.log(useState);
  //   const [showItems, setShowItems] = useState(false);
  //   let showItem = false;
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <>
      <div
        className="flex justify-between items-center px-3 w-[40rem] mx-auto h-12 bg-slate-200 shadow rounded font-medium text-lg border-2 mt-4 border-slate-200 from-neutral-700 cursor-pointer"
        onClick={handleClick}
      >
        <h1>
          {category.title} ({category.itemCards.length})
        </h1>
        <span>⬇️</span>
      </div>
      {showItem &&
        category.itemCards.map((item) => {
          // console.log(item.card.info);
          return <MenuCard item={item.card.info} key={item.card.info.id} />;
        })}
      {/* <MenuCard item={category.itemCards} /> */}
    </>
  );
};
export default RestaurantCategory;
