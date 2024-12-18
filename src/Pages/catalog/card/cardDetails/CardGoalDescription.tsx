import { Box, Typography } from "@mui/material";
import CardInfoProps from "../../../../interfaces/CardType";

const CardGoalDescription: React.FC<CardInfoProps> = ({ card }) => {
  return (
    <Box>
      <Typography variant="h6">Цель сбора</Typography>
      <Typography>{card.goalDescription}</Typography>
    </Box>
  )
};

export default CardGoalDescription;
