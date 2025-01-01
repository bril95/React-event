import { Box, Typography } from "@mui/material";
import CardInfoProps from "../../../../interfaces/CardType";
import normalizeTitle from "../../../common/normalizeTitle";

const CardTitle: React.FC<CardInfoProps> = ({ card }) => {
  return (
    <Box>
      <Typography variant="h5">{normalizeTitle(card.title)}</Typography>
    </Box>
  )
};

export default CardTitle;
