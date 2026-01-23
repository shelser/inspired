import { combineReducers } from "@reduxjs/toolkit";

import cartReducer from './features/cartSlice';
import colorsReducer from './features/colorsSlice';
import favoritesReducer from './features/favoritesSlice';
import goodsReducer from './features/goodsSlice';
import navigationReducer from './features/navigationSlice';
import productReducer from './features/productSlice';




export const rootReducer = combineReducers({
  navigation: navigationReducer,
  colors: colorsReducer,
  goods: goodsReducer,
  product: productReducer,
  favorites: favoritesReducer,
  cart: cartReducer,
});

