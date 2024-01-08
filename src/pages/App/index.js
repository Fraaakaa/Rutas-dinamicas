import "./style.scss";
import NavBar from "../../components/NavBar";
import List from "../../components/List";
import { useState, useEffect } from "react";
import data from "../../data/startups.json";

function App() {
  const [filteredFood, setFilteredFood] = useState(data);

  function handleChange(value) {
    if (value == "") {
      setFilteredFood(data);
    }

    const filtered = data.filter((comida) => {
      return comida.name.toLowerCase().includes(value.toLowerCase());
    });

    setFilteredFood(filtered);
  }

  function handleClick() {
    console.log("hola soy gay");
  }
  return (
    <div className="App">
      <NavBar handleCallBack={handleClick} handleCallback={handleChange} />
      <List food={filteredFood} />
    </div>
  );
}

export default App;
