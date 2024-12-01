import { Box, Typography } from "@mui/material";
import Profile from "../../props/InfoProfileProps";
import NotFoundPage from "../common/NotFoundPage";

type InfoProfileProps = {
  profile: Profile;
};

const Favorites: React.FC<InfoProfileProps> = ({ profile }) => {
return (
    <Box>
      {profile.favouriteRequests.length !== 0 ? (
        <Typography>Вкладка с избранным</Typography>
      ) : (
        <NotFoundPage />
      )}
    </Box>
)
};

export default Favorites;
