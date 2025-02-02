import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FoodDisplay from "./FoodDispaly/FoodDisplay";

const App = () => {
  const [category, setCategory] = useState("All");
  return (
    <>
      <Header />
      <FoodDisplay category={category} />
    </>
  );
};
export default App;
