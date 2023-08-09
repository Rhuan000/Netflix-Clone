import { styled } from "styled-components"
import { Button } from "../button/button.component"
import { ReactComponent as LogoSVG } from "../../logo.svg"

export const HeaderStyle = styled.header`
    position: absolute;
    top: 0;
    width: 100vw;
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
`

export const HeaderButton = styled(Button)`
    height: 2rem;
    width: 4.5rem;
    font-size: 14px;
    border-radius: 4px;
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
`