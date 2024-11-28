import { Box } from "@mui/material";
import errorInfo from "../../assets/errorInfo.svg";

const ErrorPage = () => {
  return (
    <Box>
      <img src={errorInfo} alt="errorInfo" />
    </Box>
  )
};

export default ErrorPage;