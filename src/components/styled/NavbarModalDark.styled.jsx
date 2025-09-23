import styled from 'styled-components';
import { themedColorsDark } from './styledColors';

export const StyledNavbarModalContainerDark = styled.div`
    button{
        color: ${themedColorsDark.accent};
    }
    .list-item-number{
        color: ${themedColorsDark.accent};
    }
    .list-item-text{
        color: ${themedColorsDark.secondary};
    }
`