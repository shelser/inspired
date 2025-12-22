import { combineReducers } from "@reduxjs/toolkit";

import colorsReducer from './features/colorsSlice';
import goodsReducer from './features/goodsSlice';
import navigationReducer from './features/navigationSlice';
import productReducer from './features/productSlice';


export const rootReducer = combineReducers({
  navigation: navigationReducer,
  colors: colorsReducer,
  goods: goodsReducer,
  product: productReducer,
});

