import { LOAD_GAME_CONSOLES_SUCCESS } from "./actionTypes";
import gameConsoleApi from "../api/mockGameConsoleApi";

export function loadGameConsolesSuccess(gameConsoles) {
  return { type: LOAD_GAME_CONSOLES_SUCCESS, gameConsoles };
}

export function loadGameConsoles() {
  return function(dispatch) {
    return gameConsoleApi
      .getAllGameConsoles()
      .then(gameConsoles => {
        dispatch(loadGameConsolesSuccess(gameConsoles));
      })
      .catch(error => {
        throw error;
      });
  };
}
