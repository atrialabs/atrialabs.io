import {
  gray,
  mauve,
  slate,
  sage,
  olive,
  sand,
  tomato,
  red,
  crimson,
  pink,
  plum,
  purple,
  violet,
  indigo,
  blue,
  cyan,
  teal,
  green,
  grass,
  brown,
  orange,
  sky,
  mint,
  lime,
  yellow,
  amber,
  gold,
  bronze,
} from "@radix-ui/colors";

// Spread the scales in your light and dark themes
import { createStitches } from "@stitches/react";

const { styled } = createStitches({
  media: {
    md: "(min-width: 40rem)",
    lg: "(min-width: 1024px)",
  },
  theme: {
    fonts: {
      ui: "Source Sans Pro, sans-serif",
      branding: "Shippori Mincho B1, serif",
    },
    fontSizes: {
      6: "4.209rem",
      5: "3.157rem",
      4: "2.369rem",
      3: "1.777rem",
      2: "1.333rem",
      1: "1rem",
      "02": "0.75rem",
      "03": "0.563rem",
      "04": "0.317rem",
      "05": "0.238rem",
      "06": "0.178rem",
    },
    sizes: {
      content: "40rem",
      logo: "1.333rem",
    },
    space: {
      6: "4.209rem",
      5: "3.157rem",
      4: "2.369rem",
      3: "1.777rem",
      2: "1.333rem",
      1: "1rem",
      "02": "0.75rem",
      "03": "0.563rem",
      "04": "0.317rem",
      "05": "0.238rem",
      "06": "0.178rem",
    },
    colors: {
      ...gray,
      ...mauve,
      ...slate,
      ...sage,
      ...olive,
      ...sand,
      ...tomato,
      ...red,
      ...crimson,
      ...pink,
      ...plum,
      ...purple,
      ...violet,
      ...indigo,
      ...blue,
      ...cyan,
      ...teal,
      ...green,
      ...grass,
      ...brown,
      ...orange,
      ...sky,
      ...mint,
      ...lime,
      ...yellow,
      ...amber,
      ...gold,
      ...bronze,
    },
  },
});

export default styled;

/*
const darkTheme = createTheme({
  colors: {
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
  },
});
*/
