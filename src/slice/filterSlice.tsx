import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

interface Filter {
  category: string;
  subcategory?: string;
  key: string;
  isChecked: boolean;
}

type FiltersState = Filter[];

const initialState: FiltersState = [
  { category: 'requesterType', key: 'person', isChecked: false },
  { category: 'requesterType', key: 'organization', isChecked: false },
  { category: 'helpType', key: 'material', isChecked: false },
  { category: 'helpType', key: 'finance', isChecked: false },
  { category: 'helperRequirements', subcategory: 'qualification', key: 'professional', isChecked: false },
  { category: 'helperRequirements', subcategory: 'qualification', key: 'common', isChecked: false },
  { category: 'helperRequirements', subcategory: 'isOnline', key: 'true', isChecked: false },
  { category: 'helperRequirements', subcategory: 'isOnline', key: 'false', isChecked: false },
  { category: 'helperRequirements', subcategory: 'helperType', key: 'group', isChecked: false },
  { category: 'helperRequirements', subcategory: 'helperType', key: 'single', isChecked: false },
];

interface TogglePayload {
  category: string;
  subcategory?: string;
  key: string;
  isChecked: boolean;
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleCheckbox: (state, action: PayloadAction<TogglePayload>) => {
      const { category, subcategory, key } = action.payload;
      const filter = state.find((elem) => elem.category === category &&
          (subcategory ? elem.subcategory === subcategory : true) &&
          elem.key === key
      );
      if (filter) {
        filter.isChecked = !filter.isChecked;
      }
    },
    resetFilters: () => initialState,
  },
});

export const { toggleCheckbox, resetFilters } = filterSlice.actions;
export const selectFilter = (state: RootState) => state.filter;
export default filterSlice.reducer;