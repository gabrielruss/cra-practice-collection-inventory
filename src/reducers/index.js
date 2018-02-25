import { combineReducers } from "redux";
import inventory from "./inventoryReducer";
import gameConsoles from "./gameConsoleReducer";
import ajaxCallsInProgress from "./ajaxStatusReducer";

const rootReducer = combineReducers({
  inventory,
  gameConsoles,
  ajaxCallsInProgress
});

export default rootReducer;
