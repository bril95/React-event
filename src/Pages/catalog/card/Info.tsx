import { Box, Typography, LinearProgress } from "@mui/material";
import CardType from "./CardType";

interface CardInfoProps {
  card: CardType;
}

const Info: React.FC<CardInfoProps> = ({ card }) => {

  const progress = (card.requestGoalCurrentValue / card.requestGoal) * 100;

  return (
    <Box>
      <Typography variant="h6">Организатор</Typography>
      <Typography>{card.organization.title}</Typography>

      <Typography variant="h6">Локация</Typography>
      {
        card.helperRequirements.isOnline 
        ? <Typography>Онлайн</Typography>
        : (
          <Box>
            <Typography>Область: {card.location.district}</Typography>
            <Typography>Населенный пункт: {card.location.city}</Typography>
          </Box>
        )
      }

      <Typography variant="h6">Цель сбора</Typography>
      <Typography>{card.goalDescription}</Typography>

      <Typography variant="h6">Завершение</Typography>
      <Typography>{new Date(card.endingDate).toLocaleDateString()}</Typography>

      <Typography variant="h6">Мы собрали</Typography>
      <Typography>
      <Box sx={{ mt: 2 }}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
        {card.requestGoalCurrentValue} из {card.requestGoal} рублей
      </Typography>
      <Typography>{card.contributorsCount === 0 ? 'Вы будете первым' : `Нас уже: ${card.contributorsCount}`}</Typography>
    </Box>
  );
};

export default Info;
