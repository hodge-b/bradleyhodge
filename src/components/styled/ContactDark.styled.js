import styled from 'styled-components';
import { themedColorsDark } from './styledColors';

export const StyledContactDark = styled.section`
    .main-title{
        color: ${themedColorsDark.primary};
    }
    span{
        color: ${themedColorsDark.accent};
    }
    .contact-section-subtitle{
        color: ${themedColorsDark.primary};
    }
    .contact-section-main-container > p{
        color: ${themedColorsDark.primary};
    }
    .btn--say-hi{
        border: 1px solid ${themedColorsDark.accent};
        background-color: ${themedColorsDark.background};
        color: ${themedColorsDark.accent};
    }
`