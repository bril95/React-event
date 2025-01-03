import { CardMedia, Card, CardContent, CardActions, Typography, Box, IconButton, Divider } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import GridView from "./GridView";
import { useNavigate } from "react-router-dom";
import HelpButton from "../currentCard/HelpButton";
import { useSelector } from "react-redux";
import { selectFavoritesId } from "../../../../slice/favoritesSlice";
import useFavorites from "../../../../hooks/useFavorites";
import CardInfoProps, { CardType } from "../../../../interfaces/CardType";
import normalizeTitle from "../../../common/normalizeTitle";


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
        height: '843px',
        pl: '16px',
        pr: '16px'
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
      <CardContent sx={{
        p: 0,
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'flex-start',
          height: '128px',
          pt: '16px',
          pb: '17px',
          boxSizing: 'border-box'
        }}>
          <Typography variant="h5">
            {normalizeTitle(card.title)}
          </Typography>
          <IconButton disableRipple onClick={handleFavoriteClick}>
            <StarIcon
              color={allFavoritesId.includes(card.id) ? "warning" : 'action'}
            />
          </IconButton>
        </Box>
        <Divider />
        <GridView card={card}/>
      </CardContent>
      <CardActions sx={{p: 0, mt: '10px'}}>
        <HelpButton id={card.id}/>
      </CardActions>
    </Card>
  )
};

export default CardGridView;
