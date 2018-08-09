import React from "react";
import "./clickCard.css";

const clickCard = props => (
  <div className="card">
    <div className="img-container card-img">
      <img alt={props.name} src={props.image} data-id={props.id} onClick={() => props.removeCard(props.id)} />
    </div>
  </div>
);

export default clickCard;
