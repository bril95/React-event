import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../api/store';

type ToggleButton = {
  toggleButton: string,
}

const initialState: ToggleButton = {
  toggleButton: 'grid',
};

const toggleButton = createSlice({
  name: 'toggleButton',
  initialState,
  reducers: {
    setToggleButton(state, { payload }: PayloadAction<string>) {
      state.toggleButton = payload
    },
  },
});

export const { setToggleButton} = toggleButton.actions;
export const selectToggleButton = (state: RootState) => state.toggleButton.toggleButton;
export default toggleButton.reducer;