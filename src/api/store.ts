import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slice/authSlice';
import favoriteReducer from '../slice/favoritesSlice';
import filterReducer from '../slice/filterSlice';
import toggleButtonReducer from '../slice/toggleButtonSlice';
import deadlineReducer from '../slice/deadlineDataSlice';
import { api } from './api.js';

const store = configureStore({
  reducer: {
    auth: authReducer,
    favorites: favoriteReducer,
    filter: filterReducer,
    toggleButton: toggleButtonReducer,
    deadlineData: deadlineReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;