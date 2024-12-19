import { Box, FormControlLabel, FormGroup, Typography, Checkbox } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleCheckbox } from "../../../slice/filterSlice";
import HelpCheckboxProps from "../../../interfaces/FilterType";

const helpType = ['helperType', 'isOnline', 'qualification'];

const HelpCheckbox: React.FC<HelpCheckboxProps> = ({ title, labels }) => {
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, category: string) => {
    const key = event.target.value;
    const checked = event.target.checked;
    let subcategory = '';
    if (helpType.includes(category)) {
      subcategory = category;
      category = 'helperRequirements';
    }

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
