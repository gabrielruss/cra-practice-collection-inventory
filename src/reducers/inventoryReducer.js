import {
  LOAD_INVENTORY_SUCCESS,
  SAVE_GAME_SUCCESS,
  UPDATE_GAME_SUCCESS
} from "../actions/actionTypes";
import initialState from "./initialState";

export default function inventoryReducer(
  state = initialState.inventory,
  action
) {
  switch (action.type) {
    case LOAD_INVENTORY_SUCCESS:
      return action.inventory;
    case SAVE_GAME_SUCCESS:
      return [...state, Object.assign({}, action.game)];
    case UPDATE_GAME_SUCCESS:
      return [
        ...state.filter(game => game.id !== action.game.id),
        Object.assign({}, action.game)
      ];
    default:
      return state;
  }
}
