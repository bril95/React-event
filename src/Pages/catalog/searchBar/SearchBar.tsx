import { Box, Typography, FormControl, Input, InputAdornment } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {

  const handleInput = (e) => {
    console.log(e.target.value);
  };

  return (
    <Box sx={{
      padding: '20px 36px 40px',
    }}>
      <Typography>Найти запрос</Typography>
      <FormControl fullWidth variant="standard" sx={{
        mt: '27.5px'
      }}>
          <Input
            id="taskOrOrganizationName"
            onInput={handleInput}
            placeholder="Введите название задачи или организации"
            startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
            }
          />
        </FormControl>
    </Box>
  )
};

export default SearchBar;
