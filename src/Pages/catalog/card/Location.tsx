import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { CardsInfoArray } from '../../../interfaces/CardType';
import { useNavigate } from "react-router-dom";

const Location: React.FC<CardsInfoArray> = ({ cards }) => {
  const navigate = useNavigate();

  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 5,
  };

  const handleCardClick = (id: string) => {
    navigate(`card/${id}`, { state: { id } });
  }

//apiKey={process.env.REACT_APP_YANDEX_API_KEY}

  return (
    <YMaps apihost="api-maps.yandex.ru">
      <Map defaultState={defaultState}
      style={{ width: '1008px', height: '850px' }}>
        {cards.map((el, index) =>
          <Placemark
            key={index}
            geometry={[el.location.latitude, el.location.longitude]}
            properties={{
              hintContent: `${el.title}`
            }}
            onClick={() => handleCardClick(el.id)}
          />)}
      </Map>
    </YMaps>
  );
};

export default Location;
