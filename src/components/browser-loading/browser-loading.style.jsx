import styled, { keyframes } from 'styled-components';

const nfLoaderSpin = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

export const BrowserLoader = styled.div`
    position: absolute;
    top: center;
    left: center;
    width: 150px;
    height: 150px;
    align-self: center;
    &:after {
        content: "";
        background-image: url(https://assets.nflxext.com/en_us/pages/wiplayer/site-spinner.png);
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: 100%;
        position: absolute;
        
        width: inherit;
        height: inherit;
        animation: ${nfLoaderSpin} .8s linear infinite, 1!important;
        -webkit-animation: ${nfLoaderSpin} .8s linear infinite, 1!important;
    }
`;
