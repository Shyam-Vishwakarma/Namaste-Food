import { useSelector } from "react-redux";
import CartItem from "./CartItem";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const IDs = Object.keys(cartItems);
  if (IDs.length === 0)
    return (
      <h1 className="text-center mt-40 text-orange-600">Cart is Empty!</h1>
    );
  return (
    <>
      {IDs.map((id) => {
        const item = cartItems[id].item;
        const qty = cartItems[id].qty;
        return <CartItem key={item.id} item={item} qty={qty} />;
      })}
    </>
  );
};
export default Cart;
