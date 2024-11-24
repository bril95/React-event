import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

type User = {
  token: string | null,
  isAuthorized: boolean,
}

const initialState: User = {
  token: null,
  isAuthorized: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUser(state, { payload }: PayloadAction<string>) {
      state.token = payload;
    },
    setIsAuthorized(state, { payload }: PayloadAction<boolean>) {
      state.isAuthorized = payload;
    },
    clearAuthState(state) {
      state.token = null;
      state.isAuthorized = false;
    },
  },
});

export const { setAuthUser, setIsAuthorized, clearAuthState } = authSlice.actions;
export const selectIsAuthorized = (state: RootState) => state.auth.isAuthorized;
export const selectSetAuthUser = (state: RootState) => state.auth.token;
export default authSlice.reducer;