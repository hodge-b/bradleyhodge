import styled from 'styled-components';
import { themedColors } from './styledColors';

export const StyledAboutContainer = styled.div`
    h2{
        color: ${themedColors.primary};
    }
    span{
        color: ${themedColors.accent};
    }
    .about-section-main-text{
        color: ${themedColors.primary};
    }
    .about-section-tech-item-container > i{
        color: ${themedColors.accent};
    }
`