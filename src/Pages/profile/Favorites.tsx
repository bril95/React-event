import { Box } from "@mui/material";
import {InfoProfileProps} from "../../interfaces/InfoProfileProps";
import NotFoundPage from "../common/NotFoundPage";
import { useEffect, useState } from "react";
import ErrorPage from "../common/ErrorPage";
import RenderGridCards from "../catalog/card/GridView/RenderGridCards";
import { CardType } from "../../interfaces/CardType";
import { initialCard } from "../../interfaces/CardType";
import { useGetRequestListQuery } from "../../api/api";

const Favorites: React.FC<InfoProfileProps> = ({ profile }) => {
  const [errorResp, setErrorResp] = useState(false);
  const allFav = profile.favouriteRequests;
  const [allFavCards, setAllFavCards] = useState<CardType[]>([initialCard]);
  const { data: allCards, error: errorAllCards } = useGetRequestListQuery({});

  useEffect(() => {
    if (allCards) {
      const getFavCards = allFav.map((id) => allCards.find((card: CardType) => card.id === id))
      setAllFavCards(getFavCards as CardType[]);
      setErrorResp(false);
    }

    if(errorAllCards) {
      setErrorResp(true);
    }

  }, [allCards, allFav, errorAllCards])

  return (
    <Box>
      {!errorResp ?
        <Box>
          {allFav.length !== 0 ?
            <RenderGridCards
              cards={allFavCards}
            />
            :
            <NotFoundPage />
          }
        </Box>
      :
      <ErrorPage />
    }
    </Box>
  )
  };

export default Favorites;
