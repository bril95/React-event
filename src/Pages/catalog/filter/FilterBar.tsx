import { Box, Button, Typography } from "@mui/material"
import Volunteers from "./Volunteers";
import HelpDeadline from "./HelpDeadline";
import { useDispatch } from "react-redux";
import MainFilter from "./MainFilter";
import { resetFilters } from "../../../slice/filterSlice";
import { useEffect, useState } from "react";

const FilterBar = () => {
const dispach = useDispatch();
const [reset, setReset] = useState(false);

const resetForm = () => {
  dispach(resetFilters());
  setReset(true)
}

useEffect(() => {
  if (reset) {
    setReset(false);
  }
}, [reset]);

  return (
    <Box sx={{
      padding: '20px',
      width: '320px',
      boxSizing: 'border-box',
    }}>
      <Typography>Фильтрация</Typography>
      <MainFilter reset={reset} />
      <Volunteers reset={reset} />
      <HelpDeadline reset={reset} />
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
