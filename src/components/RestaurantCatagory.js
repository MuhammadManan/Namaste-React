import { useState } from "react";
import MenuItemList from "./MenuItemList";

const RestaurantCatagory = ({ data }) => {
  const [showList, setShowList] = useState(false);
  const handleClick = () => {
    setShowList(!showList);
  };
  return (
    <div className="menu-container">
      <div className="menuTitle w-6/12 mx-auto my-4 shadow-xl p-4 rounded-lg bg-rose-50 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-semibold text-2xl">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showList && <MenuItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCatagory;
