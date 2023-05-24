import React from "react";
import "./cards.css";
import People from "../../../assets/people.png";
import Transaction from "../../../assets/total-transaction.png";
import Like from "../../../assets/like.png";
import Revenue from "../../../assets/revenue.png";

function Cards() {
  return (
    <div className="card-container">
      <div className="card card-one">
        <div className="card-icon">
          <img src={Revenue} alt="" />
        </div>
        <div className="card-title">Total Revenues</div>
        <div className="card-numbers">$2,129,430</div>
      </div>
      <div className="card card-two">
        <div className="card-icon">
          <img src={Transaction} alt="" />
        </div>
        <div className="card-title">Total Transactions</div>
        <div className="card-numbers">1520</div>
      </div>
      <div className="card card-three">
        <div className="card-icon">
          <img src={Like} alt="" />
        </div>
        <div className="card-title">Total Likes</div>
        <div className="card-numbers">9721</div>
      </div>
      <div className="card card-four">
        <div className="card-icon">
          <img src={People} alt="" />
        </div>
        <div className="card-title">Total Users</div>
        <div className="card-numbers">892</div>
      </div>
    </div>
  );
}

export default Cards;
