import React, { useEffect, useState } from "react";
import { API_URL } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function Body() {
  const [input, setInput] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    getFilteredData();
  }, []);

  async function getFilteredData() {
    try {
      const data = await fetch(API_URL);
      const json = await data.json();

      async function getRestaurant(jsonData) {
        for (let i = 0; i < jsonData.data.cards.length; i++) {
          let arr =
            json.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;
          if (arr !== undefined) {
            return arr;
          }
        }
      }

      const restaurant = await getRestaurant(json);

      //   console.log(restaurant);

      setFilteredRestaurant(restaurant);
      setAllRestaurants(restaurant);
    } catch (error) {
      console.log(error);
    }
  }

  function getFilterRestaurant(input, allRestaurants) {
    return allRestaurants.filter((rest) => {
      return rest.info.name.toLowerCase().includes(input.toLowerCase());
    });
  }

  function handleClick() {
    const filteredArray = getFilterRestaurant(input, allRestaurants);
    setFilteredRestaurant(filteredArray);
  }

  function handleChange(e) {
    setInput(e.target.value);
    const filteredArray = getFilterRestaurant(e.target.value, allRestaurants);
    setFilteredRestaurant(filteredArray);
  }

  return (
    <div className="body">
      <div className="search">
        <input type="text" onChange={handleChange} className="search-bar" />
        <button className="btn" onClick={handleClick}>
          Search
        </button>
      </div>
      {allRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="body-cards">
          {filteredRestaurant.length === 0 ? (
            <h1>Not Items Found..</h1>
          ) : (
            filteredRestaurant.map((res) => {
              return <RestaurantCard {...res.info} key={res.info.id} />;
            })
          )}
        </div>
      )}
    </div>
  );
}

export default Body;
