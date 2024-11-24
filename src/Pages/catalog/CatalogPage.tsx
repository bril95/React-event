import { Box, Typography } from "@mui/material";
import CardProfile from "./card/CardProfile";
import FilterBar from "./filter/FilterBar";
import SearchBar from "./searchBar/SearchBar";

const CatalogPage = () => {
  return (
    <Box>
      <Typography>Запросы о помощи</Typography>
      <Box sx={{
        display: 'flex',
        gap: '20px',
      }}>
        <FilterBar />
        <Box sx={{
        }}>
          <SearchBar />
          <CardProfile />
        </Box>
      </Box>
    </Box>
  )
};

export default CatalogPage;
