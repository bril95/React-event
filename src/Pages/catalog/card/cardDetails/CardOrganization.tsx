import { Box, Typography } from "@mui/material";
import { CardInfoProps } from "../Info";

const CardOrganization:React.FC<CardInfoProps> = ({ card }) => {
  return (
    <Box>
      <Typography variant="h6">Организатор</Typography>
      <Typography>{card.organization.title}</Typography>
    </Box>
  )
};

export default CardOrganization;