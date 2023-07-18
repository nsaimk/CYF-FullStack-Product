import React, { useState } from "react";
import "../style/Style.css";

const Header = ({ day, onDayChange }) => {
  const [backButtonDisplay, setBackButtonDisplay] = useState("none");

  const handleDay = () => {
    if (day < 4) {
      const nextDay = day + 1;
      setBackButtonDisplay(nextDay === 1 ? "none" : "");
      onDayChange(nextDay);
    } else {
      day = 4;
    }
  };

  const handleBackDay = () => {
    const previousDay = day - 1;
    console.log(previousDay)
    setBackButtonDisplay(previousDay === 1 ? "none" : "");
    onDayChange(previousDay);
    
  };
  return (
    <header className="App-header">
      <p></p>
      <button onClick={handleBackDay} style={{ display: backButtonDisplay }}>
        Back
      </button>
      <h1>List of Your Diet / Day {day}</h1>
      <button onClick={handleDay}>
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
