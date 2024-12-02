import { CardMedia, Card, CardContent, CardActions, Typography, Box, IconButton } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import Info from "./Info";
import CardType from "./CardType";
import { useNavigate } from "react-router-dom";
import HelpButton from "./currentCard/HelpButton";
import { useSelector } from "react-redux";
import { selectFavoritesId } from "../../../slice/favoritesSlice";
import useFavorites from "../../../hooks/useFavorites";

interface CardInfoProps {
  card: CardType;
}

const CardInfo: React.FC<CardInfoProps> = ({ card }) => {
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
        width: '320px',
      }}>
      <CardMedia
        component="img"
        alt="Personal help card"
        height="220px"
        image="src/assets/personalHelpCard.svg"
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
        <Info card={card}/>
      </CardContent>
      <CardActions>
        <HelpButton id={card.id}/>
      </CardActions>
    </Card>
  )
};

export default CardInfo;
