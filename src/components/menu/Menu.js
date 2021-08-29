import React from "react";
import MenuItem from "./MenuItem";
import "./Menu.css";
import { menuItems } from "../../data";

function Menu() {
  return (
    <div className="menu">
      {menuItems.map((item, index) => (
        <MenuItem
          title={item.name}
          key={index}
          language={item.language}
          icon={item.icon}
        />
      ))}
    </div>
  );
}

export default Menu;
