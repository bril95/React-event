import { Box, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";
import InfoProfile from "./InfoProfile";
import Contacts from "./Contacts";
import Favorites from "./Favorites";
import { InfoProfileProps } from "../../interfaces/InfoProfileProps";

const HeaderProfile: React.FC<InfoProfileProps>= ({ profile }) => {
  const [activeTab, setActiveTab] = useState("info");

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  }

  return (
    <Box sx={{
      p: '20px',
    }}>
    <Box sx={{
      display: 'flex'
    }}>
      <ListItemButton onClick={() => handleClick('info')}
        sx={{ width: '160px', height: '42px', padding: '0', display: 'flex', alignItems: 'center' }}
      >
        <ListItemText sx={{m: '0'}} primary='Личные данные' />
      </ListItemButton>
      <ListItemButton onClick={() => handleClick('contacts')}
        sx={{ width: '160px', height: '42px', padding: '0', display: 'flex', alignItems: 'center' }}
      >
        <ListItemText sx={{m: '0'}} primary='Контакты' />
      </ListItemButton>
      <ListItemButton onClick={() => handleClick('favorites')}
        sx={{ width: '160px', height: '42px', padding: '0', display: 'flex', alignItems: 'center' }}
      >
        <ListItemText sx={{m: '0'}} primary='Избранное' />
      </ListItemButton>
    </Box>
    <Box>
      {(() => {
        switch (activeTab) {
          case 'info':
            return <InfoProfile profile={profile} />;
          case 'contacts':
            return <Contacts profile={profile} />;
          case 'favorites':
            return <Favorites profile={profile} />;
          default:
            return null;
        }
      })()}
    </Box>
    </Box>
  );
}

export default HeaderProfile;
