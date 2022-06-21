import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { colors } from "./styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: colors.background,
    },
  },
  overrides: {
    MuiTableCell:{
      root:{
        borderBottom: "1px solid rgba(224, 224, 224, 0.4)"
      }
    },
    MuiDivider:{
      root:{
        backgroundColor:"rgba(224, 224, 224, 0.4)"
      }
    }
  },
});

export default theme;
