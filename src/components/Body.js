import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
// import { restaurantList } from "../constants"

function filterData(searchInput,restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchInput.toLowerCase())
  );
  return filterData;
}

const Body = () => {

  //Avoid Redenring Component

  const [searchInput, setSearchInput] = useState(); //returns = [variable name, function to update the variable]

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() =>{
    //Api Calls
    getRestaurants();

  },[]);

  async function getRestaurants(){
   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.3440997&lng=85.309562&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
   const json = await data.json();

    console.log(json);
    
    // Optional Chaining

    
    setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  } 
  //Early return (not render Component)
  if(!allRestaurants) return null;

  // if(filteredRestaurants?.length===0) return <h1>No Restaurant Found</h1>

  return (allRestaurants?.length === 0) ? <Shimmer /> : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // Need to filter the data

            const data = filterData(searchInput, allRestaurants);

            //update the state - restaurants variable
            setFilteredRestaurants(data);
          }}
        >
          Search 
        </button>
      </div>
      <div className="restaurants-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link to={"/restaurant/"+ restaurant.info.id} key={restaurant.info.id}>
            <RestaurantCard {...restaurant.info}  />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
