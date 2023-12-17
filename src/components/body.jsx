import RestaurantCard from "./Resturant Card";
import resList from "./utils/mockData";
import {useState, useEffect} from "react";


const Body = () => {

  const [listOfResturants, setlistOfResturants]=useState([ ])
  
  useEffect(()=>{
    fetchData();
  })
  
  async function fetchData() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2403305&lng=73.1305395&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
   // console.log( " Hey API !! ",json);
    setlistOfResturants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //console.log(listOfResturants)

 
  }
  //Body Render first then useEffect()
  
  return (
      <div className="body">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
               const topRatedRestaurants = listOfResturants.filter(     // topRatedRestaurants use to store the result of filtering the resList
                (res) => res.info.avgRating > 4
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
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
          //Restaurant - It represents a single item.
          // resData -  It holds the data of a single restaurant.
        }
      </div>
    </div>
  );
};


export default Body;
