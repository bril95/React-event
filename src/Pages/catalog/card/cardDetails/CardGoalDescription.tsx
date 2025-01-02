import { Box, Typography } from "@mui/material";
import CardInfoProps from "../../../../interfaces/CardType";

const CardGoalDescription: React.FC<CardInfoProps> = ({ card }) => {
  return (
    <Box>
      <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>Цель сбора</Typography>
      <Typography sx={{ fontSize: '14px' }}>{card.goalDescription}</Typography>
    </Box>
  )
};

export default CardGoalDescription;
