import { Box, Button, Typography } from "@mui/material"
import Volunteers from "./Volunteers";
import HelpDeadline from "./HelpDeadline";
import { useDispatch } from "react-redux";
import MainFilter from "./MainFilter";
import { resetFilters } from "../../../slice/filterSlice";

const FilterBar = () => {
const dispach = useDispatch();

const resetForm = () => {
  dispach(resetFilters());
}

  return (
    <Box sx={{
      padding: '20px',
      width: '320px',
      boxSizing: 'border-box',
    }}>
      <Typography>Фильтрация</Typography>
      <MainFilter />
      <Volunteers />
      <HelpDeadline />
      <Button sx={{
            width: '100%',
            boxSizing: 'border-box',
            height: '42px',
            mt: '40px',
            backgroundColor: '#fff',
            color: '#000',
            borderColor: '#000',
          }}
          onClick={resetForm}
          variant="outlined"
          type="submit">
        Сбросить
      </Button>
    </Box>
  )
};

export default FilterBar;
