import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "./utils/contants"; 
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resId, setResID] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const {resNo} = useParams()
  console.log(resNo)

  async function fetchData() {
    const data = await fetch(
      MENU_API + resNo + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);

    setResID(json);
  } // Real data

  if (resId === 0) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, city } =
    resId?.data?.cards[0]?.card?.card?.info || {}; // Use default empty object to prevent errors

  const { itemCards } =
    resId?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};



      //Iteams -{itemCards[0]?.card?.info?.name} 
 
 
      return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{Array.isArray(cuisines) ? cuisines.join(", ") : null}</p>
      <p>{costForTwoMessage}</p>
      <p>{city}</p>
      <h1>Menu</h1>

      <ul>
      {itemCards &&
        itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs {item.card.info.price / 100}
          </li>
        ))}
    </ul>
    </div>
  );
};

export default RestaurantMenu;
// function YourComponent() {
//   const [resId, setResID] = useState(null);

//   async function fetchData() {
//     try {
//       const response = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.26023&lng=73.136701&restaurantId=75536&catalog_qa=undefined&submitAction=ENTER%27');
//       const json = await response.json();

//       // Log the entire fetched JSON response to understand its structure
//       console.log('Fetched JSON:', json);

//       if (json?.data?.cards && json.data.cards.length > 0) {
//         const restaurantName = json.data.cards[0]?.card?.card?.info?.name;
//         console.log('Restaurant Name:', restaurantName); // Log the restaurant name obtained from the response
//         setResID(json);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="menu">
//       <h1>{resId?.data?.cards[0]?.card?.card?.info?.name}</h1>
//       <h2>Menu</h2>
//     </div>
//   );
// }

// export default YourComponent;
