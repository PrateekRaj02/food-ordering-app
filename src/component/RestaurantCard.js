import { Link } from "react-router-dom";

function RestaurantCard({resData}){
    // const api_url="https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.6244806999999&page_type=DESKTOP_WEB_LISTING";
    // console.log(resData);
    return (
        <div className="res-card m-4 p-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-400">
            <Link to={"/restaurant/"+resData.id}>
            <img className="w-full h-64 rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.cloudinaryImageId } alt="" />
            <h3 className="font-bold p-2">{resData.name}</h3>
            <h3>{resData?.cuisines.join(", ")}</h3>
            <h3>{resData?.avgRating}⭐</h3>
            <h3>{resData?.costForTwo}</h3>
            <h3>{resData.sla.slaString}</h3>
            </Link>
        </div>
    )
}

export const withOpenLabel=(RestaurantCard)=>{

    return (props)=>{
        return (
            <div>
                <label className="absolute m-2 p-2 rounded-lg bg-black text-white">Open</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }

}

export default RestaurantCard;