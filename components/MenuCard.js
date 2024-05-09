import { useDispatch } from "react-redux";
import { ITEM_IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const MenuCard = ({ item }) => {
  const { name, description, defaultPrice, imageId } = item;
  const truncatedDescription = description?.split(" ").slice(0, 20).join(" ");
  const formattedDescription =
    description?.split(" ").length > 20
      ? truncatedDescription + "..."
      : truncatedDescription;
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <>
      <div className="flex justify-between bg-gray-200 px-3 py-2 bottom-2 items-center h-[12rem] w-[40rem] mx-auto border-b-4 border-gray-100">
        <div className="h-40 w-[22rem]">
          <h2 className="font-semibold text-lg">{name}</h2>
          <h3 className="font-medium">₹{(defaultPrice || item.price) / 100}</h3>
          <p className="font-thin mt-5">{formattedDescription}</p>
        </div>
        <div className="image-container mt-4">
          <img
            src={ITEM_IMG_URL + imageId}
            className="h-40 rounded-md w-40 object-cover shadow-lg"
            alt="Item"
          />
          <button
            className="-translate-y-4 bg-white translate-x-12 font-medium text-orange-500 h-8 shadow-md rounded-md w-14 active:bg-orange-500 active:text-white "
            onClick={() => handleAddItem(item)}
          >
            ADD
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};
export default MenuCard;
