import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1LoXRyk9_UvAUXsUY5Fcmdg9G7xL13jyAwA&s" />
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

const RestaurantCard = ({ resName, cuisine }) => {
  // console.log(props);
  return (
    <div className="resCard-container">
      <div className="image-container">
        <img
          alt="biryani"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/qslcz6tpi4e1e51pzqnr"
        />
      </div>
      <div className="desc-container">
        <h3>{resName}</h3>
        <h4>{cuisine}</h4>
        <h4>4.4 stars</h4>
        <h4>38 minutes</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <div className="search-container">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="The Spice Garden"
          cuisine="Indian, Thai, Mexican, Italian cuisine"
        />
        <RestaurantCard
          resName="Sizzle & Spice Bistro"
          cuisine="American, Mediterranean, Japanese, French cuisine"
        />
        <RestaurantCard
          resName="Flavors of the World"
          cuisine="Chinese, Greek, Brazilian, Lebanese cuisine"
        />
      </div>
    </div>
  );
};

const MyApp = () => {
  return (
    <div className="main-container">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyApp />);
