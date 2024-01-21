import { useEffect, useState } from "react";
import {menuListUrl} from "./contants";


const useRestaurantMenu=(resId)=>{
    const [resData,setResData]=useState(null);
    const [categories,setCategories]=useState();

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData= async ()=>{
        const res=await fetch(menuListUrl+resId);
        const jsonData=await res.json();
        // console.log(jsonData);

        const category= jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=>item?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

// console.log(category);
        setCategories(category);
        setResData(jsonData?.data?.cards[0]?.card?.card?.info);
        // console.log(jsonData?.data?.cards[0]?.card?.card?.info);

    }


    return [resData,categories];
}

export default useRestaurantMenu;