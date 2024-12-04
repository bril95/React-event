import { Box, Typography } from "@mui/material";
import CardGoalDescription from "../cardDetails/CardGoalDescription";
import CardInfoProps from "../../../../interfaces/CardType";
import CardEndingDate from "../cardDetails/CardEndingDate";
import CardRequestProgress from "../cardDetails/CardRequestProgress";
import CardContributorsCount from "../cardDetails/CardContributorsCount";
import HelpButton from "./HelpButton";

const DonationSummary: React.FC<CardInfoProps> = ({ card }) => {
  return (
    <Box sx={{
      width: '320px',
    }}>
      <Typography variant="h5">Вместе для добрых дел</Typography>
      <CardGoalDescription card={card} />
      <CardEndingDate card={card} />
      <CardRequestProgress card={card} />
      <CardContributorsCount card={card} />
      <HelpButton id={card.id}/>
    </Box>
  )
};

export default DonationSummary;