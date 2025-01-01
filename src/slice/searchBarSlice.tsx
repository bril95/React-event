import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../api/store';

type SearchBarState = {
  search: string | null;
};

const initialState: SearchBarState = {
  search: null,
};

const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    setSearchBar(state, { payload }: PayloadAction<string>) {
      state.search = payload === '' ? null : payload;
    },
  },
});

export const { setSearchBar } = searchBarSlice.actions;
export const selectSearchBar = (state: RootState) => state.searchBar.search;
export default searchBarSlice.reducer;
