import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
const Body = () => {
    return(
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={() => {resList = resList.filter((res)=>res.info.avgRating > 4.1);console.log(resList);}}>Top Rated Restaurants</button>
          
          
        </div>
        <div className="res-container">
        <RestaurantCard 
        resData = {resList[1]}
        />
        {resList.map((restaurant)=>(
          <RestaurantCard key = {restaurant.info.id}resData = {restaurant} />
        ))}
        </div>
      </div>
    )
  };
export default Body;