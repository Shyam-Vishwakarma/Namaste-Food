import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // after btnName updates and re render the whole Header component but updates only btn using reconcialiation algo
  // subscribing to the cart store using useSelector
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const totalItems = Object.keys(cartItems).reduce((sum, key) => {
    return sum + cartItems[key].qty;
  }, 0);

  return (
    <>
      <div className="sticky top-0 z-10 bg-white shadow-md bg-transparent">
        <div
          className="static flex items-center justify-between bg-slate-100 shadow-md px-10
      "
        >
          <div>
            <img className="w-20 m-4" src={LOGO_URL}></img>
          </div>
          <div className="flex items-center text-lg mr-8">
            <ol>
              <Link to="/">
                <i className="mr-12 hover:text-orange-500 cursor-pointer">
                  Home
                </i>
              </Link>
              <Link to="/about">
                <i className="mr-12 hover:text-orange-500 cursor-pointer">
                  About
                </i>
              </Link>
              <Link to="/contact">
                <i className="mr-12 hover:text-orange-500 cursor-pointer">
                  Contact Us
                </i>
              </Link>
              <Link to="/grocery">
                <i className="mr-12 hover:text-orange-500 cursor-pointer">
                  Grocery
                </i>
              </Link>
              <Link to="/profile">
                <i className="mr-[4rem] hover:text-orange-500 cursor-pointer">
                  {loggedInUser}
                </i>
              </Link>
              <Link to="/cart">
                <i className="mr-[4rem] hover:text-orange-500 cursor-pointer font-medium">
                  Cart [{totalItems}]
                </i>
              </Link>
              <button
                className="bg-orange-500 text-white hover:shadow-md hover:scale-[1.01] text-sm text-center w-20 leading-6 font-medium py-2 px-3 rounded-lg"
                onClick={() =>
                  btnName === "Login"
                    ? setBtnName("Logout")
                    : setBtnName("Login")
                }
              >
                {btnName}
              </button>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
