import { Box, Typography } from "@mui/material";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from 'react-redux';
import { selectSetAuthUser } from "../../../slice/authSlice";
import CardType from "./CardType";
import CardOrganization from "./cardDetails/CardOrganization";
import CardTitle from "./cardDetails/CardTitle";
import CardDescription from "./cardDetails/CardDescription";
import CardSteps from "./cardDetails/CardSteps";
import CardGoalDescription from "./cardDetails/CardGoalDescription";
import CardEndingDate from "./cardDetails/CardEndingDate";
import CardLocation from "./cardDetails/CardLocation";
import CardContacts from "./cardDetails/CardContacts";

const initialCard: CardType = {
  id: '',
  title: '',
  organization: { title: '', isVerified: false },
  description: '',
  goalDescription: '',
  actionsSchedule: [],
  endingDate: '',
  location: { district: '', city: '', latitude: 0, longitude: 0 },
  contacts: { email: '', phone: '', website: '' },
  requesterType: '',
  helpType: '',
  helperRequirements: { helperType: '', isOnline: false, qualification: '' },
  contributorsCount: 0,
  requestGoal: 0,
  requestGoalCurrentValue: 0,
};

const CurrentCard = () => {
  const { id } = useParams();
  const token = useSelector(selectSetAuthUser);
  const [card, setCard] = useState<CardType>(initialCard);
  
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const currentCard = await axios.get(`http://localhost:4040/api/request/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(currentCard.data)
        setCard(currentCard.data)
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchCards();
  }, [token, id])

  return (
    <Box>
      <Typography variant="h4">Запрос о помощи</Typography>

      <CardTitle card={card} />

      <CardOrganization card={card} />
      <Typography>{card.organization.isVerified ? 'Организация проверена' : 'Организация не проверена'}</Typography>

      <CardDescription card={card} />

      <CardGoalDescription card={card} />

      <CardSteps card={card} />

      <CardEndingDate card={card} />

      <CardLocation card={card} />

      <CardContacts card={card} />
    </Box>
  )
};

export default CurrentCard;