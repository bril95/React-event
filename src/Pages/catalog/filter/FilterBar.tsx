import { Box, Button, Typography } from "@mui/material"
import Volunteers from "./Volunteers";
import HelpDeadline from "./HelpDeadline";
import HelpCheckbox from "./HelpCheckbox";

const FilterBar = () => {
  return (
    <Box sx={{
      padding: '20px',
      width: '320px',
      boxSizing: 'border-box',
    }}>
      <Typography>Фильтрация</Typography>
      <HelpCheckbox
        title="Кому мы помогаем"
        labels={[
          { label: "Пенсионеры", value: "person" },
          { label: "Дома престарелых", value: "organization" },
        ]}
      />
      <HelpCheckbox
          title="Чем мы помогаем"
          labels={[
            { label: "Вещи", value: "material" },
            { label: "Финансирование", value: "finance" },
        ]}
      />
      <Volunteers />
      <HelpDeadline />
      <Button sx={{
            width: '100%',
            boxSizing: 'border-box',
            height: '42px',
            mt: '40px',
            backgroundColor: '#fff',
            color: '#000',
            borderColor: '#000',
          }}
          variant="outlined"
          type="submit">
        Сбросить
      </Button>
    </Box>
  )
};

export default FilterBar;
