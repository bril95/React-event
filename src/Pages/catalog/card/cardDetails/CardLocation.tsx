import { Box, Typography } from "@mui/material";
import CardInfoProps from "../../../../interfaces/CardType";

const CardLocation: React.FC<CardInfoProps> = ({ card }) => {
  return (
    <Box>
      <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>Локация</Typography>
      {
        card.helperRequirements.isOnline 
        ? <Typography sx={{ fontSize: '14px' }}>Онлайн</Typography>
        : (
          <Box>
            <Typography sx={{ fontSize: '14px' }}>Область: {card.location.district}</Typography>
            <Typography sx={{ fontSize: '14px' }}>Населенный пункт: {card.location.city}</Typography>
          </Box>
        )
      }
    </Box>
  )
};

export default CardLocation;
