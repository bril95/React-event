import { Box, IconButton, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import useFavorites from "../../../../hooks/useFavorites";
import { selectFavoritesId } from "../../../../slice/favoritesSlice";
import { useSelector } from "react-redux";
import { ButtonProps } from "../../../../interfaces/InfoProfileProps";

const FavoriteButton: React.FC<ButtonProps> = ({ id }) => {
  const clickFavoritesButton = useFavorites();
  const allFavoritesId = useSelector(selectFavoritesId);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    clickFavoritesButton(id);
  }

  return (
    <Box>
      <IconButton disableRipple onClick={handleFavoriteClick}>
      <StarIcon
        color={allFavoritesId.includes(id) ? "warning" : 'action'}
      />
        <Typography>В избранное</Typography>
      </IconButton>
    </Box>

  )
};

export default FavoriteButton;