import { configureStore } from "@reduxjs/toolkit";
import calculator from "./reducers";
const store = configureStore({ reducer: { calculator: calculator } });
export default store;
