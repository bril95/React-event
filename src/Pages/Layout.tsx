import Footer from '../Pages/common/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/common/Header';
import { Box } from '@mui/material';

const Layout = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '1810px',
      boxSizing: 'border-box',
      // minHeight: '100vh',
      pl: '20px',
      pr: '20px',
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