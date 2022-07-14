import styled from 'styled-components';
import { themedColors } from './styledColors';

export const StyledHeader = styled.header`
    background-color: ${themedColors.background};

    p{
        color: ${themedColors.accent};
    }
    i{
        color: ${themedColors.primary};
    }
`