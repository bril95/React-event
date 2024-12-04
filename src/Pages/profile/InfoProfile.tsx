import { Typography, Box } from "@mui/material";
import Profile from "../../interfaces/InfoProfileProps";

type InfoProfileProps = {
  profile: Profile;
};

const InfoProfile: React.FC<InfoProfileProps> = ({ profile }) => {
  return (
    <Box>
      <Box>
        <Typography>Профиль</Typography>
        <Typography>Фамилия: {profile.lastName}</Typography>
        <Typography>Имя: {profile.name}</Typography>
      </Box>

      <Box>
        <Typography>Дата рождения</Typography>
        <Typography>{new Date(profile.birthdate).toLocaleDateString('ru-RU', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })}
        </Typography>
      </Box>

      <Box>
        <Typography>Локация для помощи</Typography>
        {profile.baseLocations?.map((loc, index) => (
            <Box key={index}>
              <Typography>Область: {loc.district}</Typography>
              <Typography>Населенный пункт: {loc.city}</Typography>
            </Box>
        ))}
      </Box>

      <Box>
        <Typography>Образование</Typography>
        {profile.educations?.map((education, index) => (
            <Box key={index}>
              <Typography>Учреждение: {education.organizationName}</Typography>
              <Typography>Уровень образования: {education.level}</Typography>
              {education.specialization && (
                <Typography>Направление: {education.specialization}</Typography>
              )}
              <Typography>Год окончания: {education.graduationYear}</Typography>
            </Box>
        ))}
      </Box>

      <Box>
          <Typography>Обо мне</Typography>
          <Typography>{profile.additionalInfo}</Typography>
      </Box>
    </Box>
  )
}

export default InfoProfile;
