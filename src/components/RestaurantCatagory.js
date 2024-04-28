const RestaurantCatagory = ({ data }) => {
  console.log(data);
  return (
    <div className="menu-container">
      <div className="menuTitle flex justify-between w-6/12 mx-auto my-4 shadow-xl p-4 rounded-lg bg-rose-50 ">
        <span className="font-semibold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      <div className="titleBody"></div>
    </div>
  );
};

export default RestaurantCatagory;
