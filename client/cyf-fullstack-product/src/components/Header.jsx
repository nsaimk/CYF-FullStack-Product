import React, { useState } from "react";
import "../style/Style.css";

const Header = () => {
  const [day, setDay] = useState(1);
  const [backButtonDisplay, setBackButtonDisplay] = useState("none");
  const handleNext = () => {
    if (day === 1) {
      setDay(day + 1);
      setBackButtonDisplay("");
    } else if (day === 4) {
      setDay(4);
    } else {
      setDay(day + 1);
    }
  };
  //console.log(backButtonDisplay)

  const handleBack = () => {
    if (day === 2) {
      setDay(day - 1);
      setBackButtonDisplay("none");
    } else {
      setDay(day - 1);
    }
  };

  return (
    <header className="App-header">
      <p></p>
      <button style={{ display: backButtonDisplay }} onClick={handleBack}>
        Back
      </button>
      <h1>List of Your Diet / Day {day}</h1>
      <button onClick={handleNext}>
        <i>Next Day</i>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          class="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          />
        </svg>
      </button>
    </header>
  );
};

export default Header;
