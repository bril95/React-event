import { Box } from "@mui/material";
import HelpCheckbox from "./HelpCheckbox";

const MainFilter = ({ reset }) => {
  return (
    <Box>
      <HelpCheckbox
        reset={reset}
        title={
          {label: "Кому мы помогаем", value: 'requesterType'}
        }
        labels={[
          { label: "Пенсионеры", value: "person" },
          { label: "Дома престарелых", value: "organization" },
        ]}
      />
      <HelpCheckbox
        reset={reset}
        title={
          {label:"Чем мы помогаем", value: 'helpType'}
        }
        labels={[
          { label: "Вещи", value: "material" },
          { label: "Финансирование", value: "finance" },
        ]}
      />
    </Box>
  )
};

export default MainFilter;
