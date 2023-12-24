import { useEffect, useState } from "react";



const RestaurantMenu = () => {

    const[resId,setResID] = useState(null)

    useEffect(() => {
        fetchData();
      }, [ ]);

    async function fetchData(){
    const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.26023&lng=73.136701&restaurantId=75536&catalog_qa=undefined&submitAction=ENTER%27');
    const json= await data.json();
    console.log(json) 
    setResID(json);
    }; // Real data

    
  return (
    <div className="menu">
    {/* {/* <h1>{resId?.data?.cards[0]?.card?.card?.analytics?.info?.labels?.name}</h1>  */}
    <h1>{resId.card.card.info.name}</h1> */}
    <h2>Menu</h2>
    </div>
  );
}

export default RestaurantMenu;