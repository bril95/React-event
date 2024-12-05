import { Box, Typography } from "@mui/material";
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const HelpDeadline = () => {
  return (
    <Box>
      <Typography sx={{
        mt: '20px',
        mb: '10px'
      }}>Помощь актуальна до:</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Выберете дату" format="DD-MM-YYYY" />
      </LocalizationProvider>
    </Box>
  )};

export default HelpDeadline;