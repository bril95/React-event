import { Box } from "@mui/material"
import { useEffect, useState } from "react";
import HeaderCardProfile from "./HeaderCardProfile";
import { useSelector } from 'react-redux';
import { setUpdateFavoritesId } from "../../../slice/favoritesSlice";
import ErrorPage from "../../common/ErrorPage";
import RenderGridCards from "./GridView/RenderGridCards";
import { useDispatch } from "react-redux";
import { selectToggleButton, setToggleButton } from "../../../slice/toggleButtonSlice";
import RenderAltCards from "./AltView/RenderAltCards";
import Location from "./Location";
import filterFunction from "./filterFunction";
import { useGetRequestListQuery, useGetFavouritesQuery } from "../../../api/api";

const CardProfile = () => {
  const [cards, setCards] = useState([]);
  const [errorResp, setErrorResp] = useState(false);
  const dispatch = useDispatch();
  const toggleViewButton = useSelector(selectToggleButton);
  const { data: allCards, error: errorAllCards } = useGetRequestListQuery({});
  const { data: allFavoritesCards, error: errorFavoritersCards, refetch: refetchFavoritersCards } = useGetFavouritesQuery({});

  useEffect(() => {
    if (errorFavoritersCards) {
      refetchFavoritersCards();
    }

    if (errorAllCards) {
      setErrorResp(true);
    }

    if (allCards && allFavoritesCards) {
      setCards(allCards);
      dispatch(setUpdateFavoritesId(allFavoritesCards));
    }

    dispatch(setToggleButton('grid'));

  }, [allCards, allFavoritesCards, errorAllCards, errorFavoritersCards, dispatch])

  const filteredCards = filterFunction(cards);

  return (
    <Box sx={{
      padding: '12px 36px 40px',
    }}>
      {!errorResp ?
      <Box>
        <HeaderCardProfile
          cards={filteredCards}/>
        <Box>
        {(() => {
          switch (toggleViewButton) {
            case 'grid':
              return <RenderGridCards cards={filteredCards} />;
            case 'alt':
              return <RenderAltCards cards={filteredCards} />;
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
