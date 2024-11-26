import { Box } from "@mui/material";
import CardType from "./CardType";
import CardOrganization from "./cardDetails/CardOrganization";
import CardLocation from "./cardDetails/CardLocation";
import CardGoalDescription from "./cardDetails/CardGoalDescription";
import CardEndingDate from "./cardDetails/CardEndingDate";
import CardRequestProgress from "./cardDetails/CardRequestProgress";
import CardContributorsCount from "./cardDetails/CardContributorsCount";

export interface CardInfoProps {
  card: CardType;
}

const Info: React.FC<CardInfoProps> = ({ card }) => {
  return (
    <Box>
      <CardOrganization card={card} />

      <CardLocation card={card} />

      <CardGoalDescription card={card} />

      <CardEndingDate card={card} />

      <CardRequestProgress card={card} />
      <CardContributorsCount card={card} />
    </Box>
  );
};

export default Info;
