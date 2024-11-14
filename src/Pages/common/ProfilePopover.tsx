import { Box, Button, Popover, Typography } from "@mui/material";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

interface ProfilePopoverProps {
  open: boolean;
  anchorEl: null | HTMLElement;
  onClose: () => void;
  onClickProfile: () => void;
  onClickExit: () => void;
}

const ProfilePopover: React.FC<ProfilePopoverProps> = ({
  open,
  anchorEl,
  onClose,
  onClickProfile,
  onClickExit,
}) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        p: '8px 16px'
      }}>
        <Button onClick={onClickProfile} sx={{ color: "black", display: 'flex', alignItems: 'center', p: '6px 0' }}>
          <PersonRoundedIcon sx={{ opacity: 0.56 }} />
          <Typography sx={{ ml: '32px', textTransform: 'none', opacity: 0.87 }}>Мой профиль</Typography>
        </Button>
        <Button onClick={onClickExit} sx={{ color: "black", display: 'flex', alignItems: 'center', p: '6px 0' }}>
          <LogoutRoundedIcon sx={{ opacity: 0.56 }}/>
          <Typography sx={{ ml: '32px', textTransform: 'none', opacity: 0.87 }}>Выйти</Typography>
        </Button>
      </Box>
    </Popover>
  );
};

export default ProfilePopover;
