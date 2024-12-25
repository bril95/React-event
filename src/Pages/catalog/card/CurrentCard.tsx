import { Box,Typography } from "@mui/material";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import CardType from "../../../interfaces/CardType";
import FullInfo from "./currentCard/FullInfo";
import DonationSummary from "./currentCard/DonationSummary";
import ErrorPage from "../../common/ErrorPage";
import { useDispatch } from "react-redux";
import { setUpdateFavoritesId } from "../../../slice/favoritesSlice";
import { initialCard } from "../../../interfaces/CardType";
import { useGetFavouritesQuery, useGetRequestDetailsQuery } from "../../../api/api";

const CurrentCard = () => {
  const { id } = useParams();
  const [card, setCard] = useState<CardType>(initialCard);
  const [errorResp, setErrorResp] = useState(false);
  const dispatch = useDispatch();
  const { data: getFavouritesCards, isLoading: isLoadingGetFavourites, refetch, error} = useGetFavouritesQuery();
  const { data: getCurrentCard, isLoading: isLoadingRequestDetails, error: errorRequestDetails } = useGetRequestDetailsQuery(id);

  //Разобраться как быть с избранным в каждой карточке если она добавлена
  useEffect(() => {
    if (error) {
      refetch();
    }
    if (!isLoadingGetFavourites && getFavouritesCards) {
      dispatch(setUpdateFavoritesId(getFavouritesCards));
      setErrorResp(false);
    }
  }, [isLoadingGetFavourites, getFavouritesCards, dispatch, error, refetch]);
  
  useEffect(() => {
    if (!isLoadingRequestDetails && getCurrentCard) {
      setCard(getCurrentCard);
      setErrorResp(false);
    } else if (errorRequestDetails) {
      console.error(errorRequestDetails);
      setErrorResp(true);
    }
  }, [isLoadingRequestDetails, getCurrentCard, errorRequestDetails]);

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