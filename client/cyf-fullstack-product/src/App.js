import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setbackendData] = useState([{}]);
  useEffect(() => {
    fetch("/api")
      .then((resopnse) => resopnse.json())
      .then((data) => {
        setbackendData(data);
      });
  }, []);
  return (
    <div>
      {backendData["Project name"]}
    </div>
  );
}

export default App;
