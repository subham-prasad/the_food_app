import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  // console.log(params);
  // const {id} = params;
  // console.log(id);

  const [restaurantDetails, setRestaurantDetails] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.3440997&lng=85.309562&restaurantId=" +
        id +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurantDetails(json.data);
  }

  return !restaurantDetails ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id: {id}</h1>
        <h1>{restaurantDetails?.cards[0]?.card?.card?.info?.name}</h1>
        <img
          src={
            IMG_CDN_URL +
            restaurantDetails?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h2>{restaurantDetails?.cards[0]?.card?.card?.info?.city}</h2>
        <h2>{restaurantDetails?.cards[0]?.card?.card?.info?.locality}</h2>
      </div>
      <div>
        <h1>Menu</h1>
        <div>{console.log(Object.values(restaurantDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards))}</div>
        {/* <ul>{
          Object.values(restaurantDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards).map((item) => <li key={item?.card?.info?.id}
          >
            {item?.card?.info?.name}</li>)
          }
        </ul> */}


        {/* <div>{console.log(Object.values(restaurantDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards))}</div> */}
        <ul>
          {Object.values(
            restaurantDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
              ?.cards
          ).map((category) => (
            <li key={category?.card?.card?.title}>
              {category?.card?.card?.title}
              <ul>
                {
                (category?.card?.card?.itemCards)?.map((item) => (
                  <li>{item?.card?.info.name}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul> 
      </div>
    </div>
  );
};

export default RestaurantMenu;
