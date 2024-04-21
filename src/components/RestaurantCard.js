import { media_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="resCard-container">
      <div className="image-container">
        <img alt="Chinese" src={media_URL + resData.info.cloudinaryImageId} />
      </div>
      <div className="desc-container">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
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
