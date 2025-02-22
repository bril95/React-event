import { Box, Typography } from "@mui/material";
import HelpCheckbox from "./HelpCheckbox";

const Volunteers = ({ reset }) => {
  return (
    <Box sx={{
      pl: '42px'
    }}>
      <Typography>Волонтерство</Typography>
      <HelpCheckbox
        reset={reset}
        title={
          {label: 'Специализация', value: 'qualification'}
        }
        labels={[
          {label: 'Квалифицированная', value: 'professional'},
          {label: 'Не требует профессии', value: 'common'}
        ]}
      />
      <HelpCheckbox
        reset={reset}
        title={
          {label: 'Формат', value: 'isOnline'}
        }
        labels={[
          {label: 'Онлайн', value: true},
          {label: 'Офлайн', value: false}
        ]}
      />
      <HelpCheckbox
        reset={reset}
        title={
          {label: 'Необходимо волонтеров', value: 'helperType'}
        }
        labels={[
          {label: 'Группа', value: 'group'},
          {label: 'Один', value: 'single'}
        ]}
      />
    </Box>
  )};

export default Volunteers;