import React, { useEffect, useState } from "react";
import "../style/Style.css";

const Body = () => {
  const [backendData, setbackendData] = useState([{}]);
  const [day, setDay] = useState(0);

  useEffect(() => {
    const dataFetch = async () => {
      await fetch("http://localhost:3001/pro")
        .then((resopnse) => resopnse.json())
        .then((data) => {
          setbackendData(data);
        });
    };
    dataFetch();
  }, []);

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
              Meal: <b className="title">{backendData[day].name}</b>{" "}
            </h5>
          </div>
          <p className="ingredients">
            {backendData[day].ingredients1} * {backendData[day].ingredients2} *{" "}
            {backendData[day].ingredients3}
          </p>
          <p className="card-text">{backendData[day].recipe}</p>
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
            Meal: <b className="title">{backendData[0].name}</b>
          </h5>
          <p className="ingredients">
            {backendData[0].ingredients1} * {backendData[0].ingredients2} *{" "}
            {backendData[0].ingredients3}
          </p>
          <p className="card-text">{backendData[0].recipe}</p>
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
            Meal: <b className="title">{backendData[0].name}</b>{" "}
          </h5>
          <p className="ingredients">
            {backendData[0].ingredients1} * {backendData[0].ingredients2} *{" "}
            {backendData[0].ingredients3}
          </p>
          <p className="card-text">Meal: {backendData[0].recipe}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted"></small>
        </div>
      </div>
    </div>
  );
};

export default Body;
