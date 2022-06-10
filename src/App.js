import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

//get all unique categories adn adding all as part of the categories
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  //function to get all the available categories
  const filterMenu = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    //function to get the menus based on the category button clicked
    const filteredItems = items.filter((item) => item.category === category);
    setMenuItems(filteredItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterMenu} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
