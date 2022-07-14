import styled from 'styled-components';
import { themedColors } from './styledColors';

export const StyledCardContainer = styled.div`
    .card-pretitle{
        color: ${themedColors.accent};
    }
    .card-title{
        color: ${themedColors.primary};
    }
    .card-description{
        color: ${themedColors.primary};
        background-color: ${themedColors.secondary};
    }
    .card-tech-container > p{
        color: ${themedColors.primary};
    }
    .btn{
        border: 1px solid ${themedColors.accent};
        background-color: ${themedColors.accent};
        color: #000000;
    }
`