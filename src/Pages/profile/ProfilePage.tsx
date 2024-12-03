import { Typography, Box } from "@mui/material";
import HeaderProfile from "./HeaderProfile";
import PreviewProfile from "./PreviewProfile";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectSetAuthUser } from "../../slice/authSlice";
import ErrorPage from "../common/ErrorPage";
import { useDispatch } from "react-redux";
import { setUpdateFavoritesId } from "../../slice/favoritesSlice";

const ProfilePage = () => {
  const token = useSelector(selectSetAuthUser);
  const [profile, setProfile] = useState({});
  const [errorResp, setErrorResp] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await axios.get('http://localhost:4040/api/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const allFavoritesCards = await axios.get('http://localhost:4040/api/user/favourites', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(setUpdateFavoritesId(allFavoritesCards.data));
        setErrorResp(false);
        setProfile(profile.data);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 500) {
          setErrorResp(true);
        }
      }
    };

    fetchProfile();
  }, [])

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