import { combineReducers } from "redux";
import reducers from "./reducers";

const allReducers = combineReducers({
  reducers: reducers
});

export default allReducers;
