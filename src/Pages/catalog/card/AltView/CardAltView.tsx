import { Card, CardActions, Typography, Box, IconButton } from "@mui/material";
import Grid from '@mui/material/Grid2';
import StarIcon from '@mui/icons-material/Star';
import CardType from "../../../../interfaces/CardType";
import { useNavigate } from "react-router-dom";
import HelpButton from "../currentCard/HelpButton";
import { useSelector } from "react-redux";
import { selectFavoritesId } from "../../../../slice/favoritesSlice";
import useFavorites from "../../../../hooks/useFavorites";
import AltView from "./AltView";
import CardRequestProgress from "../cardDetails/CardRequestProgress";
import CardContributorsCount from "../cardDetails/CardContributorsCount";

interface CardInfoProps {
  card: CardType;
}

const CardAltView: React.FC<CardInfoProps> = ({ card }) => {
  const navigate = useNavigate();
  const allFavoritesId = useSelector(selectFavoritesId);
  const clickFavoritesButton = useFavorites();

  const handleCardClick = (id: string) => {
    navigate(`card/${id}`, { state: { id } });
  }

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    clickFavoritesButton(card.id);
  }

  return (
    <Card onClick={() => handleCardClick(card.id)}
      sx={{
        width: '1008px',
        height: '322px',
        flexGrow: 1,
      }}>
        <Grid container spacing={'30px'}>
          <Grid size={3}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '252px',
            }}>
              <Typography variant="h5" sx={{
              }}>
                {card.title}
              </Typography>
            <CardRequestProgress card={card} />
            <CardContributorsCount card={card} />
            <CardActions>
            <HelpButton id={card.id}/>
            </CardActions>
            </Box>
          </Grid>
          <Grid size={6}>
            <AltView card={card}/>
          </Grid>
          <Grid size={3}>
            <IconButton disableRipple onClick={handleFavoriteClick}>
              <StarIcon
                color={allFavoritesId.includes(card.id) ? "warning" : 'action'}
                sx={{mr: '8px'}}
              />
              <Typography variant="h6">В избранное</Typography>
            </IconButton>
          </Grid>
        </Grid>
    </Card>
  )
};

export default CardAltView;
