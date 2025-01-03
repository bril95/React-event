import { Box } from "@mui/material";
import CardOrganization from "../cardDetails/CardOrganization";
import CardLocation from "../cardDetails/CardLocation";
import CardGoalDescription from "../cardDetails/CardGoalDescription";
import CardEndingDate from "../cardDetails/CardEndingDate";
import CardRequestProgress from "../cardDetails/CardRequestProgress";
import CardContributorsCount from "../cardDetails/CardContributorsCount";
import CardInfoProps from "../../../../interfaces/CardType";

const GridView: React.FC<CardInfoProps> = ({ card }) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      mt: '10px',
      height: '402px'
    }}>
      <CardOrganization card={card} />

      <CardLocation card={card} />

      <CardGoalDescription card={card} />

      <CardEndingDate card={card} />

      <CardRequestProgress card={card} />

      <CardContributorsCount card={card} />
    </Box>
  );
};

export default GridView;
