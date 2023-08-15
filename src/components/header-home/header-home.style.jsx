import { styled } from "styled-components"
import { Button } from "../button/button.component"
import { ReactComponent as LogoSVG } from "../../logo.svg"

export const HeaderStyle = styled.header`
    position: absolute;
    top: 0;
    width: 100%;
    background: linear-gradient(to bottom, rgb(0, 0, 0, 0.72) 12%, rgb(0, 0, 0, 0.45));
    box-shadow: 0px 0px 90px 50px rgb(0, 0, 0, 0.5);
   
`

export const DivHeader = styled.div`
    display: flex;
    justify-content: left;
    margin-left: 10.05rem;
    margin-right: 10.05rem;
    height: 5.4rem;
    align-items: center;
    @media (max-width: 966px) {
        margin-left: 2rem;
        margin-right: 2rem;  
    }
`

export const HeaderButton = styled(Button)`
    padding: 0.45rem 1.4rem;
    font-size: 14px;
    font-weight: bold;
    border-radius: 4px;
    text-align: center;
    span {
        margin: 0;
    }
`


export const DivLogo = styled.div`
    display: flex;
    justify-content: left;
    flex-grow: 1;
    
`

export const Logo = styled(LogoSVG)`
    fill: #E50914;
    height: 2.5rem;
    @media (max-width: 966px) {
        height: 24px;
          
    }
`