import { createReducer } from "@reduxjs/toolkit";

const calculator = createReducer(
  {
    screen: [{ previous: "" }, { current: "" }],
  },
  {
    operand: (state, action) => {
      console.log("action : ", action);
      let key = action.payload;
      if (!isNaN(key) || key === ".") {
        if (key === ".") {
          if (!state.screen[1].current.toString().split("").includes(".")) {
            state.screen[1].current = state.screen[1].current + key;
            return;
          }
        } else {
          state.screen[1].current = state.screen[1].current + key;
        }
      }
    },
    operator: (state, action) => {
      let key = action.payload;
      state.screen[0].previous = state.screen[1].current + " " + key;
      state.screen[1].current = "";
    },
    delete: (state, action) => {
      let num = state.screen[1].current.toString().split("");
      num.pop();
      state.screen[1].current = num.join("");
    },
    allClear: (state, action) => {
      state.screen[0].previous = "";
      state.screen[1].current = "";
    },
    equalTo: (state, action)=>{
      state.screen[0].previous = "";
      state.screen[1].current = action.payload;
    }
  }
);
export default calculator;
