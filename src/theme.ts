import { Theme, ThemeOptions } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: [
      "Poppins",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    mode: "light",
    primary: {
      main: "#343C6A",
      //   main: "#0A06F4",
    },
    secondary: {
      main: "#FE5C73",
    },
  },
};

export const createThemeUsingOptions = (lang: "en" | "ar"): Theme => {
  return createTheme({
    ...themeOptions,
    direction: lang === "ar" ? "rtl" : "ltr",
  } as ThemeOptions);
};

export const theme = createTheme(themeOptions);
