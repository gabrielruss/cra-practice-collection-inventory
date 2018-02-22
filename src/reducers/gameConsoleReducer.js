import { LOAD_GAME_CONSOLES_SUCCESS } from "../actions/actionTypes";
import initialState from "./initialState";

export default function consoleReducer(state = initialState.gameConsoles, action) {
  switch (action.type) {
    case LOAD_GAME_CONSOLES_SUCCESS:
      return action.gameConsoles;
    default:
      return state;
  }
}
