import { Box, Typography } from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contacts = () => {
  return (
    <Box>
      <Typography>E-mail</Typography>
      <Typography>email@gmail.com</Typography>

      <Typography>Телефон</Typography>
      <Typography>+7999999999</Typography>

      <Typography>Социальные сети</Typography>
      <TelegramIcon />
      <WhatsAppIcon />
    </Box>
  )
};

export default Contacts;