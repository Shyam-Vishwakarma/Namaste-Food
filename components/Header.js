import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // after btnName updates and re render the whole Header component but updates only btn using reconcialiation algo
  return (
    <>
      <div className="nav--bar">
        <div>
          <img className="logo" src={LOGO_URL}></img>
        </div>
        <div>
          <ol className="nav--links">
            <Link to="/">
              <i>Home</i>
            </Link>
            <Link to="/about">
              <i>About</i>
            </Link>
            <Link to="/contact">
              <i>Contact</i>
            </Link>

            <i>Profile</i>
            <button
              className="btn"
              onClick={() =>
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
              }
            >
              {btnName}
            </button>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Header;
