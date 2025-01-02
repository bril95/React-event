import { Box, Typography } from "@mui/material";
import CardInfoProps from "../../../../interfaces/CardType";

const CardEndingDate: React.FC<CardInfoProps> = ({ card }) => {
  return (
    <Box>
      <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>Завершение</Typography>
      <Typography sx={{ fontSize: '14px' }}>
        {new Date(card.endingDate).toLocaleDateString('ru-RU', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })}
      </Typography>
    </Box>
  )
};

export default CardEndingDate;
