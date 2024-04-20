import { logo_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo_URL} />
      </div>
      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
