import { Box, FormControlLabel, FormGroup, Typography, Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, toggleCheckbox } from "../../../slice/filterSlice";
import HelpCheckboxProps from "../../../interfaces/FilterType";

const helpType = ['helperType', 'isOnline', 'qualification'];

const HelpCheckbox: React.FC<HelpCheckboxProps> = ({ title, labels }) => {
  const dispatch = useDispatch();
  const currentIsChecked = useSelector(selectFilter);

  // const selectFilterByCategoryKeyAndSubcategory = (category: string, key: string, subcategory?: string) => {
  //   return currentIsChecked.find(
  //     (filter) => 
  //       filter.category === category &&
  //       filter.key === key &&
  //       (subcategory ? filter.subcategory === subcategory : true)
  //   );
  // }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, category: string) => {
    const key = event.target.value;
    const checked = event.target.checked;
    const subcategory = helpType.includes(category) ? 'helperRequirements' : '';

    dispatch(toggleCheckbox({
      category,
      subcategory,
      key,
      isChecked: checked,
    }));
  };

  return (
    <Box>
      <Typography>{title.label}</Typography>
      <FormGroup sx={{ ml: '12px' }}>
        {labels.map((el, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                value={el.value}
                // checked={isChecked}
                onChange={(e) => handleChange(e, title.value)}
              />
            }
            label={el.label}
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default HelpCheckbox;
