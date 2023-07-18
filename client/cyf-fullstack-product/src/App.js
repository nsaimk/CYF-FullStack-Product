import React, { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  const [currentDay, setCurrentDay] = useState(1);

  const handleDayChange = (day) => {
    setCurrentDay(day);
  };

  return (
    <div>
      <Header day={currentDay} onDayChange={handleDayChange} />
      <Body day={currentDay} />
    </div>
  );
}

export default App;

