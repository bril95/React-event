import { Box, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";
import InfoProfile from "./InfoProfile";
import Contacts from "./Contacts";
import Favorites from "./Favorites";

const HeaderProfile = () => {
  const [activeTab, setActiveTab] = useState("info");

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  }

  return (
    <Box>
    <Box sx={{
      display: 'flex'
    }}>
      <ListItemButton onClick={() => handleClick('info')}
        sx={{ height: '36px', padding: '0 16px', display: 'flex', alignItems: 'center' }}
      >
        <ListItemText primary='Личные данные' />
      </ListItemButton>
      <ListItemButton onClick={() => handleClick('contacts')}
        sx={{ height: '36px', padding: '0 16px', display: 'flex', alignItems: 'center' }}
      >
        <ListItemText primary='Контакты' />
      </ListItemButton>
      <ListItemButton onClick={() => handleClick('favorites')}
        sx={{ height: '36px', padding: '0 16px', display: 'flex', alignItems: 'center' }}
      >
        <ListItemText primary='Избранное' />
      </ListItemButton>
    </Box>
    <Box>
      {(() => {
        switch (activeTab) {
          case 'info':
            return <InfoProfile />;
          case 'contacts':
            return <Contacts />;
          case 'favorites':
            return <Favorites />;
          default:
            return null;
        }
      })()}
    </Box>
    </Box>
  );
}

export default HeaderProfile;
