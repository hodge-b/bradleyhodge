import styled from "styled-components";

import { themedColors } from "./styledColors";

export const StyledNavbarModalContainer = styled.div`
  button {
    color: ${themedColors.accent};
  }
  .list-item-number {
    color: ${themedColors.accent};
  }
  .list-item-text {
    color: ${themedColors.primary};
  }
`;

