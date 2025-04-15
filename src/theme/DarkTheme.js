import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark", // This sets the theme to dark mode
    primary: {
      main: "#cb202d", // Customize the primary color to your preference
    },
    secondary: {
      main: "#5A20CB", // Customize the secondary color to your preference
    },
    black: {
      main: "#242B2E",
    },
    background: {
      main: "#000000",
      default: "#0D0D0D",
      paper: "#0D0D0D",
    },
    textColor: {
      main: " #f4f4f2",
    },
  },
});

export default darkTheme;
