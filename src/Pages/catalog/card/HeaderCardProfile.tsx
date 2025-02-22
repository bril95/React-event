import { Box, Typography } from "@mui/material";
import ToggleViewButton from "../../common/ToggleViewButton";
import { CardsInfoArray } from "../../../interfaces/CardType";

const HeaderCardProfile: React.FC<CardsInfoArray> = ({ cards }) => {
  return (
    <Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Typography>Найдено: {cards.length}</Typography>
        <ToggleViewButton />
      </Box>
    </Box>
  )
};

export default HeaderCardProfile;
