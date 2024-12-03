import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

type FavoritesReq = {
  favoritesId: string[];
}

const initialState: FavoritesReq = {
  favoritesId: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavoritesId(state, { payload }: PayloadAction<string>) {
      if(!state.favoritesId.includes(payload)) {
        state.favoritesId.push(payload);
      }
    },
    deleteFavoritesId(state, { payload }: PayloadAction<string>) {
      state.favoritesId = state.favoritesId.filter((el) => el !== payload)
    },
    setUpdateFavoritesId(state, { payload }: PayloadAction<string[]>) {
      state.favoritesId = payload;
    },
  },
});

export const { setFavoritesId, deleteFavoritesId, setUpdateFavoritesId } = favoritesSlice.actions;
export const selectFavoritesId = (state: RootState) => state.favorites.favoritesId;
export default favoritesSlice.reducer;