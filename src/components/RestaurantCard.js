import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({ name, cuisines,cloudinaryImageId,avgRating }) => {
    return (
      <div className="card">
        <img
          src={IMG_CDN_URL+cloudinaryImageId
          }
        />
        <h1> {name}</h1>
        <h2> {cuisines.join(", ")}</h2>
        <h4>{avgRating} Minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;

  