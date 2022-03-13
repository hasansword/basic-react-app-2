import React from "react";

export default function Cards() {
  return (
    <div className="card">
      <img src={require("../images/photo-1.png")} alt="" className="card-image" />
      <div className="card-stats">
        <img src={require("../images/star.png")} alt="star" className="card-star" />
        <span>5.0</span>
        <span className="gray">(6) -</span>
        <span className="gray">USA</span>
      </div>
      <p>Life is better when you swim</p>
      <p><span className="bold">From 199$</span> / Person</p>
    </div>
  );
}
