import { LOAD_INVENTORY_SUCCESS } from '../actions/actionTypes';

export default function inventoryReducer(state = [], action) {
  switch (action.type) {
    case LOAD_INVENTORY_SUCCESS:
      return action.inventory;
    default:
      return state;
  }
}