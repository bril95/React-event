import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

type DeadlineData = {
  deadlineData: Date | null,
}

const initialState: DeadlineData = {
  deadlineData: null,
};

const deadlineData = createSlice({
  name: 'deadlineData',
  initialState,
  reducers: {
    setDeadlineData(state, { payload }: PayloadAction<Date>) {
      state.deadlineData = payload
    },
    resetDeadline: () => initialState,
  },
});

export const { setDeadlineData, resetDeadline } = deadlineData.actions;
export const selectDeadlineData = (state: RootState) => state.deadlineData.deadlineData;
export default deadlineData.reducer;