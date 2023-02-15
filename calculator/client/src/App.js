import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  const previous = useSelector((state) => state.calculator.screen[0].previous);
  const current = useSelector((state) => state.calculator.screen[1].current);

  const handleInput = (key) => {
    if (!isNaN(key) || key === ".") {
      dispatch({
        type: "operand",
        payload: key,
      });
    } else if (
      current.length !== 0 &&
      isNaN(key) &&
      key !== "DEL" &&
      key !== "AC" &&
      key !== "=" &&
      key !== "."
    ) {
      dispatch({
        type: "operator",
        payload: key,
      });
    } else if (key === "AC") {
      dispatch({
        type: "allClear",
        payload: key,
      });
    } else if (key === "DEL" && current.length !== 0) {
      dispatch({
        type: "delete",
        payload: key,
      });
    } else if (key === "=") {
      if (previous.length !== 0 && current.length !== 0) {
        let operator = previous.split("").at(-1);
        let a = previous.split(previous.split("").at(-1))[0];
        let b = current;
        let op;
        switch (operator) {
          case "+":
            op = "add";
            break;
          case "-":
            op = "sub";
            break;
          case "/":
            op = "div";
            break;
          case "*":
            op = "mul";
            break;
          default:
            return;
        }
        console.log(a, b, op);
        getCalculation(a, b, op);
      }
    }
  };

  const getCalculation = async (a, b, op) => {
    const result = await axios.get(
      `http://localhost:5050/?a=${a}&b=${b}&op=${op}`
    );
    if (result.status === 200) {
      dispatch({
        type: "equalTo",
        payload: result.data.c,
      });
    }
  };
  return (
    <div className="App">
      <div className="calculator-grid">
        <div className="output">
          <div data-previous-operand className="previous-operand">
            {previous}
          </div>
          <div data-current-operand className="current-operand">
            {current}
          </div>
        </div>
        <button
          data-all-clear
          className="span-two"
          onClick={() => handleInput("AC")}
        >
          AC
        </button>
        <button data-delete onClick={() => handleInput("DEL")}>
          DEL
        </button>
        <button data-operation onClick={() => handleInput("/")}>
          ÷
        </button>
        <button data-number onClick={() => handleInput("1")}>
          1
        </button>
        <button data-number onClick={() => handleInput("2")}>
          2
        </button>
        <button data-number onClick={() => handleInput("3")}>
          3
        </button>
        <button data-operation onClick={() => handleInput("*")}>
          *
        </button>
        <button data-number onClick={() => handleInput("4")}>
          4
        </button>
        <button data-number onClick={() => handleInput("5")}>
          5
        </button>
        <button data-number onClick={() => handleInput("6")}>
          6
        </button>
        <button data-operation onClick={() => handleInput("+")}>
          +
        </button>
        <button data-number onClick={() => handleInput("7")}>
          7
        </button>
        <button data-number onClick={() => handleInput("8")}>
          8
        </button>
        <button data-number onClick={() => handleInput("9")}>
          9
        </button>
        <button data-operation onClick={() => handleInput("-")}>
          -
        </button>
        <button
          data-number
          data-period
          style={{ paddingBottom: "15px" }}
          onClick={() => handleInput(".")}
        >
          .
        </button>
        <button data-number onClick={() => handleInput("0")}>
          0
        </button>
        <button
          data-equals
          className="span-two"
          onClick={() => handleInput("=")}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
