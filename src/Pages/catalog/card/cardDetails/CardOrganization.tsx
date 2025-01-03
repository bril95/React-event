import { Box, Typography } from "@mui/material";
import CardInfoProps from "../../../../interfaces/CardType";

const CardOrganization:React.FC<CardInfoProps> = ({ card }) => {
  return (
    <Box>
      <Typography sx={{ fontSize: '14px', fontWeight: 'bold', mb: '4px' }}>Организатор</Typography>
      <Typography sx={{ fontSize: '14px' }}>{card.organization.title}</Typography>
    </Box>
  )
};

export default CardOrganization;