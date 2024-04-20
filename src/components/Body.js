import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

export const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);
  console.log(restaurantList);

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
