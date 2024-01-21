import { useEffect, useState } from "react";
import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import {useNavigate } from "react-router-dom";

function Body() {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [dummy,setDummy]=useState(true);
  const onlineStatus = useOnlineStatus();
  const navigate=useNavigate();

  const RestaurantCardOpen = withOpenLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, [dummy]);

  const fetchData = async () => {
    // console.log("inside fetchDAta");
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const resData = await res.json();
    // console.log(resData);
    // console.log(resData);
    // console.log(resData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(
      resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setRestaurantList(
      resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  function handleClick() {
    const filterData = restaurantList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
      setFilteredRestaurant(filterData);
  }

  const handleReturnClick=()=>{
    setDummy(!dummy);
  }

  if (!onlineStatus)
    return <h1>Looks Like you are Offline! Check your Network</h1>;

  if (filteredRestaurant === null) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return filteredRestaurant.length === 0 ? (
    <div className="h-screen flex justify-center items-center flex-col gap-5">
      <h1 className="font-bold text-2xl">No Match Found...</h1>
      <button className="text-white bg-black p-5 font-bold rounded-lg" onClick={handleReturnClick}>Return home</button>
    </div>
  ) : (
    <div className="body">
      <div className=" m-4 p-4 flex justify-center">
        <input
          type="text"
          className="border h-8 w-1/3 border-solid border-black rounded p-2"
          placeholder="search"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-green-100 ml-2 mt-1 w-28 rounded border border-black px-4 self-start"
          onClick={handleClick}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap justify-around">
        {filteredRestaurant.map((restaurant) => (
          // <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id} >
          <div key={restaurant.info.id}>
            {restaurant.info.isOpen ? (
              <RestaurantCardOpen resData={restaurant.info} />
            ) : (
              <RestaurantCard resData={restaurant.info} />
            )}
            {/* </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Body;
