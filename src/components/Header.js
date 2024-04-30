import { logo_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");
  const statusInternet = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className=" header-container flex justify-between mb-3 bg-rose-100 shadow-lg /*bg-pink-100 border-2.shadow-lg.border-black*/">
      <div className="logo-contianer ">
        <Link to="/">
          <img className=" w-40  " src={logo_URL} />
        </Link>
      </div>
      <div className="nav-container w-2/4 ">
        <ul className=" flex justify-between  items-center /*border-2.border-gray-900*/  mx-8 mt-8 py-10 px-2 font-medium">
          <li className="hover:text-amber-600">
            Status~{statusInternet ? "Online🟢" : "Offline🔴"}
          </li>
          <li className="hover:text-amber-600">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-amber-600">
            <Link to="/about">About Us</Link>
          </li>
          <li className="hover:text-amber-600">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hover:text-amber-600">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="hover:text-amber-600">Cart</li>
          <li className="hover:text-amber-600">
            <button
              className="login-Btn px-1 border-2 border-gray-600 opacity-70 rounded-md bg-slate-200 hover:bg-slate-300"
              onClick={() => {
                btnNameReact === "login"
                  ? setBtnNameReact("logout")
                  : setBtnNameReact("login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
          <li className="hover:text-amber-600 px-2 font-medium">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
