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
    @media (max-width: 702px){
        height: 24px;
        width: 72px;
    }
`

export const LoginBackground = styled(HomeBackground)`
    background-position-x: 0px;
    background-position-y:  0px;
    background-size: 104em;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (max-width: 740px){
        align-item: left;
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
    padding-top: 1.5rem;
    padding-left: 2rem;
    padding-right: 0px;
    box-shadow: 0px 0px 0px rgb(0,0,0,0);
    background: linear-gradient(to bottom, rgb(0,0,0, 0.45) 25%, rgb(0, 0, 0, 0));
    color: white;
   
`
export const LoginDiv = styled.div`
    margin-top: 5.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    z-index: 1;
    width: 450px;
    height: 660px;
    align-self: center;
    background-color: rgb(0, 0, 0, 0.7);
    border-radius: 5px;

    @media (max-width: 740px){
        width: 100%;
        margin: 0;
        padding-top: 3rem;
        min-height: 100%;
        background-color: black;
    }
        @media (max-width: 702px){
        padding-top: 0rem;
    
    }
`

export const LoginContentDiv = styled.div`
    box-sizing: border-box;
    width: 70%;
    height: 80%;
    
    @media (max-width: 740px){
        width: 87%;
    }
`


export const LoginInput = styled.input`
    box-sizing: border-box;
    width: 100%;
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
export const LoginCheckboxDiv = styled.div`
    margin-top: 1rem;
    color: #b3b3b3;
    position: relative;
    display: flex;
    width: 100%;
    font-weight: 400;
    font-size: 13px;
    label {
        
        margin-left: 0.5rem;
        flex-grow: 1;
        
    }
    span {
        flex-grow: 1;
        text-align: right;
        
    }
` 
export const LoginCheckbox = styled.input.attrs({ type: 'checkbox' })`
  /* Hide the default checkbox */
  position: absolute;
  top: 0px;
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
    border: 2px solid #b3b3b3;
    border-radius: 3px;
    background-color: #b3b3b3;

    /* Change color when checkbox is checked */
    &:checked {
        
       
        background-color: #b3b3b3;
        border-color: #b3b3b3;
    }

    /* Pseudo-element to create the checkmark symbol */
    &:checked::before {
        content: '\\2713'; /* Unicode checkmark symbol */
        position: absolute;
        top: -6px;
        left: -2px;
        font-size: 20px;
        font-weight: bolder;
        color: black;
    }
`