import React from "react";
import { CDN_IMG_URL } from "../config";

function RestaurantCard(props) {
  return (
    <div className="card">
      <img
        src={CDN_IMG_URL + props.cloudinaryImageId}
        alt="image"
        className="card-image"
      />
      <h2>{props.name}</h2>
      <h5>{props.cuisines.join(",")}</h5>
      <h5>{props.areaName}</h5>
    </div>
  );
}

export default RestaurantCard;
