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
  const { data: allFavoritesCards, error: errorFavoritersCards, refetch: refetchFavoritersCards } = useGetFavouritesQuery({});
  const { data: getCurrentCard, error: errorRequestDetails } = useGetRequestDetailsQuery(id);

  useEffect(() => {
    if (errorFavoritersCards) {
      refetchFavoritersCards();
    }

    if (allFavoritesCards) {
      dispatch(setUpdateFavoritesId(allFavoritesCards));
      setErrorResp(false);
    }

    if (getCurrentCard) {
      setCard(getCurrentCard);
      setErrorResp(false);
    }
    if (errorRequestDetails) {
      setErrorResp(true);
    }
  }, [getCurrentCard, errorRequestDetails, allFavoritesCards, dispatch, errorFavoritersCards, refetchFavoritersCards]);

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