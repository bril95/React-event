import { Box, Typography } from "@mui/material";
import errorInfo from "../../assets/errorInfo.svg";

const ErrorPage = () => {
  return (
    <Box>
      <img src={errorInfo} alt="errorInfo" />
      <Typography variant="h6">Ошибка! Не удалось загрузить запросы</Typography>
    </Box>
  )
};

export default ErrorPage;