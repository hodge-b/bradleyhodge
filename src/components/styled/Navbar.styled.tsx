import styled from "styled-components";

import { themedColors } from "./styledColors";

export const StyledNavbar = styled.div`
  p:first-child {
    color: ${themedColors.accent};
  }
  p:nth-child(2) {
    color: ${themedColors.primary};
  }
`;

