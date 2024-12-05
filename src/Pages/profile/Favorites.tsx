import { Box } from "@mui/material";
import {InfoProfileProps} from "../../interfaces/InfoProfileProps";
import NotFoundPage from "../common/NotFoundPage";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectSetAuthUser } from "../../slice/authSlice";
import ErrorPage from "../common/ErrorPage";
import RenderGridCards from "../catalog/card/GridView/RenderGridCards";
import { CardType } from "../../interfaces/CardType";
import { initialCard } from "../../interfaces/CardType";

const Favorites: React.FC<InfoProfileProps> = ({ profile }) => {
  const [errorResp, setErrorResp] = useState(false);
  const token = useSelector(selectSetAuthUser);
  const allFav = profile.favouriteRequests;
  const [allFavCards, setAllFavCards] = useState<CardType[]>([initialCard])

  useEffect(()=> {
    const getFavorite = async() => {
      try{
        const allCards = await axios.get<CardType[]>('http://localhost:4040/api/request', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const getFavCards = allFav.map((id) => allCards.data.find((card) => card.id === id))
        setAllFavCards(getFavCards as CardType[]);
        setErrorResp(false);
      } catch(error) {
        if (axios.isAxiosError(error) && error.response?.status === 500) {
          setErrorResp(true);
        }
      }
    }
    getFavorite();
  }, [])

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
