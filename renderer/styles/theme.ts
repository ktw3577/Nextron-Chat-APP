import { DefaultTheme } from "styled-components";

const fontSize = {
  xs: "0.5rem",
  sm: "0.75rem",
  base: "1rem",
  md: "1.25rem",
  lg: "1.5rem",
  xl: "2rem",
};

const color = {
  primary: "#638bfa",
  primaryLight: "#84a4fb",
  primaryThick: "#225af7",
  lightGray: "#fefeff",
  gray0: "#f9f9fb",
  gray: "#f7f7f8",
  gray1: "#f1f1f4",
  gray2: "#dededf",
  brown0: "#281b18",
  brown1: "#87685a",
  brown2: "#281b18",
};

export type ColorsType = typeof color;
export type FontSizeType = typeof fontSize;

const theme: DefaultTheme = { fontSize, color };

export default theme;
