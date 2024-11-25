import { CardMedia, Card, CardContent, CardActions, Button, Typography, Box, IconButton } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Info from "./Info";
import CardType from "./CardType";

interface CardInfoProps {
  card: CardType;
}

const CardInfo: React.FC<CardInfoProps> = ({ card }) => {
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
          <Typography variant="h5" sx={{
            height: '128px'
          }}>
            {card.title}
          </Typography>
          <IconButton disableRipple>
            <StarBorderIcon />
          </IconButton>
        </Box>
        <Info card={card}/>
      </CardContent>
      <CardActions>
        <Button
          sx={{
            width: '100%',
            boxSizing: 'border-box',
            height: '42px',
            mt: '10px',
          }}
          color="primary"
          variant="contained"
          type="submit"
        >
          Помочь
      </Button>
      </CardActions>
    </Card>
  )
};

export default CardInfo;
