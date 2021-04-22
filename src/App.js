import React, { useState } from "react";
import "./styles.css";

let App = () => {
  let [selectedData, setSelectedData] = useState();
  let [list, setList] = useState([1, 2, 3, 4, 5, 6]);
  let handleOnChange = (event) => {
    console.log(event.target.value);
    setList((prevState) => {
      return prevState.filter((item) => {
        console.log(item, event.target.value);
        return item != event.target.value;
      });
    });
  };

  return (
    <div className="App">
      <select onClick={handleOnChange}>
        {list.map((value, index) => {
          return <option key={index}>{value}</option>;
        })}
      </select>
    </div>
  );
};

export default App;
