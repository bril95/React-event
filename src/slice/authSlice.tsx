import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { User } from '../interfaces/LoginType';

const initialState: User = {
  token: sessionStorage.getItem('token'),
  isAuthorized: sessionStorage.getItem('isAuthorized') === 'true',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUser(state, { payload }: PayloadAction<string>) {
      state.token = payload
      sessionStorage.setItem('token', payload);
    },
    setIsAuthorized(state, { payload }: PayloadAction<boolean>) {
      state.isAuthorized = payload;
      sessionStorage.setItem('isAuthorized', String(payload));
    },
    clearAuthState(state) {
      state.token = null;
      state.isAuthorized = false;
      sessionStorage.clear();
    },
  },
});

export const { setAuthUser, setIsAuthorized, clearAuthState } = authSlice.actions;
export const selectIsAuthorized = (state: RootState) => state.auth.isAuthorized;
export const selectSetAuthUser = (state: RootState) => state.auth.token;
export default authSlice.reducer;