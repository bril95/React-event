import { Button } from "@mui/material";

const HelpButton = () => {
  const handleHelpClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Help');
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