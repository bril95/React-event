import { Box } from "@mui/material";
import CardOrganization from "./cardDetails/CardOrganization";
import CardLocation from "./cardDetails/CardLocation";
import CardGoalDescription from "./cardDetails/CardGoalDescription";
import CardEndingDate from "./cardDetails/CardEndingDate";
import CardContributorsCount from "./cardDetails/CardContributorsCount";
import CardInfoProps from "../../../interfaces/CardType";


const AltView: React.FC<CardInfoProps> = ({ card }) => {
  return (
    <Box>
      <CardOrganization card={card} />

      <CardLocation card={card} />

      <CardGoalDescription card={card} />

      <CardEndingDate card={card} />

      <CardContributorsCount card={card} />
    </Box>
  );
};

export default AltView;
