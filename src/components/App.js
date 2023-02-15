import React, { useState } from "react";
import "../styles/App.css";

const relationshipMap = {
  0: "Siblings",
  1: "Friends",
  2: "Love",
  3: "Affection",
  4: "Marriage",
  5: "Enemy",
};

const App = () => {
  const [str1, setStr1] = useState("");
  const [str2, setStr2] = useState("");
  const [relation, setRelation] = useState("");
  const [isError, setIsError] = useState(false);

  const handleOnChange1 = (event) => {
    setStr1(event.target.value);
  };
  const handleOnChange2 = (event) => {
    setStr2(event.target.value);
  };

  const handleCalculate = () => {
    if (!str1 || !str2) setIsError(true);

    let newStr1 = "";
    let newStr2 = "";

    for (let i = 0; i < str1.length; i++) {
      if (str2.includes(str1[i])) {
        newStr2 = str2.replace(str1[i], "");
        break;
      }
      newStr1 = newStr1 + str1[i];
    }
    const relationIndex = (newStr1.length + newStr2.length) % 6;
    setRelation(relationshipMap[relationIndex]);
  };

  const handleClear = () => {
    setStr1("");
    setStr2("");
    setRelation("");
  };

  return (
    <div id="main">
      {/* Do not remove the main div */}
      <input
        type="text"
        data-testid="input1"
        value={str1}
        onChange={handleOnChange1}
      ></input>
      <input
        type="text"
        data-testid="input2"
        value={str2}
        onChange={handleOnChange2}
      ></input>

      <button data-testid="calculate_relationship" onChange={handleCalculate}>
        Calculate
      </button>
      <button data-testid="clear" onChange={handleClear}>
        Clear
      </button>
      <h3 data-testid="answer">
        {isError ? "Please Enter valid input" : relation}
      </h3>
    </div>
  );
};

export default App;
