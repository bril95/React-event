import { Box, Typography } from "@mui/material";
import HelpCheckbox from "./HelpCheckbox";

const Volunteers = () => {
  return (
    <Box sx={{
      pl: '42px'
    }}>
      <Typography>Волонтерство</Typography>
      <HelpCheckbox title={'Специализация'} labels={['Квалифицированная', 'Не требует профессии']} />
      <HelpCheckbox title={'Формат'} labels={['Онлайн', 'Офлайн']} />
      <HelpCheckbox title={'Необходимо волонтеров'} labels={['Группа', 'Один']} />
    </Box>
  )};

export default Volunteers;