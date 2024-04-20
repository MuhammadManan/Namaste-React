import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

export const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  // console.log(restaurantList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const restaurantApiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await restaurantApiData.json();
    // console.log(data);

    setRestaurantList(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="body-container">
      <div className="filter-container">
        <button
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating === 4.3
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
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
