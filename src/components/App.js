import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header"
import Filter from "./Filter"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }
  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick = {onDarkModeClick}/>
      <Filter onCategoryChange = {handleCategoryChange}/>
      <ShoppingList items={itemData} selectedCategory={selectedCategory}/>
    </div>
  );
}

export default App;
