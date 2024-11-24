import Footer from '../Pages/common/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/common/Header';
import { Box } from '@mui/material';

const Layout = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '1920px',
      boxSizing: 'border-box',
      // minHeight: '100vh',
      pl: '210px',
      pr: '210px',
    }}
  >
    <Header />
    <Box
      component="main"
      sx={{
        flex: 1,
      }}
    >
      <Outlet />
    </Box>
    <Footer />
  </Box>
);

export default Layout;