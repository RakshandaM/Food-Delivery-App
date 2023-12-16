import RestaurantCard from "./Resturant Card";
import resList from "./utils/mockData";
import {useState} from "react";


const Body = () => {


  return (
    <div className="body">
      <div className="filter">
        
        <button
          className="filter-btn"
          onClick={() => {
             const topRatedRestaurants = resList.filter(     // topRatedRestaurants used to store the result of filtering the resList
              (res) => res.data.avgRating > 4
            );
            console.log("Filtered restaurants:", topRatedRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      
      </div>
      <div className="res-container">
        {
          resList.map((restaurant) => (         //map() function iterates over each element of resList
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))
          //Restaurant - It represents a single item.
          // resData -  It holds the data of a single restaurant.
        }
      </div>
    </div>
  );
};

export default Body;
