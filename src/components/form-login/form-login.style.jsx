import { styled } from "styled-components"
import { Button } from "../button/button.component"

export const LoginDiv = styled.div`
    margin-top: 4.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    z-index: 1;
    width: 400px;
    height: 550px;
    align-self: center;
    background-color: rgb(0, 0, 0, 0.7);
    border-radius: 5px;

    @media (max-width: 740px){
        width: 100%;
        margin: 0;
        padding-top: 3rem;
        height: 600px;
        background-color: black;
        border-bottom: 1px solid gray;
        border-radius: 0px;
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

export const NewMemberDiv = styled.div`
    margin-top: 3.6rem;
    span {
        font-size: 16px;
        color: #737373;
        .assine {
            color: white;
            text-decoration: none;
            &:hover{
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }
    p {
        margin-top: 1rem;
        font-size: 13px;
        color: #8c8c8c;
        a {
            white-space: nowrap;
            color: #0071eb;
            &:hover{
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }
`

