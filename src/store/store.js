import { createStore } from "redux";
import ImageReducer from "./reducer";

export const store = createStore(ImageReducer)