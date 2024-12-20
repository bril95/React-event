interface HelpCheckboxLabelProps {
  label: string;
  value: string | boolean;
}

export default interface HelpCheckboxProps {
  title: HelpCheckboxLabelProps;
  labels: HelpCheckboxLabelProps[];
  reset: boolean;
}