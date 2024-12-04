import { Box,Typography } from "@mui/material";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from 'react-redux';
import { selectSetAuthUser } from "../../../slice/authSlice";
import CardType from "../../../interfaces/CardType";
import FullInfo from "./currentCard/FullInfo";
import DonationSummary from "./currentCard/DonationSummary";
import ErrorPage from "../../common/ErrorPage";
import { useDispatch } from "react-redux";
import { setUpdateFavoritesId } from "../../../slice/favoritesSlice";
import { initialCard } from "../../../interfaces/CardType";

const CurrentCard = () => {
  const { id } = useParams();
  const token = useSelector(selectSetAuthUser);
  const [card, setCard] = useState<CardType>(initialCard);
  const [errorResp, setErrorResp] = useState(false);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchCard = async () => {
      try {
        const currentCard = await axios.get(`http://localhost:4040/api/request/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const allFavoritesCards = await axios.get('http://localhost:4040/api/user/favourites', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(setUpdateFavoritesId(allFavoritesCards.data));
        setErrorResp(false);
        setCard(currentCard.data);
      } catch (error) {
        console.log(error)
        if (axios.isAxiosError(error) && error.response?.status === 500) {
          setErrorResp(true);
        }
      }
    };

    fetchCard();
  }, [])

  return (
    <Box>
      {!errorResp ?
      <Box>
      <Typography variant="h4">Запрос о помощи</Typography>
      <Box sx={{
        display: 'flex',
        gap: '20px',
      }}>
        <FullInfo card={card}/>
        <DonationSummary card={card}/>
      </Box>
      </Box> :
      <ErrorPage />}
    </Box>

  )
};

export default CurrentCard;