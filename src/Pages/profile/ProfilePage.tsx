import { Typography, Box } from "@mui/material";
import HeaderProfile from "./HeaderProfile";
import PreviewProfile from "./PreviewProfile";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectSetAuthUser } from "../../slice/authSlice";
import ErrorPage from "../common/ErrorPage";

const ProfilePage = () => {
  const token = useSelector(selectSetAuthUser);
  const [profile, setProfile] = useState({});
  const [errorResp, setErrorResp] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await axios.get('http://localhost:4040/api/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setErrorResp(false);
        setProfile(profile.data);
        console.log(profile.data)
      } catch (error) {
        console.log(error)
        if (axios.isAxiosError(error) && error.response?.status === 500) {
          setErrorResp(true);
        }
      }
    };

    fetchProfile();
  }, [])

  return (
    <Box>
      {!errorResp ?
        <Box>
          <Typography>Мой профиль</Typography>
          <Box sx={{
          display: 'flex',
          flexDirection: 'colomn',
          gap: '20px'
          }}>
            <PreviewProfile profile={profile} />
            <HeaderProfile profile={profile} />
          </Box>
        </Box>
      :
        <ErrorPage />
      }
    </Box>
  )
}

export default ProfilePage;