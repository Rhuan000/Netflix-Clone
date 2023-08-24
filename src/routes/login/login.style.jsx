import { styled } from "styled-components";
import { HomeBackground } from "../home/home.style";
import { HomeBackgroundShadow } from "../home/home.style";
import {ReactComponent as LogoSVG} from "../../logo.svg"
import { HeaderStyle } from "../../components/header-home/header-home.style";
import { Button } from "../../components/button/button.component";


export const Logo = styled(LogoSVG)`
    height: 36px;
    width: 150.6px;
    fill: #E50914;
    @media (max-width: 702px){
        height: 24px;
        width: 72px;
    }
`

export const LoginBackground = styled(HomeBackground)`
    background-position-x: 0px;
    background-position-y:  0px;
    background-size: 116em;
    padding-bottom: 0px;
    height: 900px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (max-width: 740px){
        align-item: left;
        background: black;
    }

    
`

export const LoginBackgroundShadow = styled(HomeBackgroundShadow)`
    background-color: rgb(0, 0, 0, 0.5);
   
`
export const LoginHeader = styled(HeaderStyle)`
    box-sizing: border-box;
    position: absolute;
    z-index: 2;
    max-width: 100%;
    padding-top: 1.25rem;
    padding-left: 2rem;
    padding-right: 0px;
    box-shadow: 0px 0px 0px rgb(0,0,0,0);
    background: linear-gradient(to bottom, rgb(0,0,0, 0.45) 25%, rgb(0, 0, 0, 0));
    color: white;
   
`
