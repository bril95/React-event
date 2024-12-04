import { Box, Typography } from "@mui/material";
import CardInfoProps from "../../../../interfaces/CardType";

const CardEndingDate: React.FC<CardInfoProps> = ({ card }) => {
  return (
    <Box>
      <Typography variant="h6">Завершение</Typography>
      <Typography>
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
