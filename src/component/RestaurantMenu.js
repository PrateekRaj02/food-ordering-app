import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const RestaurantMenu=()=>{
    const {resId}=useParams();
    const [resData,categories]=useRestaurantMenu(resId);
    // const [showItems,setShowItems]=useState(false);
    const [showIndex,setShowIndex]=useState();

    // console.log(categories);
    return resData === null ? (
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
      ):(
        <div className="text-center p-4">
            <h1 className="font-bold text-2xl my-4">{resData.name}</h1>
            <h3 className="font-bold text-lg">{resData.cuisines.join(", ")}- Rs.{resData.costForTwo/100}</h3>

            {/* categories accordians */}

            {categories.map((category,index)=><RestaurantCategory data={category?.card?.card} key={category?.card?.card?.title} showItems={index === showIndex ? true :false} setShowIndex={()=>setShowIndex(index)} />)}
            
            
        </div>
    )

}
export default RestaurantMenu;