import { styled } from "styled-components";
import { LoginInput } from "../../components/form-login/form-login.style";
import { FooterLogin } from "../../components/footer-login/footer-login.component";
import { LoginHeader } from "../login/login.style";
import { Button } from "../../components/button/button.component";

export const SignUpBackground = styled.div`
    min-height: 100vh;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    background-color: white;
    
`
export const HeaderSignUp = styled(LoginHeader)`
    display: flex;
    background: none;
    box-shadow: none;
    background-size: 0px;
    padding-bottom: 8px;
    border-bottom: 1px solid #D8D8D8;

    a {
        flex-grow: 1;
    }
    span {
        margin-top: 0.4rem;
        margin-right: 3rem;
        font-size: 13px;
        a {
            color: #333;
            font-weight: 600;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }
`

export const ContentSignUpDiv = styled.div`
    box-sizing: border-box;
    
    color: black;
    margin-top: 5rem;
  
    height: 400px;
    max-width: 380px;
    padding: 2rem;
    color: #222;
    
    div{
        display: flex;
        flex-direction: column;
        margin-bottom: 0.5rem;
        h1 {
        padding-right: 4rem;
        margin-bottom: 1rem;
        font-size: 21px;
    }
    span {
      
        font-weight: 500;
        font-size: 12px;
    }
    }

`
export const SignUpInput = styled(LoginInput)`
    background-color: white;
    padding-top: 11px;
    padding-bottom: 11px;
    padding-left: 10px;
    margin-top: 0.5rem;
    font-size: 12px;
    border: 1px solid gray;
    border-radius: 3px;
    color: #333;
`

export const SignUpButton = styled(Button)`
    width: 100%;
    margin-left: 0;
    margin-top: 1.3rem;
    border-radius: 2px;
    padding-top: 14px;
    padding-bottom: 14px;
    font-size: 14px;
`

export const FooterSignUp = styled(FooterLogin)`
    color: #737373;
    background-color: #F3F3F3;
    border-top: 1px solid #D8D8D8;
    align-items: start;
   
    margin-top: 0;
    
    div {
        margin-left: 5%;
       
        div {
            margin-left: 0;
        }
    }


`











    
