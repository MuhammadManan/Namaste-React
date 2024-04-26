import { useState, useEffect } from "react";
import { menu_URL } from "./constants.js";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData(resId);
  }, []);

  const fetchData = async (resId) => {
    const data = await fetch(menu_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
