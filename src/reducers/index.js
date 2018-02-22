import { combineReducers } from "redux";
import inventory from "./inventoryReducer";
import gameConsoles from "./gameConsoleReducer";

const rootReducer = combineReducers({
  inventory,
  gameConsoles
});

export default rootReducer;
