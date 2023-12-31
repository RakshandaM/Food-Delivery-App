import RestaurantCard from "./Resturant Card";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfResturants, setlistOfResturants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]); //Filter and search

  const [searchText, setSearchText] = useState(" ");
  //Whenever state var update, react trigger a reconciliation cycle(re-render the components)
  console.log("Body Rendered");

  //  Body Render first then useEffect()
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2403305&lng=73.1305395&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setlistOfResturants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return !listOfResturants || listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-btn">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            onClick={() => {
              // Filter the restaurants by name and update UI
              // Add your filtering logic here

              const filteredRes = listOfResturants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurants(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //const listOfResturants = [];
            const topRatedRestaurants = listOfResturants.filter(
              // topRatedRestaurants use to store the result of filtering the resList
              (res) => res.info.avgRating > 4
            );
            setfilteredRestaurants(topRatedRestaurants);
            console.log("Top-rated restaurants:", topRatedRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/resturants/" + restaurant.info.id}
          >
           <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
