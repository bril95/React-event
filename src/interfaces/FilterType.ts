interface HelpCheckboxLabelProps {
  label: string;
  value: string | boolean;
}

export default interface HelpCheckboxProps {
  title: HelpCheckboxLabelProps;
  labels: HelpCheckboxLabelProps[];
  reset: boolean;
}

export interface Filter {
  category: string;
  subcategory?: string;
  key: string;
  isChecked: boolean;
}

export type FiltersState = Filter[];
