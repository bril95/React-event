import { useState } from 'react';
import { Box, Typography } from "@mui/material";
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { setDeadlineData } from '../../../slice/deadlineDataSlice';
import { useDispatch } from 'react-redux';
import { Dayjs } from 'dayjs';

export default function HelpDeadline({ reset }) {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const dispatch = useDispatch();

  const handleDateChange = (newValue: Dayjs | null) => {
    if (!newValue) return;
    setSelectedDate(newValue);
    const deadlineDate = newValue.format('YYYY-MM-DD');
    dispatch(setDeadlineData(deadlineDate));
  };

  return (
    <Box>
      <Typography
        sx={{
          mt: '20px',
          mb: '10px',
        }}
      >
        Помощь актуальна до:
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Выберите дату"
          value={selectedDate}
          onChange={handleDateChange}
          format="DD.MM.YYYY"
        />
      </LocalizationProvider>
    </Box>
  );
}
