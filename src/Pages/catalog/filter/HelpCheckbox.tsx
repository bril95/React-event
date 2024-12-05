import { Box, FormControlLabel, FormGroup, Typography, Checkbox } from "@mui/material";
import { useDispatch } from "react-redux";
import { setFilterPar, deleteFilterPar } from "../../../slice/filterSlice";
import HelpCheckboxProps from "../../../interfaces/FilterType";

const HelpCheckbox: React.FC<HelpCheckboxProps> = ({ title, labels }) => {
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const labelValue = event.target.value;
    const titleValue = title.value;
    const dataValue = { labelValue, titleValue};

    if(event.target.checked) {
      dispatch(setFilterPar(dataValue));
    } else {
      dispatch(deleteFilterPar(dataValue));
    }
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
              onChange={handleChange}
            />}
            label={el.label} />
        ))}
      </FormGroup>
    </Box>
  );
};

export default HelpCheckbox;
