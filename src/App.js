import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>
        mark 14 stocks
        <main>
          <label for="initial-price">
            initial price{" "}
            <input
              id="initial-price"
              type="text"
              placeholder="enter initial price"
            ></input>
          </label>
          <label for="quantity-of-stock">
            quantity of stocks{" "}
            <input
              id="quantity-of-stock"
              type="text"
              placeholder="enter the number of stocks you bought"
            ></input>
          </label>
          <label for="current-price">
            current price{" "}
            <input
              id="current-price"
              type="text"
              placeholder="enter current price"
            ></input>
          </label>

          <button id="submit-btn">tell me</button>

          <div></div>
        </main>
      </h1>
    </div>
  );
}
