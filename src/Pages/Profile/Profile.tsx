import { Typography, Box } from "@mui/material";
import HeaderProfile from "./HeaderProfile";
import PreviewProfile from "./PreviewProfile";

const Profile = () => {
  return (
    <Box>
      <Typography>Мой профиль</Typography>
      <Box sx={{
      display: 'flex',
      flexDirection: 'colomn',
      gap: '20px'
      }}>
        <PreviewProfile />
        <HeaderProfile />
      </Box>
    </Box>
  )
}

export default Profile;