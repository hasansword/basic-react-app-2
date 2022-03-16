import React from "react";
export default function Cards(props) {
  

  return (
    <div className="card">
      <img src={require(`../images/${props.img}`)} alt="" className="card-image" />
      <div className="card-stats">
        <img src={require("../images/star.png")} alt="star" className="card-star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) -</span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">From {props.price}$</span> / Person</p>
    </div>
  );
}
