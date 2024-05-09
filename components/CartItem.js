import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateItemQty } from "../utils/cartSlice";
import { ITEM_IMG_URL } from "../utils/constants";
const CartItem = ({ item, qty }) => {
  const { id, name, defaultPrice, imageId } = item;
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const changeQty = (num, id) => {
    dispatch(updateItemQty({ id, num }));
  };
  const handleRemoveAll = (id) => {
    dispatch(removeItem({ id }));
  };
  return (
    <>
      <div className="flex justify-between bg-gray-200 px-3 py-2 bottom-2 items-center h-[12rem] w-[40rem] mx-auto border-b-4 border-gray-100">
        <div className="h-40 w-[22rem]">
          <h2 className="font-semibold text-lg">{name}</h2>
          <h3 className="font-medium mt-5">
            ₹{(defaultPrice || item.price) / 100}
          </h3>
          <h3 className="font-medium text-lg mt-2">
            Quantity :{" "}
            <button
              className="mr-2 w-[4rem], h-[2rem],text-sm rounded-md shadow-sm border-2 border-slate-300 bg-slate-100"
              onClick={() => changeQty(-1, id)}
            >
              ➖
            </button>{" "}
            {qty}
            <button
              className=" ml-2 w-[4rem], h-[2rem],text-sm rounded-md shadow-sm border-2 border-slate-300 bg-slate-100"
              onClick={() => changeQty(1, id)}
            >
              ➕
            </button>
          </h3>
          <button className="mt-4 w-[6rem] h-[2rem] rounded shadow bg-orange-500 text-white">
            Buy Now
          </button>
          <button
            className="ml-[2rem] mt-4 w-[6rem] h-[2rem] rounded shadow bg-white text-orange-500 "
            onClick={() => handleRemoveAll(id)}
          >
            Remove
          </button>
        </div>
        <div className="image-container mt-4">
          <img
            src={ITEM_IMG_URL + imageId}
            className="h-40 rounded-md w-40 object-cover shadow-lg"
            alt="Item"
          />
        </div>
      </div>
      <hr />
    </>
  );
};
export default CartItem;
