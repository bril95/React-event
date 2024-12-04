import { Box, IconButton } from "@mui/material";
import GridOnIcon from '@mui/icons-material/GridOn';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from "react";
import { setToggleButton } from "../../slice/toggleButtonSlice";
import { useDispatch } from "react-redux";

const ToggleViewButton = () => {
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState('grid');

  const clickActiveButton = (activeButton: string) => {
    setActiveButton(activeButton);
    dispatch(setToggleButton(activeButton))
  }

  return (
    <Box>
      <Box>
        <IconButton onClick={() => clickActiveButton('grid')}
          sx={{
            backgroundColor: activeButton === 'grid' ? 'grey' : 'white',
          }}
        >
          <GridOnIcon />
        </IconButton>
        <IconButton onClick={() => clickActiveButton('alt')}
          sx={{
            backgroundColor: activeButton === 'alt' ? 'grey' : 'white',
          }}
        >
          <ListAltIcon />
        </IconButton>
        <IconButton onClick={() => clickActiveButton('location')}
          sx={{
            backgroundColor: activeButton === 'location' ? 'grey' : 'white',
          }}
        >
          <LocationOnIcon />
        </IconButton>
      </Box>
    </Box>
  )
};

export default ToggleViewButton;