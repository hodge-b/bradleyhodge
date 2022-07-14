import styled from 'styled-components';
import { themedColorsDark } from './styledColors';

export const StyledNavbarDark = styled.div`
    p:first-child{
        color: ${themedColorsDark.accent}
    }
    p:nth-child(2){
        color: ${themedColorsDark.primary}
    }
`