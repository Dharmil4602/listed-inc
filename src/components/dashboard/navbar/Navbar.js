import React from "react";
import "./navbar.css";
import Bell from '../../../assets/bell.png'
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1>Dashboard</h1>
      </div>
      <div className="navbar-right">
        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="notification-bell">
            <img src={Bell} alt="" />
        </div>
        <div className="profile">
          <div className="profile-img">
            <img
              src="https://images.pexels.com/photos/2586823/pexels-photo-2586823.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
