import { Box, IconButton, Typography } from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Profile from "../../interfaces/InfoProfileProps";
import vk from '../../assets/vk.svg'

type InfoProfileProps = {
  profile: Profile;
};

const Contacts: React.FC<InfoProfileProps> = ({ profile }) => {
  return (
    <Box>
      <Typography>E-mail</Typography>
      <Typography>{profile.contacts.email}</Typography>

      <Typography>Телефон</Typography>
      <Typography>{profile.contacts.phone}</Typography>

      <Typography>Социальные сети</Typography>
      <IconButton component="a" href={profile.contacts.social.telegram} rel="noopener noreferrer">
        <TelegramIcon />
      </IconButton>
      <IconButton component="a" href={profile.contacts.social.whatsapp} rel="noopener noreferrer">
        <WhatsAppIcon />
      </IconButton>
      <IconButton component="a" href={profile.contacts.social.vk} rel="noopener noreferrer">
        <img src={vk} alt="vk icon" />
      </IconButton>
    </Box>
  )
};

export default Contacts;