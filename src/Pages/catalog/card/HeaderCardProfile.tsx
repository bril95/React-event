import { Box, IconButton, Typography } from "@mui/material";
import GridOnIcon from '@mui/icons-material/GridOn';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const HeaderCardProfile = () => {
  return (
    <Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <Typography>Найдено: </Typography>
        <Box>
          <IconButton>
            <GridOnIcon />
          </IconButton>
          <IconButton>
            <ListAltIcon />
          </IconButton>
          <IconButton>
            <LocationOnIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
};

export default HeaderCardProfile;
