import { createTheme } from "@mui/material/styles";

const colours = {
  lightGrey: "#efefef",
  hoverGrey: "#e5e5e5",
  grey: "#cfcfcf",
  white: "#00000",
  textWhite: "#fff",
  background: "#f7f7f7",
  backgroundGrey: "#f0f1f5",
  backgroundLightGold: "#fff6e6",
  transparentBg: "#1c1914f0",
  darkBlack: "#1c1914",
  fontColor: "#4d4d4d",
  gold: "#FFCB5B",
  lightGold: "#F5deb3",
  darkGold: "#231e17",
  lightBlue: "#52C5B6",
  pink: "#F76A63",
  backgroundGold: "#FFCB5B",
  heavyGold: "#524933",
  backgroundBlue: "#52C5B6",
  backgroundDarkBlue: "#30344E",
  error: "#FF5733",
  warning: "#ffb343",
  disabledColor: "#957b3f",
  lowGreen: "#8ed58e",
  highGreen: "#62e762",
};

const theme = createTheme({
  spacing:8,
    palette: {
        common: {
          lightGrey: colours.lightGrey,
          hoverGrey: colours.hoverGrey,
          grey: colours.grey,
          white: colours.white,
          textWhite: colours.textWhite,
          background: colours.background,
          backgroundGrey: colours.backgroundGrey,
          transparentBg: colours.transparentBg,
          darkBlack: colours.darkBlack,
          darkGold: colours.darkGold,
          heavyGold: colours.heavyGold,
          backgroundLightGold: colours.backgroundLightGold,
          fontColor: colours.fontColor,
          gold: colours.gold,
          lightGold: colours.lightGold,
          backgroundBlue: colours.backgroundBlue,
          backgroundDarkBlue: colours.backgroundDarkBlue,
          error: colours.error,
          warning: colours.warning,
          backgroundGold: colours.backgroundGold,
          lowGreen: colours.lowGreen,
          highGreen: colours.highGreen,
        },
        primary: {
          main: colours.gold,
          contrastText: colours.white,
          light: colours.lightGold,
        },
        secondary: {
          main: colours.darkBlack,
          contrastText: colours.lightGold,
          light: colours.lightGold,
        },
        pinkWhite: {
          main: colours.pink,
          contrastText: "#fff",
        },
        blueWhite: {
          main: colours.lightBlue,
          contrastText: "#fff",
        },
        whiteGold: {
          main: colours.white,
          contrastText: colours.gold,
        },
      },
      typography: {
        allVariants: {
          color: colours.fontColor,
        },
        fontFamily: [
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
        h1: {
          fontSize: "52px",
          fontWeight: "bold",
          lineHeight: "61px",
        },
        h2: {
          fontSize: "42px",
          fontWeight: "bold",
          lineHeight: "49px",
        },
        h3: {
          fontSize: "32px",
          fontWeight: "bold",
          lineHeight: "38px",
        },
        h4: {
          fontSize: "24px",
          fontWeight: "bold",
          lineHeight: "28px",
        },
        h5: {
          fontSize: "20px",
          fontWeight: "bold",
          lineHeight: "23px",
        },
        h6: {
          fontSize: "18px",
          fontWeight: 500,
          // lineHeight: '20px',
        },
        pb: {
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: "19px",
        },
        p: {
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "19px",
        },
        p2: {
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "16px",
        },
        p3: {
          fontSize: "13px",
          fontWeight: 400,
          lineHeight: "15px",
        },
        description: {
          fontSize: "12px",
          fontWeight: 400,
          lineHeight: "14px",
        },
        textLink: {
          fontSize: "10px",
          fontWeight: 500,
          lineHeight: "12px",
        },
        button: {
          textTransform: "none",
        },
      },
       
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true, disableRipple: true },
      styleOverrides: {
        root: {
            // backgroundColor: 'red',
            fontWeight: "600",
        //   "&:hover": {
        //     backgroundColor: "green", 
        //   },
        },
      },
    },
  },
});

export default theme;
