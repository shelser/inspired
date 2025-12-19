import { combineReducers } from "@reduxjs/toolkit";

import colorsReducer from './features/colorsSlice';
import goodsReducer from './features/goodsSlice';
import navigationReducer from './features/navigationSlice';


export const rootReducer = combineReducers({
  navigation: navigationReducer,
  colors: colorsReducer,
  goods: goodsReducer,
});

