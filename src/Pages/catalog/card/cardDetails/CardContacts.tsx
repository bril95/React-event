import { Box, Typography } from "@mui/material";
import { CardInfoProps } from "../Info";

const CardContacts: React.FC<CardInfoProps> = ({ card }) => {
  return (
    <Box>
      <Typography variant="h6">Контакты</Typography>
      <Box sx={{
        display: 'flex',
      }}>
        <Box>
          <Typography>Телефон</Typography>
          <Typography>{card.contacts.phone}</Typography>
        </Box>
        <Box>
          <Typography>E-mail</Typography>
          <Typography>{card.contacts.email}</Typography>
        </Box>
        <Box>
          <Typography>Сайт</Typography>
          <Typography>{card.contacts.website}</Typography>
        </Box>
      </Box>
    </Box>
  )
};

export default CardContacts;
