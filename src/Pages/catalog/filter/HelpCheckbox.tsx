import { Box, FormControlLabel, FormGroup, Typography, Checkbox } from "@mui/material";

interface HelpCheckboxProps {
  title: string;
  labels: string[];
}

const HelpCheckbox: React.FC<HelpCheckboxProps> = ({ title, labels }) => {
  return (
    <Box>
      <Typography>{title}</Typography>
      <FormGroup sx={{ ml: '12px' }}>
        {labels.map((el, index) => (
          <FormControlLabel key={index} control={<Checkbox />} label={el} />
        ))}
      </FormGroup>
    </Box>
  );
};

export default HelpCheckbox;
