import CardOrganization from "./cardDetails/CardOrganization";
import CardLocation from "./cardDetails/CardLocation";
import CardGoalDescription from "./cardDetails/CardGoalDescription";
import CardEndingDate from "./cardDetails/CardEndingDate";
import CardInfoProps from "../../../interfaces/CardType";
import Grid from '@mui/material/Grid2';


const AltView: React.FC<CardInfoProps> = ({ card }) => {
  return (
    <Grid container spacing={'30px'}>
      <Grid size={6}>
        <CardOrganization card={card} />

        <CardEndingDate card={card} />
      </Grid>
      <Grid size={6}>
        <CardLocation card={card} />

        <CardGoalDescription card={card} />
      </Grid>
    </Grid>
  );
};

export default AltView;
