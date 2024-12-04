import { Box, Typography } from "@mui/material";
import CardInfoProps from "../../../../interfaces/CardType";

const CardVerefiedOrg: React.FC<CardInfoProps> = ({ card }) => {
  return (
    <Box>
      <Typography>{card.organization.isVerified ? 'Организация проверена' : 'Организация не проверена'}</Typography>
    </Box>
  )
};

export default CardVerefiedOrg;
