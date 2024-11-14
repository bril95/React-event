import {
  Typography,
  Box,
  Icon,
 } from "@mui/material";
import { lightBlue } from '@mui/material/colors';
import users from './users';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Profiles = () => {

  const darkBlue = '#014361';

  return (
    <>
    <Box>
      <Typography variant="h4"
      sx={{
        mt: '64px',
      }}>
        Тестовые профили
      </Typography>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: '30px',
        mt: '90px',
        color: lightBlue,
      }}>
        {users.map(({ label, email, password }, index) => (
          <Box key={index}
          sx={{
            display: 'flex',
            boxSizing: 'border-box',
            width: '320px',
            borderRadius: '4px',
            border: `1px solid ${lightBlue[700]}`,
            pt: '14px',
            pb: '14px',
            color: darkBlue,
          }}>
            <Icon sx={{ 
              transform: 'rotate(180deg)',
              ml: '16px',
              mr: '12px',
              }}>
              <ErrorOutlineIcon />
            </Icon>
            <Box>
              <Typography fontWeight={500}>
                {label} пользователь
              </Typography>
              <Typography fontSize={14}>
                Логин: {email}
              </Typography>
              <Typography fontSize={14}>
                Пароль: {password}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
    </>
  )
};

export default Profiles;