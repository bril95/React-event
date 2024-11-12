import { Box, Button, Typography } from "@mui/material";
import cardMedia from '../../assets/сardMedia.svg'

const PreviewProfile = () => {
  return (
    <Box sx={{
      width: '320px',
      p: '20px',
    }}>
      <img src={cardMedia} alt='Картинка профиля' style={{ width: '320px', height: '240px' }} />
      <Typography sx={{mt: '20px', mb: '10px'}}>Ангелина Фомина</Typography>
    <Typography>
      <Typography component='span' fontWeight='bold'>Статус:</Typography> Начинающий
    </Typography>
      <Button sx={{
        borderColor: 'black',
        borderWidth: '1px',
        borderStyle: 'solid',
        color: 'black',
        width: '100%',
        height: '42px',
        mt: '50px',
      }}>
        Выйти из аккаунта
      </Button>
    </Box>
  )
}

export default PreviewProfile;