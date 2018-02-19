import { CREATE_ENTRY } from '../actions/actionTypes';

export default function inventoryReducer(state = [], action) {
  switch (action.type) {
    case CREATE_ENTRY:
      return [...state,
      Object.assign({}, action.entry)
      ];
    default:
      return state;
  }
}