import { CREATE_ENTRY } from '../actions/actionTypes';

const initialState = [{
  name: "",
  description: "",
  console: ""
}];

function inventoryReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ENTRY:
      return [...state,
      Object.assign({}, action.entry)
      ];
    default:
      return state;
  }
}