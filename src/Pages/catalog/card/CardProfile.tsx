import { Box } from "@mui/material"
import HeaderCardProfile from "./HeaderCardProfile";
import CardInfo from "./CardInfo";

const CardProfile = () => {
  return (
    <Box sx={{
      padding: '12px 36px 40px',
    }}>
      <HeaderCardProfile />
      <Box sx={{
        display: 'flex',
        gap: '24px'
      }}>
        <CardInfo />
        <CardInfo />
        <CardInfo />
      </Box>
    </Box>
  )
};

export default CardProfile;
