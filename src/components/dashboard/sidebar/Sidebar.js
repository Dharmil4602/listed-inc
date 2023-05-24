import React from "react";
import "./sidebar.css";
import DashboardImg from "../../../assets/dashboard.png";
import Transaction from "../../../assets/transaction.png";
import Setting from "../../../assets/setting_icon.png";
import Users from "../../../assets/users.png";
import Schedule from "../../../assets/schedule.png";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-heading">
        <h1>Board.</h1>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li>
            <img src={DashboardImg} alt="" /> <span>Dashboard</span>{" "}
          </li>
          <li>
            <img src={Transaction} alt="" /> <span>Transactions</span>{" "}
          </li>
          <li>
            <img src={Schedule} alt="" />
            <span>Schedules</span>{" "}
          </li>
          <li>
            <img src={Users} alt="" />
            <span>Users</span>{" "}
          </li>
          <li>
            <img src={Setting} alt="" />
            <span>Settings</span>{" "}
          </li>
        </ul>
      </div>
      <div className="sidebar-footer">
        <h4>Help</h4>
        <h4>Contact Us</h4>
      </div>
    </div>
  );
}

export default Sidebar;
