import { Box, FormControlLabel, FormGroup, Typography, Checkbox } from "@mui/material";

interface HelpCheckboxLabelProps {
  label: string;
  value: string;
}

interface HelpCheckboxProps {
  title: string;
  labels: HelpCheckboxLabelProps[];
}

const HelpCheckbox: React.FC<HelpCheckboxProps> = ({ title, labels }) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const label = event.target.value;
    console.log(label);
  };

  return (
    <Box>
      <Typography>{title}</Typography>
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
