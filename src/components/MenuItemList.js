import { media_URL } from "../utils/constants";

const MenuItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border-b-2 border-rose-200 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="text-lg font-medium py-2">
              <span>{item.card.info.name}</span>
              <span className="pl-2">
                - Rs.
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}
              </span>
            </div>
            <p className="text-sm pb-2">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <div className="button absolute">
              <button className="border-2 p-1 bg-gray-100 opacity-80 hover:bg-rose-300 shadow font-medium border-rose-200 rounded-lg">
                Add <b>+</b>
              </button>
            </div>
            <img
              className="ml-2 p-2 w-36 h-13 rounded-xl "
              src={media_URL + item.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItemList;
