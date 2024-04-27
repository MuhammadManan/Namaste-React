import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";

const RestaurantsMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, city, avgRating, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu-container m-8 border-2 border-gray-700 rounded-xl p-2">
      <h1 className="text-2xl font-semibold">{name}</h1>
      <p>
        <b>{city}</b>
        <br />
        {avgRating + " " + cuisines}
        <br />
        {costForTwoMessage}
      </p>
      <h2 className="text-2xl font-semibold">Menu</h2>
      {itemCards ? (
        <ul>
          {itemCards.map((item) => {
            return (
              <li key={item?.card?.info?.id}>
                <span>-</span>
                {" " + item?.card?.info?.name} - Rs.
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </li>
            );
          })}
        </ul>
      ) : (
        <h3>The fetching menu API has changed!</h3>
      )}
    </div>
  );
};

export default RestaurantsMenu;
