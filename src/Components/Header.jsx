import { useState } from "react";
import { LOGO_URL } from "../Utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [account, setAccount] = useState("login");
  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="food-logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">contact us</Link>
          </li>
          <li>
            <Link to="/cart">cart</Link>
          </li>
          <button
            className="account"
            onClick={() =>
              account === "login" ? setAccount("logout") : setAccount("login")
            }
          >
            {account}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
