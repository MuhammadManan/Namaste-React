import RestaurantCard, { withDiscountLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer.js";
import { useState, useEffect, useContext } from "react";
import { api_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";

export const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);

  const RestaurantCardDiscount = withDiscountLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const restaurantApiData = await fetch(api_URL);
    const data = await restaurantApiData.json();
    setRestaurantList(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterData(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const internetStatus = useOnlineStatus();

  if (internetStatus === false)
    return (
      <div className="m-8 border-2 border-gray-700 rounded-xl p-2">
        <h1 className="text-2xl font-semibold">Looks like you're Offline!!</h1>
        <h2 className="font-medium">Please check your internet connection.!</h2>
      </div>
    );

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter-container flex justify-between">
        <div className="h-16 mt-2 flex gap-20 ">
          <button
            className="topRate-Btn ml-8 bg-rose-100 border-2 border-gray-600 rounded-lg p-2 font-semibold hover:bg-rose-200 hover:text-rose-400"
            onClick={() => {
              const filteredList = restaurantList.filter(
                (res) => res.info.avgRating > 4
              );
              setFilterData(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
          <div className="mt-3 mr-3">
            <label className="p-2 text-l mr-2 rounded-md bg-rose-100 border-2 border-slate-700 font-semibold">
              User{" "}
            </label>
            <input
              className="border-2 rounded-lg border-gray-900 p-2"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>

        <div className="search-container mr-8 py-2 ">
          <input
            type="text"
            placeholder="Enter Restaurant"
            maxLength={20}
            className="search-bar border-2 border-gray-800 mr-2 p-1 rounded active:bg-rose-100"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn border-2 border-gray-600 p-1 bg-rose-100 hover:bg-rose-200 hover:text-rose-400 rounded-lg"
            onClick={() => {
              const filterOutput = restaurantList.filter((res) => {
                return res?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilterData(filterOutput);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="res-container mt-3 mr-8 ml-8 flex flex-wrap relative">
        {filterData.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {JSON.stringify(restaurant?.info?.aggregatedDiscountInfoV2) ===
            "{}" ? (
              <RestaurantCard resData={restaurant} />
            ) : (
              <RestaurantCardDiscount resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
