import { styled } from "styled-components"
import { ReactComponent as LogoSVG } from "../../logo.svg"
import { IoIosNotificationsOutline } from "react-icons/io"
import { AiFillCaretDown } from "react-icons/ai"
import { AiFillCaretUp } from "react-icons/ai"
import {BiSearch} from "react-icons/bi"

export const Header = styled.header`
    display: flex;
    color: white;
    justify-items: center;
    align-items: center;
`
export const HeaderUl = styled.ul`
    padding-top: 1.2rem;
    padding-left: 3.5rem;
    padding-right: 3.5rem;
    padding-bottom: 1rem;
    display: flex;
    list-style-type: none;
    width: 100%;
    font-size: small;
    align-items: center;

    span {
        margin-left: 1rem;
        cursor: pointer;
    }
`

export const Logo = styled(LogoSVG)`
    fill: #E50914;
    height: 1.55rem;
    margin-right: 1.5rem;
    cursor: pointer;
    @media (max-width: 966px) {
        height: 24px;
          
    }
`
export const NotificationIcon = styled(IoIosNotificationsOutline)`
    height: 1.6rem;
    width: 1.6rem;
    color: white;
    cursor: pointer;
    margin-right: 1rem;
`
export const SearchIcon = styled(BiSearch)`
    height: 1.6rem;
    width: 1.6rem;
    color: white;
    cursor: pointer;
    justify-self: end;
    margin-right: 1.2rem;
`

export const BrowserHeaderPerfilDiv = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;

`
export const DownArrow = styled(AiFillCaretDown)`
    height: .8rem;
    width: .8rem;
    margin-left: .5rem;
    color: white;
    cursor: pointer;
    transition: 0.3s;
    ${BrowserHeaderPerfilDiv}:hover &{
        
        transform: rotate(180deg);
    }
`
export const BrowserHeaderMenuHoverDiv = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    height:  382px;
    width: 218px;
    left: -295%;
    top: 160%;
    visibility: hidden;
    cursor: default;
    transition: 0.3s;
    border: 1px solid rgb(50,50,50);
    opacity: 0;

    ul {
        padding-top: .5rem;
        padding-left: 0.7rem;
    }

    li{
        display: flex;
        cursor: pointer;
        width: 100%;
        align-items: center;
        list-style-type: none;
        margin-top: .6rem;
        &:hover {
            text-decoration: underline;
        }
        span {
            margin-left: 0.5rem;
        }
    }

    &:hover {
        visibility: visible;
        opacity: 1;
    }
    ${BrowserHeaderPerfilDiv}:hover &{
        visibility: visible;
        opacity: 1;
    }
`
export const DownUp = styled(AiFillCaretUp)`
    position: absolute;
    height: 1.3rem;
    width: 1.3rem;
    margin-left: .5rem;
    top: 112%;
    color: rgb(255, 255, 255, 0.9);
    cursor: pointer;
    visibility: hidden;    
    transition: 0.3s;
    opacity: 0;
    &:hover {
        visibility: visible;
        opacity: 1;
    }
    ${BrowserHeaderPerfilDiv}:hover &{
        visibility: visible;
        opacity: 1;
    }
`