import { LOAD_INVENTORY_SUCCESS } from "../actions/actionTypes";
import initialState from "./initialState";

export default function inventoryReducer(state = initialState.inventory, action) {
  switch (action.type) {
    case LOAD_INVENTORY_SUCCESS:
      return action.inventory;
    default:
      return state;
  }
}
