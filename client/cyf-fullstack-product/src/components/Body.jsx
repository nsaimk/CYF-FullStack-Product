import React, { useEffect, useState } from "react";
import "../style/Style.css";

const Body = ({ day }) => {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      await fetch("https://cyf-product-server.netlify.app/pro")
        .then((response) => response.json())
        .then((data) => {
          setBackendData(data);
        });
    };
    dataFetch();
  }, []);

  if (!backendData || backendData.length === 0) {
    return <div>Loading...</div>;
  }

  const breakfastIndex = day - 1;
  const lunchIndex = day + 3;
  const dinnerIndex = day + 7;

  return (
    <div className="card-group">
      <div className="card">
        <img
          className="card-img-top card-img"
          src="/assets/IMG_3116.jpg"
          alt="breakfast"
        />
        <div className="card-body">
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginLeft: "90px",
              marginRight: "90px",
            }}
          >
            <h5 className="card-title">
              Meal: <b className="title">{backendData[breakfastIndex].name}</b>{" "}
            </h5>
          </div>
          <p className="ingredients">
            {backendData[breakfastIndex].ingredients1} *{" "}
            {backendData[breakfastIndex].ingredients2} *{" "}
            {backendData[breakfastIndex].ingredients3}
          </p>
          <p className="card-text">{backendData[breakfastIndex].recipe}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted"></small>
        </div>
      </div>
      <div className="card">
        <img
          className="card-img-top card-img"
          src="/assets/IMG_3117.jpg"
          alt="lunch"
        />
        <div className="card-body">
          <h5 className="card-title">
            Meal: <b className="title">{backendData[lunchIndex].name}</b>
          </h5>
          <p className="ingredients">
            {backendData[lunchIndex].ingredients1} *{" "}
            {backendData[lunchIndex].ingredients2} *{" "}
            {backendData[lunchIndex].ingredients3}
          </p>
          <p className="card-text">{backendData[lunchIndex].recipe}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted"></small>
        </div>
      </div>
      <div className="card">
        <img
          className="card-img-top card-img"
          src="/assets/IMG_3118.jpg"
          alt="dinner"
        />
        <div className="card-body">
          <h5 className="card-title">
            Meal: <b className="title">{backendData[dinnerIndex].name}</b>{" "}
          </h5>
          <p className="ingredients">
            {backendData[dinnerIndex].ingredients1} *{" "}
            {backendData[dinnerIndex].ingredients2} *{" "}
            {backendData[dinnerIndex].ingredients3}
          </p>
          <p className="card-text">Meal: {backendData[dinnerIndex].recipe}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted"></small>
        </div>
      </div>
    </div>
  );
};

export default Body;
