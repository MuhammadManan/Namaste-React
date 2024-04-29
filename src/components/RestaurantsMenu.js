import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCatagory from "./RestaurantCatagory.js";
import { useState } from "react";

const RestaurantsMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, city, avgRating, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const ItemCategories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(ItemCategories);
  return (
    <div className="menu-container text-center m-8 p-2">
      <h1 className="text-3xl my-3 font-bold">
        <span className=" hover:bg-rose-200 hover:rounded-lg p-2">{name}</span>
      </h1>
      <p className="font-semibold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {ItemCategories.map((item, index) => (
        <RestaurantCatagory
          key={item?.card?.card?.title}
          data={item?.card?.card}
          showList={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantsMenu;
