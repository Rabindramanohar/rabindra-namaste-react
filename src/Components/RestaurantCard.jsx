import { CDN_URL } from "../Utils/constant";

const RestaurantCard = ({ data }) => {
  const { name, cloudinaryImageId, areaName, costForTwo, cuisines, avgRating } =
    data;
  return (
    <div className="resCard-container">
      <img
        className="resCard-img"
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="res-food"
      />
      <div className="res-name">{name}</div>
      <h4>{areaName}</h4>
      <h4>{costForTwo}</h4>
      <h5>{avgRating} rating</h5>
      <h6>{cuisines.join(", ")}</h6>
    </div>
  );
};

export default RestaurantCard;
