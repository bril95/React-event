import { Box, Typography } from "@mui/material";
import notFoundResult from "../../assets/notFoundResult.svg";

const NotFoundPage = () => {
  return (
    <Box>
      <img src={notFoundResult} alt="notFoundResult" />
      <Typography variant="h6">Запросы не найдены</Typography>
    </Box>
  )
};

export default NotFoundPage;