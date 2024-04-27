import { media_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="resCard-container bg-gray-100 mr-1 mt-2 w-64 max-h-full p-2 hover:bg-gray-400 hover:border-2 hover:rounded-lg">
      <div className="image-container">
        <img
          className="w-60 rounded"
          alt="Chinese"
          src={media_URL + resData.info.cloudinaryImageId}
        />
      </div>
      <div className="desc-container">
        <h3 className=" text-lg font-semibold">{name}</h3>
        <h4 className=" text-wrap">{cuisines.join(", ")}</h4>
        <h4>
          <span id="rate">{avgRating}</span> stars
        </h4>
        <h4>{deliveryTime} minutes</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
