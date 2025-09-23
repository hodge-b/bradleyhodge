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
        background-color: ${themedColors.secondary};
        border-radius: 5px;
    }
    .btn{
        border: 1px solid ${themedColors.secondaryAccent};
        background-color: ${themedColors.secondaryAccent};
        text-align: center;
        color: #000000;
    }
`