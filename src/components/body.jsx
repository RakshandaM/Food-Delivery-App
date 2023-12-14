import RestaurantCard from "./Resturant Card";
import resList from "./utils/mockData";



const Body = () => {
    return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
      {
        resList.map((restaurant)=> <RestaurantCard  key={restaurant.data.id} resData={restaurant}/>) 
        //Restaurant - It represents a single item.
        // resData -  It holds the data of a single restaurant.
      }
      </div>
    </div>  
    
    );
  };

export default Body;