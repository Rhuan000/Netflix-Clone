import { styled } from "styled-components";
import { BrowserButton, BrowserGeneralPerfilDiv, BrowserContentDiv, BrowserProfileDiv } from "../browser/browser.style";
import { ReactComponent as editProfileSVG } from "../../svgs/edit-profile.svg"

export const ManageContentDiv = styled(BrowserContentDiv)`
    position: relative;
    color: grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`

export const ManageProfileDiv = styled(BrowserProfileDiv)`
    &::before {
        width: 96%;
        content: '';
        position: absolute; /* Position the pseudo-element within the container */
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 97%;
        border: 3px solid transparent;
        border-radius: 4px;
        
    }

    &:hover::before{
        border-color: gray;
    }
   
`


export const EditProfileSVG = styled(editProfileSVG)`
    position: absolute;
    fill: white;
    color: white;
    top: 36%;
    left: 42%;
    height: 30px;
    width: 30px;
    &:hover{
        cursor: pointer;
    }
`


export const ManageButton = styled(BrowserButton)`
    background-color: white;
    color: black;
    border: 0;
    font-weight: 600;
    &:hover {
        background-color: #E50914;
        color: white;
    }
`


export const ManageChosenContainer = styled.div`
    background: linear-gradient(to bottom, #050505 0%, #141414 12%);
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    div {
        width: 100%;
        max-width: 600px;
    }
    h1 {
        font-size: 4vw;
        font-weight: 500;
    }


`

export const ManageChosenDiv = styled.div`
    position: relative;
    display: flex;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    padding-top: 1rem;
    padding-bottom: 1rem;
    box-sizing: border-box;
    

    img {
        height: 95.59px;
        width: 95.59px;
        border-radius: 5px;
    }
    svg {
        position: absolute;
        background-color: rgb(0,0,0, 0.75);
        border-radius: 100%;
        padding: 1px;
        overflow: visible;
        height: 20px;
        width: 20px;
        top: 67%;
        left: 2%;
    }

    div {
        box-sizing: border-box;
        width: 100%;
        padding-left: 1rem;
    }
    input {
        box-sizing: border-box;
        width: 100%;
        padding-top: 0.4rem;
        padding-bottom: 0.4rem;
        padding-left: 1rem;
        color: white;
        background-color: #666666;
        font-size: 1.3vw;
        border: 0;
        outline: none;
    }
`

export const ManageChosenButtonDiv = styled.div`
    display: flex;
    column-gap: 1rem;
`

export const ManageGeneralPerfilDiv = styled(BrowserGeneralPerfilDiv)`
    &:hover {
        ${ManageProfileDiv}::before{
        border-color: gray;
        }
    }
    

`