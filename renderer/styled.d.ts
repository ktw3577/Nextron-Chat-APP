import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: string;
      primaryLight: string;
      primaryThick: string;
      lightGray: string;
      gray0: string;
      gray: string;
      gray1: string;
      gray2: string;
      brown2: string;
      brown1: string;
      brown0: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
