import React from "react";

function CardShimmer() {
  return (
    <div className="shimmer-card">
      <div className="shimer-img">
        <img src="http://via.placeholder.com/200" />
      </div>
      <h2></h2>
      <h5></h5>
      <h5></h5>
    </div>
  );
}

const Shimmer = () => {
  const shimmer_card_unit = 12;
  return (
    <div className="shimmer-container">
      {new Array(shimmer_card_unit).fill(0).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};

export default Shimmer;
