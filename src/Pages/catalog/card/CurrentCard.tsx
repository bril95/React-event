import { Box, Typography } from "@mui/material";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from 'react-redux';
import { selectSetAuthUser } from "../../../slice/authSlice";
import CardType from "./CardType";

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

      <Typography variant="h5">{card.title}</Typography>
      <Typography variant="h6">Организация</Typography>
      <Typography>{card.organization.title}</Typography>
      <Typography>{card.organization.isVerified ? 'Организация проверена' : 'Организация не проверена'}</Typography>

      <Typography variant="h6">Кому мы помогаем</Typography>
      <Typography>{card.description}</Typography>

      <Typography variant="h6">Цель сбора</Typography>
      <Typography>{card.goalDescription}</Typography>

      <Typography variant="h6">План действий</Typography>
      <Box>
        {card.actionsSchedule.map((step) => (
          <Typography key={step.stepLabel}>{step.stepLabel}</Typography>
        ))}
      </Box>

      <Typography variant="h6">Завершение</Typography>
      <Typography>
        {new Date(card.endingDate).toLocaleDateString('ru-RU', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })}
      </Typography>

      <Typography variant="h6">Локация</Typography>
      {
        card.helperRequirements.isOnline 
        ? <Typography>Онлайн</Typography>
        : (
          <Box>
            <Typography>Область: {card.location.district}</Typography>
            <Typography>Населенный пункт: {card.location.city}</Typography>
          </Box>
        )
      }

      <Typography variant="h6">Контакты</Typography>
      <Box sx={{
        display: 'flex',
      }}>
        <Box>
          <Typography>Телефон</Typography>
          <Typography>{card.contacts.phone}</Typography>
        </Box>
        <Box>
          <Typography>E-mail</Typography>
          <Typography>{card.contacts.email}</Typography>
        </Box>
        <Box>
          <Typography>Сайт</Typography>
          <Typography>{card.contacts.website}</Typography>
        </Box>
      </Box>
    </Box>
  )
};

export default CurrentCard;