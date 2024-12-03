import { Box } from "@mui/material"
import { useEffect, useState } from "react";
import HeaderCardProfile from "./HeaderCardProfile";
import axios from "axios";
import { useSelector } from 'react-redux';
import { selectSetAuthUser } from "../../../slice/authSlice";
import { setUpdateFavoritesId } from "../../../slice/favoritesSlice";
import ErrorPage from "../../common/ErrorPage";
import RenderCards from "./RenderCards";
import { useDispatch } from "react-redux";

const CardProfile = () => {
  const token = useSelector(selectSetAuthUser);
  const [cards, setCards] = useState([]);
  const [errorResp, setErrorResp] = useState(false);
  const dispatch = useDispatch();

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
        <HeaderCardProfile />
        <RenderCards
          cards={cards
          }
        />
      </Box> :
      <ErrorPage />}
    </Box>
  )
};

export default CardProfile;
