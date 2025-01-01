import { Box, Typography, Button } from "@mui/material";
import iconHeader from "../../assets/iconHeader.svg";
import { useSelector } from "react-redux";
import { selectIsAuthorized } from '../../slice/authSlice';
import avatar from "../../assets/avatar.svg";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ProfilePopover from './ProfilePopover';
import useLogout from "../../hooks/useLogout";

const Header = () => {
  const isAuthorized = useSelector(selectIsAuthorized);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const handleLogout = useLogout();

  const handleClickAvatar = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleClickProfile = () => {
    navigate('/profile');
    handleClosePopover();
  }

  const handleClickExit = () => {
    handleLogout();
    handleClosePopover();
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        alignItems: 'center',
        height: '84px',
      }}
    >
      <Box>
        <img src={iconHeader} style={{ width: "224px" }} alt="Icon Header" />
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography>Запросы о помощи</Typography>
      </Box>
      {isAuthorized ?
         <Box display="flex" justifyContent="flex-end">
         <Button onClick={handleClickAvatar}>
           <img src={avatar} style={{ width: "40px", height: "40px" }} alt="avatar" />
         </Button>
         <ProfilePopover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClosePopover}
          onClickProfile={handleClickProfile}
          onClickExit={handleClickExit}
          />
       </Box>
      :
      <Box display="flex" justifyContent="flex-end">
        <Button onClick={handleClickExit}
          variant="outlined"
          sx={{
            color: 'black',
            borderColor: 'black',
          }}
        >
          Выйти
        </Button>
      </Box>}
    </Box>
  );
};

export default Header;