import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { campersReducer } from "./catalog/catalogSlice";
import { persistReducerFavorites } from "./favorites/favoritesSlice";
import { filterReducer } from "./catalog/filterSlice";

export const store = configureStore({
  reducer: {
    catalog: campersReducer,
    favorites: persistReducerFavorites,
    filter:filterReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
