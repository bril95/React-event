import { Box, Pagination } from "@mui/material"
import { useEffect, useState } from "react";
import HeaderCardProfile from "./HeaderCardProfile";
import CardInfo from "./CardInfo";
import axios from "axios";
import { useSelector } from 'react-redux';
import { selectSetAuthUser } from "../../../slice/authSlice";
import ErrorPage from "../../common/ErrorPage";

const CardProfile = () => {
  const token = useSelector(selectSetAuthUser);
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const cardsPerPage = 3;
  const [errorResp, setErrorResp] = useState(false);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const allCards = await axios.get('http://localhost:4040/api/request', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCards(allCards.data)
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 500) {
          setErrorResp(true);
        }
      }
    };

    fetchCards();
  }, [])

  const indexOfLastCard = page * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const handleChangePage = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box sx={{
      padding: '12px 36px 40px',
    }}>
      {!errorResp ?
      <Box>
        <HeaderCardProfile />
        <Box sx={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          {currentCards.map((card, index) => (
            <CardInfo key={index} card={card}/>
          ))}
        </Box>
        <Pagination
          count={Math.ceil(cards.length / cardsPerPage)}
          page={page}
          onChange={handleChangePage}
          color="primary"
          sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
        />
      </Box> :
      <ErrorPage />}
    </Box>
  )
};

export default CardProfile;
