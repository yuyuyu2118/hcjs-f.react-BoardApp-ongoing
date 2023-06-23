import React from "react";
import Button from "@mui/material/Button";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div id="root">
      {/* <Button variant="contained" className="sidebar-button" color="primary">
        Hello
      </Button> */}
      <ul>
        <li className="menuItem">メニュー1</li>
        <li className="menuItem">メニュー2</li>
        <li className="menuItem">メニュー3</li>
      </ul>
    </div>
  );
};

export default SideBar;
