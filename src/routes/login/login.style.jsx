import { styled } from "styled-components";
import { HomeBackground } from "../home/home.style";
import { HomeBackgroundShadow } from "../home/home.style";
import {ReactComponent as LogoSVG} from "../../logo.svg"
import { HeaderStyle } from "../../components/header-home/header-home.style";
import { Button } from "../../components/button/button.component";


export const Logo = styled(LogoSVG)`
    height: 45px;
    width: 166.6px;
    fill: #E50914;
`

export const LoginBackground = styled(HomeBackground)`
    background-position-x: 0%;
    background-position-y:  0%;
    background-size: 145%;
    
`

export const LoginBackgroundShadow = styled(HomeBackgroundShadow)`
    background-color: rgb(0, 0, 0, 0.5);
   
`
export const LoginHeader = styled(HeaderStyle)`
    position: absolute;
    z-index: 1;
    width: 100%;
    padding-top: 1.5rem;
    padding-left: 2.5rem;
    box-shadow: 0px 0px 0px rgb(0,0,0,0);
    background: linear-gradient(to bottom, rgb(0,0,0, 0.45) 25%, rgb(0, 0, 0, 0));
    color: white;
    
    
   
`

export const LoginContentDiv = styled.div`
    width: 70%;
    height: 80%;
`

export const LoginDiv = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    left: 33.5%;
    top: 12%;
    width: 450px;
    height: 660px;
    align-self: center;
    background-color: rgb(0, 0, 0, 0.7);
    border-radius: 5px;
`
export const LoginInput = styled.input`
    width: 92%;
    color: white;
    font-size: 16px;
    margin-top: 1rem;
    background-color: #333333;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1.5rem;
    border: 0px;
    border-radius: 4px;
    outline: none;
`

export const LoginButton = styled(Button)`
    margin: 0;
    margin-top: 2.8rem;
    width: 100%;
    padding-top: 1rem;
    padding-bottom:1rem;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
`

export const LoginCheckbox = styled.input.attrs({ type: 'checkbox' })`
  /* Hide the default checkbox */
  appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 0;
    height: 0;
    margin: 0;
 
    /* Custom checkbox style */
    position: relative;
   
    width: 16px;
    height: 16px;
    border: 2px solid #333;
    border-radius: 3px;
    background-color: transparent;

    /* Change color when checkbox is checked */
    &:checked {
        
       
        background-color: #333;
        border-color: #333;
    }

    /* Pseudo-element to create the checkmark symbol */
    &:checked::before {
        content: '\\2713'; /* Unicode checkmark symbol */
        position: absolute;
        top: -2px;
        left: 2px;
        font-size: 18px;
        color: #fff;
    }
`