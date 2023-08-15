import styled, { keyframes } from 'styled-components';
import { ReactComponent as AddSVG } from "../../svgs/button-ask-add.svg"



export const AskButtonStyled = styled.button`
    background-color: #2D2D2D;
    position: relative;
    border: 0;
    color: white;
    padding: 24px 24px;
    width: 100%;
    align-self: center;
    text-align: left;
    height: 5rem;
    margin-top: 0.5rem;
    cursor: pointer;
    @media (max-width: 966px){
        height: 71px;
        padding: 14px 24px;
    }
    
    &:hover {
        background-color: #414141;
    }

    span {
        font-size: 1.5rem;
        
        color: white;
    @media (max-width: 966px){
        font-size: 18px;
    }
        
    }
`


export const AddSVGStyled = styled(AddSVG)`
    position: absolute;
    top: 30%;
    left: 93%;
    width: 36px;
    height: 36px;
    transform: rotate(${props => props.deg}deg);
    @media (max-width: 966px){
        width: 12px;
        height: 12px;
        top: 40%;
    }
`

export const AnswerDivStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-top: 0.1rem;
    overflow: hidden;
    background-color: #2D2D2D;
    width: 100%;
    height: 0px;
    color: white;
    transform-origin: top;
    animation-fill-mode: forwards;
    
    animation-duration: 0.15s;
    animation-name: ${function(props){return props.animation}};
    


    span {
        font-size: 1.4rem;
        font-weight: 400;
        margin-top: 0.4rem;
        margin-left: 1.5rem;
        margin-right: 6rem;
        padding-bottom: 1.2rem;
        @media (max-width: 966px){
            font-size: 18px;
            width: 90%;
            padding-bottom: 0.6rem;
        }
        
    }
    

    @keyframes expand {
        from{height: 0px;}
        to {height: auto;}
    }

    @keyframes retrain {
        from{height: auto;}
        to {height: 0px;}    
    }

`