import styled from "styled-components";

import { themedColorsDark } from "./styledColors";

export const StyledHeroDark = styled.section`
  p:first-child {
    color: ${themedColorsDark.accent};
  }
  p:nth-child(2) {
    color: ${themedColorsDark.primary};
  }
  h1 {
    color: ${themedColorsDark.secondary};
  }
  h3 {
    color: ${themedColorsDark.primary};
  }
  span {
    color: ${themedColorsDark.accent};
  }
  .btn--get-started {
    border: 1px solid ${themedColorsDark.accent};
    background-color: ${themedColorsDark.background};
    color: ${themedColorsDark.accent};
  }
`;

