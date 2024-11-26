import { Box, Typography } from "@mui/material";
import { CardInfoProps } from "../Info";

const CardDescription: React.FC<CardInfoProps> = ({ card }) => {
  return (
    <Box>
      <Typography variant="h6">Кому мы помогаем</Typography>
      <Typography>{card.description}</Typography>
    </Box>
  )
};

export default CardDescription;
