import RestaurantCard from "./Resturant Card";
import resList from "./utils/mockData";
import {useState} from "react";


const Body = () => {

  const [listOfResturants, setlistOfResturants]=useState(resList)
  //Body Render first then useEffect()
  
  return (
      <div className="body">
        <div className="filter">
          
          <button
            className="filter-btn"
            onClick={() => {
               const topRatedRestaurants = listOfResturants.filter(     // topRatedRestaurants use to store the result of filtering the resList
                (res) => res.data.avgRating > 4
              );
              setlistOfResturants(topRatedRestaurants)
            }}  
          >
          Top Rated Restaurant
          </button>
        
      
          </div>
      <div className="res-container">
        {
          listOfResturants.map((restaurant) => (         //map() function iterates over each element of resList
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
