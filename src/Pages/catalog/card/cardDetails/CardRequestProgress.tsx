import { Box, Typography, LinearProgress } from "@mui/material";
import CardInfoProps from "../../../../interfaces/CardType";

const CardRequestProgress: React.FC<CardInfoProps> = ({ card }) => {
  const progress = (card.requestGoalCurrentValue / card.requestGoal) * 100;

  return (
    <Box>
      <Typography variant="h6">Мы собрали</Typography>
      <LinearProgress variant="determinate" value={progress} />
      <Typography>
        {card.requestGoalCurrentValue} из {card.requestGoal} рублей
      </Typography>
    </Box>
  )
};

export default CardRequestProgress;
