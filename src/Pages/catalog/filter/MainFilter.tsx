import { Box } from "@mui/material";
import HelpCheckbox from "./HelpCheckbox";

const MainFilter = () => {
  return (
    <Box>
      <HelpCheckbox
        title={
          {label: "Кому мы помогаем", value: 'requesterType'}
        }
        labels={[
          { label: "Пенсионеры", value: "person" },
          { label: "Дома престарелых", value: "organization" },
        ]}
      />
      <HelpCheckbox
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
