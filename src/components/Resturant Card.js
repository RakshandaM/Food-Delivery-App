import { CDN_URL , LOGO_URL } from "./utils/contants"; 

const RestaurantCard = (props) => {
    //const { resData } = props; //resData - (For each [acting as a props])
    
    //const {name,cloudinaryImageId,cuisines,avgRating} = resData?.data 
    //  {? -Optional chaining( Joining resData and Data )}
  
    return (
      <div className="res-card">
        <h4>{props.resData.data.name}</h4>
        <img
          className="res-logo"
          alt="logo-food"
          src={ CDN_URL + props.resData.data.cloudinaryImageId }
        />
        <h4>{ props.resData.data.cuisines.join(', ')}</h4>
        <h4>{ props.resData.data.avgRating } Ratings</h4>
      </div>
    );
  };

  export default RestaurantCard;