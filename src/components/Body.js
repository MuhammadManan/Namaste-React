import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer.js";
import { useState, useEffect } from "react";
import { api_URL } from "../utils/constants.js";

export const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  // console.log(restaurantList);
  const [searchText, setSearchText] = useState("");
  // console.log(searchText);

  useEffect(() => {
    fetchData();
    // console.log("useEffect");
  }, []);

  const fetchData = async () => {
    const restaurantApiData = await fetch(api_URL);

    const data = await restaurantApiData.json();
    // console.log(data);

    setRestaurantList(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log("fetchAPi");
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter-container">
        <button
          className="topRate-Btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter Restaurant"
            maxLength={20}
            className="search-bar"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const output = restaurantList.filter((res) => {
                // console.log(res.info.name.toLowerCase());
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setRestaurantList(output);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
