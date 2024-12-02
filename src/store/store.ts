import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slice/authSlice';
import favoriteReducer from '../slice/favoritesSlice';
import filterReducer from '../slice/filterSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    favorites: favoriteReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;