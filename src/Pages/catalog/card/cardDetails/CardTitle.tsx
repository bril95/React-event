import { Box, Typography } from "@mui/material";
import CardInfoProps from "../../../../interfaces/CardType";

const CardTitle: React.FC<CardInfoProps> = ({ card }) => {
  return (
    <Box>
      <Typography variant="h5">{card.title}</Typography>
    </Box>
  )
};

export default CardTitle;
