import { Box, Typography } from "@mui/material";
import HelpCheckbox from "./HelpCheckbox";

const Volunteers = () => {
  return (
    <Box sx={{
      pl: '42px'
    }}>
      <Typography>Волонтерство</Typography>
      <HelpCheckbox
        title={'Специализация'}
        labels={[
          {label: 'Квалифицированная', value: 'professional'},
          {label: 'Не требует профессии', value: 'common'}
        ]}
      />
      <HelpCheckbox
        title={'Формат'}
        labels={[
          {label: 'Онлайн', value: 'online-true'},
          {label: 'Офлайн', value: 'online-false'}
        ]}
      />
      <HelpCheckbox
        title={'Необходимо волонтеров'}
        labels={[
          {label: 'Группа', value: 'group'},
          {label: 'Один', value: 'single'}
        ]}
      />
    </Box>
  )};

export default Volunteers;