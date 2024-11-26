import { Box, Typography } from "@mui/material";
import { CardInfoProps } from "../Info";

const CardLocation: React.FC<CardInfoProps> = ({ card }) => {
  return (
    <Box>
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
    </Box>
  )
};

export default CardLocation;
