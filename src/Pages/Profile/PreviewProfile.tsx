import { Box, Button, Typography } from "@mui/material";

const PreviewProfile = () => {
  return (
    <Box sx={{
      width: '320px'
    }}>
      <Box>Photo</Box>
      <Typography>ФИО</Typography>
      <Typography>Статус</Typography>
      <Button>Выйти из аккаунта</Button>
    </Box>
  )
}

export default PreviewProfile;