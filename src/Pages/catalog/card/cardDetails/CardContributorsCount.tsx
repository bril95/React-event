import { Box, Typography, } from "@mui/material";
import CardInfoProps from "../../../../interfaces/CardType";

const CardContributorsCount: React.FC<CardInfoProps> = ({ card }) => {
  return (
    <Box>
      <Typography sx={{ fontSize: '14px' }}>{card.contributorsCount === 0 ? 'Вы будете первым' : `Нас уже: ${card.contributorsCount}`}</Typography>
    </Box>
  )
};

export default CardContributorsCount;
