import { LOAD_INVENTORY_SUCCESS } from './actionTypes';
import inventoryApi from "../api/mockInventoryApi";

export function loadInventorySuccess(entries) {
  return { type: LOAD_INVENTORY_SUCCESS, entries }
}
// my first thunk
export function loadInventory() {
  return function (dispatch) {
    return inventoryApi.getInventory().then(inventory => {
      dispatch(loadInventorySuccess(inventory));
    }).catch(error => {
      throw (error);
    });
  }
}

