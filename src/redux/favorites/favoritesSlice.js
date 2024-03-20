import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { favor: [] },
  reducers: {
    addFavorites: (state, action) => {
      state.favor.push(action.payload);
    },
    removeFavorites: (state, action) => {
      state.favor = state.favor.filter((el) => el._id !== action.payload);
    },
  },
});

export const { addFavorites, removeFavorites } = favoritesSlice.actions;
const favoritesReducer = favoritesSlice.reducer;

const persistConfigFav = {
  key: "favorites",
  storage,
};

export const persistReducerFavorites = persistReducer(
  persistConfigFav,
  favoritesReducer
);
