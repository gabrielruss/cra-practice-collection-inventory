import {
  LOAD_INVENTORY_SUCCESS,
  SAVE_GAME_SUCCESS,
  UPDATE_GAME_SUCCESS
} from "./actionTypes";
import inventoryApi from "../api/mockInventoryApi";

export function loadInventorySuccess(inventory) {
  return { type: LOAD_INVENTORY_SUCCESS, inventory };
}

export function saveGameSuccess(game) {
  return { type: SAVE_GAME_SUCCESS, game };
}

export function updateGameSuccess(game) {
  return { type: UPDATE_GAME_SUCCESS, game };
}

// my first thunk
export function loadInventory() {
  return function(dispatch) {
    return inventoryApi
      .getInventory()
      .then(inventory => {
        dispatch(loadInventorySuccess(inventory));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function saveToInventory(game) {
  return function(dispatch, getState) {
    return inventoryApi
      .saveToInventory(game)
      .then(savedGame => {
        dispatch(saveGameSuccess(savedGame));
      })
      .catch(error => {
        throw error;
      });
  };
}
