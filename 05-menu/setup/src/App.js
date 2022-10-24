import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenu(items);
      return;
    }
    const newItem = items.filter((item) => item.category === category);
    setMenu(newItem);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <div className="section-center">
          {menu.map((food) => {
            return <Menu key={food.id} {...food} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
