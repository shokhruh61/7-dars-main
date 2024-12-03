import React from "react";
import "./index.css";

function Card({ data }) {
  const { error } = data;

  return (
    <div>
      <h1>Error </h1>
      {
        <div>
          <p> {error.code}</p>
          <p> {error.type}</p>
          <p> {error.info}</p>
        </div>
      }
    </div>
  );
}

export default Card;
