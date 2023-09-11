import { styled } from "styled-components"
import { ReactComponent as LogoSVG } from "../../logo.svg"
import { IoIosNotificationsOutline } from "react-icons/io"
import { AiFillCaretDown } from "react-icons/ai"
import { AiFillCaretUp } from "react-icons/ai"
import {BiSearch} from "react-icons/bi"
import { ReactComponent as EditProfileSVG } from "../../svgs/edit-profile.svg"
import { ReactComponent as TransferPerfilSVG } from "../../svgs/transfer-perfil.svg"
import { ReactComponent as AccountSVG } from "../../svgs/account.svg"
import { ReactComponent as InformationsSVG } from "../../svgs/informations.svg"


export const Header = styled.header`
    z-index: 2;
    display: flex;
    color: white;
    justify-items: center;
    align-items: center;
    position: sticky;
    left: 0;
    top: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 5%, rgba(0, 0, 0, 0));
    transition: 0.7s;
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
    height:  auto;
    width: 218px;
    left: -295%;
    top: 160%;
    visibility: hidden;
    cursor: default;
    transition: 0.3s;
    background-color: rgb(0,0,0, 0.8);
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
    button {
        width: 100%;
        height: 100%;
        min-height: 40px;
        align-items: center;
        border: 0; 
        border-top: 1px solid rgb(100,100,100); 
        color: white; 
        background-color: black; 
        margin-top: 1rem;
        &:hover{
            text-decoration: underline;
            cursor: pointer;
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

export const AccountIcon = styled(AccountSVG)`
    height: 26px;
    width: 26px;
    color: #b3b3b3;
`
export const InformationsIcon = styled(InformationsSVG)`
    height: 26px;
    width: 26px;
    color: #b3b3b3;
`
export const EditProfileIcon = styled(EditProfileSVG)`
    height: 26px;
    width: 26px;
    color: #b3b3b3;
`
export const TransferPerfilIcon = styled(TransferPerfilSVG)`
    height: 26px;
    width: 26px;
    color: #b3b3b3;
`