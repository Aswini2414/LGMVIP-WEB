import React from "react";
import "./App.css";

const Display = ({ previous }) => {
  return (
    <>
      <section className="display_section">
        {previous.map((prev, index) => (
          <div className="details" key={index}>
            <div className="grid_item-1">
              <p>{prev[0]}</p>
              <p>{prev[3]}</p>
              <p>{prev[1]}</p>
              <p>{prev[4]}</p>
            </div>
            <img
              className="grid_item-2"
              src={prev[2]}
              width="100px"
              height="100px"
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default Display;
