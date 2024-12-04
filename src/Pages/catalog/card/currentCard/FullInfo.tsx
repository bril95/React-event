import { Box } from "@mui/material";
import CardOrganization from "../cardDetails/CardOrganization";
import CardTitle from "../cardDetails/CardTitle";
import CardDescription from "../cardDetails/CardDescription";
import CardSteps from "../cardDetails/CardSteps";
import CardGoalDescription from "../cardDetails/CardGoalDescription";
import CardEndingDate from "../cardDetails/CardEndingDate";
import CardLocation from "../cardDetails/CardLocation";
import CardContacts from "../cardDetails/CardContacts";
import CardInfoProps from "../../../../interfaces/CardType";
import CardVerefiedOrg from "../cardDetails/CardVerefiedOrg";
import FavoriteButton from "./FavoriteButton";

const FullInfo: React.FC<CardInfoProps> = ({ card }) => {
  return (
    <Box sx={{
      display: 'flex',
      p: '40px 36px 0',
      justifyContent: 'space-between',
      width: '1080px'
    }}>
      <Box sx={{
        width: '550px'
      }}>
        <CardTitle card={card} />

        <CardOrganization card={card} />
        <CardVerefiedOrg card={card} />

        <CardDescription card={card} />

        <CardGoalDescription card={card} />

        <CardSteps card={card} />

        <CardEndingDate card={card} />

        <CardLocation card={card} />

        <CardContacts card={card} />
      </Box>
      <FavoriteButton id={card.id}/>
    </Box>
  )
};

export default FullInfo;