import { LOAD_INVENTORY_SUCCESS } from "./actionTypes";
import inventoryApi from "../api/mockInventoryApi";

export function loadInventorySuccess(inventory) {
  return { type: LOAD_INVENTORY_SUCCESS, inventory };
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
