import { Box, Typography, FormControl, Input, InputAdornment, IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
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
            placeholder="Введите название задачи или организации"
            startAdornment={
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
            }
          />
        </FormControl>
    </Box>
  )
};

export default SearchBar;
