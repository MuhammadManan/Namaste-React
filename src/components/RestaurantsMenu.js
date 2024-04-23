import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { menu_URL } from "../utils/constants.js";

const RestaurantsMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  //   console.log(resInfo);

  const { resId } = useParams();
  //   console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  //57229
  //706337
  const fetchMenu = async () => {
    const data = await fetch(menu_URL + resId);
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9690247&lng=72.8205292&restaurantId=338041&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    // );

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, city, avgRating, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;
  //   console.log(name + "" + city);
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log("itemCards: ", itemCards);

  return (
    <div className="menu-container">
      <h1>{name}</h1>
      <p>
        <b>{city}</b>
        <br />
        {avgRating + " " + cuisines}
        <br />
        {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      {itemCards ? (
        <ul>
          {itemCards.map((item) => {
            return (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name} - Rs.
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
