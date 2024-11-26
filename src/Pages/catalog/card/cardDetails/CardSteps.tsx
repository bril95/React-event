import { Box, Typography } from "@mui/material";
import { CardInfoProps } from "../Info";

const CardSteps: React.FC<CardInfoProps> = ({ card }) => {
  return (
    <Box>
      <Typography variant="h6">План действий</Typography>
      <Box>
        {card.actionsSchedule.map((step) => (
          <Typography key={step.stepLabel}>{step.stepLabel}</Typography>
        ))}
      </Box>
    </Box>
  )
};

export default CardSteps;
