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
import { selectFilter } from "../../../slice/filterSlice";
import { selectDeadlineData } from "../../../slice/deadlineDataSlice";
import { CardType } from "../../../interfaces/CardType";

const CardProfile = () => {
  const token = useSelector(selectSetAuthUser);
  const [cards, setCards] = useState([]);
  const [errorResp, setErrorResp] = useState(false);
  const dispatch = useDispatch();
  const toggleViewButton = useSelector(selectToggleButton);
  const allFilter = useSelector(selectFilter);
  const deadline = useSelector(selectDeadlineData);

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

  // Вынести в отдельный файл
  const filterParam = (allCards: CardType[]) => {
    const activeFilters = allFilter.filter((el) => el.isChecked);
    if (allCards.length && activeFilters.length || deadline) {
      return allCards.filter((card) => {
        if (deadline !== null) {
          const endingDate = new Date(card.endingDate);
          const deadlineDate = new Date(deadline);
          if (endingDate > deadlineDate) {
            return false;
          }
        }
        return activeFilters.every((filter) => {
          if (filter.subcategory) {
            const subcategoryValue = card[filter.category][filter.subcategory];
            if (String(subcategoryValue) !== filter.key) {
              return false;
            }
          } else {
            const categoryValue = card[filter.category];
            if (categoryValue !== filter.key) {
              return false;
            }
          }
          return true;
        });
      });
    }
    return allCards;
  };

  const filteredCards = filterParam(cards);

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
