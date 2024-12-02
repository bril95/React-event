import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

interface HelpCheckboxLabelProps {
  labelValue: string;
  titleValue: string | boolean;
}

type allFilter = {
  filterPar: HelpCheckboxLabelProps[];
}

const initialState: allFilter = {
  filterPar: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterPar(state, { payload }: PayloadAction<HelpCheckboxLabelProps>) {
      state.filterPar.push(payload);
    },
    deleteFilterPar(state, { payload }: PayloadAction<HelpCheckboxLabelProps>) {
      state.filterPar = state.filterPar.filter(({ labelValue, titleValue }) =>
        labelValue !== payload.labelValue || titleValue !== payload.titleValue
      );
    }
  },
});

export const { setFilterPar, deleteFilterPar } = filterSlice.actions;
export const selectFilterPar = (state: RootState) => state.filter.filterPar;
export default filterSlice.reducer;