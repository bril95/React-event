import { Box } from "@mui/material"
import { useEffect, useState } from "react";
import HeaderCardProfile from "./HeaderCardProfile";
import axios from "axios";
import { useSelector } from 'react-redux';
import { selectSetAuthUser } from "../../../slice/authSlice";
import { setUpdateFavoritesId } from "../../../slice/favoritesSlice";
import ErrorPage from "../../common/ErrorPage";
import RenderGridCards from "./GridView/RenderGridCards";
import { useDispatch } from "react-redux";
import { selectToggleButton, setToggleButton } from "../../../slice/toggleButtonSlice";
import RenderAltCards from "./AltView/RenderAltCards";
import Location from "./Location";

const CardProfile = () => {
  const token = useSelector(selectSetAuthUser);
  const [cards, setCards] = useState([]);
  const [errorResp, setErrorResp] = useState(false);
  const dispatch = useDispatch();
  const toggleViewButton = useSelector(selectToggleButton);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const allCards = await axios.get('http://localhost:4040/api/request', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const allFavoritesCards = await axios.get('http://localhost:4040/api/user/favourites', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCards(allCards.data);
        dispatch(setToggleButton('grid'))
        dispatch(setUpdateFavoritesId(allFavoritesCards.data));
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 500) {
          setErrorResp(true);
        }
      }
    };

    fetchCards();
  }, [])

  return (
    <Box sx={{
      padding: '12px 36px 40px',
    }}>
      {!errorResp ?
      <Box>
        <HeaderCardProfile
          cards={cards
          }/>
        <Box>
        {(() => {
          switch (toggleViewButton) {
            case 'grid':
              return <RenderGridCards cards={cards} />;
            case 'alt':
              return <RenderAltCards cards={cards} />;
            case 'location':
              return <Location cards={cards} />;
            default:
              return null;
          }
        })()}
        </Box>
      </Box> :
      <ErrorPage />}
    </Box>
  )
};

export default CardProfile;
