import { CardMedia, Card, CardContent, CardActions, Button, Typography, Box, IconButton } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const CardInfo = () => {
  return (
    <Card sx={{
      width: '320px',
    }}>
      <CardMedia
        component="img"
        alt="Personal help card"
        height="220px"
        image="src/assets/personalHelpCard.svg"
      />
      <CardContent>
        <Box sx={{
          display: 'flex'
        }}>
          <Typography>
            Сбор средств для пенсионерки Ангелины Ивановны
          </Typography>
          <IconButton>
            <StarBorderIcon />
          </IconButton>
        </Box>
        <Typography>
          
        </Typography>
        <Typography>
          Организатор
        </Typography>
        <Typography>
        Фонд помощи для ветеранов и инвалидов "Вера"
        </Typography>
        <Typography>
        Локация
        </Typography>
        <Typography>
        Область: Владимирская
        </Typography>
        <Typography>
        Цель сбора
        </Typography>
        <Typography>
        Оплатить лечение МКБ в клинике "Здоровье". Купить одежду на...
        </Typography>
        <Typography>
        Завершение
        </Typography>
        <Typography>
        20.03.2025
        </Typography>
        <Typography>
        Мы собрали
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Помочь</Button>
      </CardActions>
    </Card>
  )
};

export default CardInfo;
