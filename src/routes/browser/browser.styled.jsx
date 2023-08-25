import { styled } from "styled-components";
import { MdAddCircle } from 'react-icons/md';

export const  BrowserContainerDiv = styled.div`
    background: linear-gradient(to bottom, #050505 0%, #141414 12%);
    height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const BrowserContentDiv = styled.div`
    text-align: center;
    margin-top: 1rem;
    h1 {
        font-size: 48.71px;
        font-weight: 500;
    }
`

export const BrowserProfilesContentDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    min-width: 312px;
    margin-bottom: 2rem;

`
export const BrowserGeneralPerfilDiv = styled.div`
    color: gray;
    position: relative;
    text-align: center;
    span {
        
        width: 123px;
        position: absolute;
        left: 2.5%;
        margin-top: 0.6rem;
        font-size: 18px;
    }
    &:hover {
        color: white;
        cursor: pointer;
    }
    margin-top: 2.2rem;
    margin-right: 0.75rem;
    margin-left: 0.75rem;
    max-width: 150px;
    padding-bottom: 1rem;
`

export const BrowserPerfilDiv = styled.div`
    box-sizing: border-box;
    position:relative;
    display: flex;
    flex-direction: column;

    




    &::before{
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

    ${BrowserGeneralPerfilDiv}:hover &::before{
            border-color: white;
            
        }
    
    img{
        box-sizing: border-box;
        height: 130.59px;
        width: 130.59px;
        border-radius: 5px;

    }
`
export const BrowserAddPerfilDiv = styled(BrowserPerfilDiv)`
    height: 130.39px;
    width: 130.39px;
    
    color: white;
    border-radius: 5px;

    ${BrowserGeneralPerfilDiv}:hover &{
        color: #565656;
        background-color: #E5E5E5;
    }

    &::before {
        display:none;
    }
`
export const BrowserAddIcon = styled(MdAddCircle)`
    position: absolute;
    left: 13.5%;
    top: 13%;
    font-size: 6rem;
`


export const BrowserButton = styled.button`
    background: transparent;
    color: grey;
    border: 1px solid grey;
    font-size: 16px;
    font-weight: 500;
    padding: 9px 26px;
    margin-top: 5rem;

    &:hover{
        color: white;
        border-color: white;
        cursor: pointer;
    }
`