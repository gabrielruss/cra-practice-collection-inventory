import {
  LOAD_INVENTORY_SUCCESS,
  SAVE_GAME_SUCCESS,
  UPDATE_GAME_SUCCESS
} from "./actionTypes";
import inventoryApi from "../api/mockInventoryApi";
import { beginAjaxCall } from "./ajaxStatusAction";

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
  return function (dispatch) {
    dispatch(beginAjaxCall());
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
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return inventoryApi
      .saveToInventory(game)
      .then(savedGame => {
        savedGame.id ? dispatch(updateGameSuccess(savedGame)) : dispatch(saveGameSuccess(savedGame));
      })
      .catch(error => {
        throw error;
      });
  };
}
