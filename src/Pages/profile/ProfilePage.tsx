import { Typography, Box } from "@mui/material";
import HeaderProfile from "./HeaderProfile";
import PreviewProfile from "./PreviewProfile";
import { useEffect, useState } from "react";
import ErrorPage from "../common/ErrorPage";
import { useDispatch } from "react-redux";
import { setUpdateFavoritesId } from "../../slice/favoritesSlice";
import { useGetUserQuery, useGetFavouritesQuery } from "../../api/api";

const ProfilePage = () => {
  const [profile, setProfile] = useState({});
  const [errorResp, setErrorResp] = useState(false);
  const dispatch = useDispatch();
  const { data: getProfile, error: errorProfile } = useGetUserQuery({});
  const { data: allFavoritesCards, error: errorFavoritersCards, refetch: refetchFavoritersCards } = useGetFavouritesQuery({});

  useEffect(() => {
    if (errorFavoritersCards) {
      refetchFavoritersCards();
    }

    if (errorProfile) {
      setErrorResp(true);
    }

    if (getProfile && allFavoritesCards) {
      setProfile(getProfile);
      dispatch(setUpdateFavoritesId(allFavoritesCards));
    }
  }, [getProfile, allFavoritesCards, errorProfile, errorFavoritersCards, dispatch])

  return (
    <Box>
      <Typography>Мой профиль</Typography>
      {!errorResp ? (
        <Box
          sx={{
            display: 'flex',
            gap: '20px',
          }}
        >
          <PreviewProfile profile={profile} />
          <HeaderProfile profile={profile} />
        </Box>
      ) : (
        <ErrorPage />
      )}
    </Box>
  );
}

export default ProfilePage;