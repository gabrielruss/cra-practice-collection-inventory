import { combineReducers } from 'redux';
import inventory from './inventoryReducer';

const rootReducer = combineReducers({
  inventory
});

export default rootReducer;