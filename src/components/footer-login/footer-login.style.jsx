import { styled } from "styled-components"

export const LoginFooter = styled.footer`
    width:100%;
    background-color: rgb(0,0,0, 0.7);
    flex-grow: 1;
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
`
export const LoginFooterContent = styled.div`
    width: 70%;
    color: #737373;
    margin-left: 8rem;
    
    
    h3 {
        margin-top: 1.4rem;
        font-size: 13.5px;
        padding-bottom: 1.5rem;
        font-weight: 400;
    }
    ul {
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
    }
    li{
        white-space: nowrap;
        font-size: 11px;
        padding-right: 9rem;
        width: 70px;
        padding-bottom: 1rem;
        list-style-type: none;
    }
    @media (max-width: 921px) {
        margin-left: -17%;
    }

`