import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
const uniqueList = [
  ...new Set(
    Menu.map((currEle) => {
      return currEle.category;
    })
  ),
];
console.log(uniqueList);

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const filteredList = (category) => {
    const updatedList = Menu.filter((currentListItem) => {
      return currentListItem.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="btn-group">
          <button
            className="btn-group__item"
            onClick={() => filteredList("Breakfast")}
          >
            Breakfast
          </button>
          <button
            className="btn-group__item"
            onClick={() => filteredList("Lunch")}
          >
            Lunch
          </button>
          <button
            className="btn-group__item"
            onClick={() => filteredList("Evening")}
          >
            Evening
          </button>
          <button
            className="btn-group__item"
            onClick={() => filteredList("Dinner")}
          >
            Dinner
          </button>
          <button className="btn-group__item" onClick={() => setMenuData(Menu)}>
            All
          </button>
        </div>
      </nav>

      <MenuCard menuData={menuData}> </MenuCard>
    </div>
  );
};

export default Restaurant;
