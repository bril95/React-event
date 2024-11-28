import { Box, IconButton, Typography } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const FavoriteButton = () => {
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Favorite');
  }
  return (
    <Box>
      <IconButton disableRipple onClick={handleFavoriteClick}>
      <StarBorderIcon />
        <Typography>В избранное</Typography>
      </IconButton>
    </Box>

  )
};

export default FavoriteButton;