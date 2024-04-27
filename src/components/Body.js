import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer.js";
import { useState, useEffect } from "react";
import { api_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

export const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchText, setSearchText] = useState("");

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
    setFilterData(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(
    //   "data:",
    //   data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    // const dataCheck =
    //   data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants;
    // for (let i = 0; i < dataCheck.length; i++) {
    //   console.log(`Data ${i} : ${dataCheck[i]?.info?.name} `);
    // }
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
        <button
          className="topRate-Btn ml-8 border-2 border-gray-600 rounded-lg p-2 font-semibold"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4
            );
            // console.log(filteredList);
            setFilterData(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        <div className="search-container mr-8 py-2 ">
          <input
            type="text"
            placeholder="Enter Restaurant"
            maxLength={20}
            className="search-bar border-2 border-gray-800 mr-2 p-1 rounded"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn border-2 border-gray-600 p-1 rounded-lg"
            onClick={() => {
              const filterOutput = restaurantList.filter((res) => {
                // console.log(res?.info?.name);
                return res?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              // console.log("FilterOuput", filterOutput);
              setFilterData(filterOutput);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="res-container mt-3 mr-8 ml-8 flex flex-wrap">
        {filterData.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
