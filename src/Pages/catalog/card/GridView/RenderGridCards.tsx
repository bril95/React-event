import { Box, Pagination } from "@mui/material";
import CardGridView from "./CardGridView";
import { useState } from "react";
import { CardsInfoArray } from "../../../../interfaces/CardType";

const RenderGridCards: React.FC<CardsInfoArray> = ({ cards }) => {
  const [page, setPage] = useState(1);
  const cardsPerPage = 3;

  const indexOfLastCard = page * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const handleChangePage = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          {currentCards.map((card, index) => (
            <CardGridView key={index} card={card}/>
          ))}
        </Box>
        <Pagination
          count={Math.ceil(cards.length / cardsPerPage)}
          page={page}
          onChange={handleChangePage}
          color="primary"
          sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
        />
    </Box>
  )
};

export default RenderGridCards;