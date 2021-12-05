import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>
        mark 14 stocks
        <main>
          <label for="">
            initial price{" "}
            <input type="text" placeholder="enter initial price"></input>
          </label>
          <label for="">
            quantity of stocks{" "}
            <input
              type="text"
              placeholder="enter the number of stocks you bought"
            ></input>
          </label>
          <label for="">
            current price{" "}
            <input type="text" placeholder="enter current price"></input>
          </label>

          <button>tell me</button>

          <div></div>
        </main>
      </h1>
    </div>
  );
}
