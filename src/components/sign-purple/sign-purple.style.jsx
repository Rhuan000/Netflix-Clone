import { styled } from "styled-components"

export const DivSign = styled.div`
    position: absolute;
    top: 627px;
    padding-left: 9rem;
    width: 100vw;
    background-color: rgb(0, 0, 0, 0.51);
    box-shadow: 0px -20px 200px 20px #000000;

`
export const MainDiv = styled.div`
        display: flex;
        position: relative;
        z-index: 1;
        width: 87vw;
        height: 144px;
        align-items: center;
        justify-content: center;
    
        
        

    &::before,
    &::after {
    content: "";
        position: absolute;
        top: 0;
        width: 50%;
        height: 100%;
        z-index: -1;
        
    }

    &::before {
        left: 0;
        background: linear-gradient(50deg, #000413 13%, #0E1B4E 40%, #89112D 100%);
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    &::after {
        right: 0;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        background: linear-gradient(-50deg, #000413 13%, #0E1B4E 40%, #89112D 100%);
    }

`
export const MainContentDiv = styled.div`
    text-align: left;
    margin-left: 1.4rem;
`
export const FirstParagraph = styled.p`
    font-size: 1.25rem;
    margin-bottom: 0.6rem;
`


export const SignButton = styled.button`
    background-color: transparent;
    font-size: 1rem;
    border: 0px;

    margin-top: 0.6rem;
    a {
        color: #448ef4;
    }
`