import { Button } from "@mui/material";
import useSendHelp from "../../../../hooks/useSendHelp";

interface HelpButtonProps {
  id: string;
}

const HelpButton: React.FC<HelpButtonProps> = ({ id }) => {
  const sendHelp = useSendHelp();

  const handleHelpClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    sendHelp(id);
  }

  return (
    <Button
      sx={{
        width: '100%',
        boxSizing: 'border-box',
        height: '42px',
        mt: '10px',
      }}
      color="primary"
      variant="contained"
      type="submit"
      onClick={handleHelpClick}
    >
    Помочь
    </Button>
  )
};

export default HelpButton;