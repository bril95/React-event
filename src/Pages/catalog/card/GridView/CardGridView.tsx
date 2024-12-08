import { CardMedia, Card, CardContent, CardActions, Typography, Box, IconButton } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import GridView from "./GridView";
import { useNavigate } from "react-router-dom";
import HelpButton from "../currentCard/HelpButton";
import { useSelector } from "react-redux";
import { selectFavoritesId } from "../../../../slice/favoritesSlice";
import useFavorites from "../../../../hooks/useFavorites";
import CardInfoProps, { CardType } from "../../../../interfaces/CardType";


const CardGridView: React.FC<CardInfoProps> = ({ card }) => {
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

  const getImageUrl = (card: CardType): string=> {
    if (card.requesterType === 'person') {
      return card.helpType === 'finance'
        ? 'src/assets/financePersonHelpCard.svg'
        : 'src/assets/materialPersonHelpCard.svg';
    }
    return 'src/assets/organizationHelpCard.svg';
  };

  return (
    <Card onClick={() => handleCardClick(card.id)}
      sx={{
        width: '320px',
      }}>
      <CardMedia
        component="img"
        alt="Personal help card"
        height="220px"
        image={getImageUrl(card)}
        sx={{
          objectFit: 'contain',
          width: '100%',
        }}
      />
      <CardContent>
        <Box sx={{
          display: 'flex'
        }}>
          <Typography variant="h5" sx={{
            height: '128px'
          }}>
            {card.title}
          </Typography>
          <IconButton disableRipple onClick={handleFavoriteClick}>
            <StarIcon
              color={allFavoritesId.includes(card.id) ? "warning" : 'action'}
            />
          </IconButton>
        </Box>
        <GridView card={card}/>
      </CardContent>
      <CardActions>
        <HelpButton id={card.id}/>
      </CardActions>
    </Card>
  )
};

export default CardGridView;
