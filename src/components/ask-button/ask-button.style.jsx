import styled, { keyframes } from 'styled-components';
import { ReactComponent as AddSVG } from "../../svgs/button-ask-add.svg"



export const AskButtonStyled = styled.button`
    background-color: #2D2D2D;
    position: relative;
    border: 0;
    color: white;
    width: 64.3rem;
    align-self: center;
    text-align: left;
    height: 5rem;
    margin-top: 0.5rem;
    cursor: pointer;
    
    &:hover {
        background-color: #414141;
    }

    span {
        padding-left: 1.5rem;
        font-size: 1.5rem;
        color: white;
        
    }
`

const expand = () => keyframes`
  from {height: 0px;}
  to {transform: 200px;};
`
const retrain = "retrain"

export const AddSVGStyled = styled(AddSVG)`
    position: absolute;
    top: 30%;
    left: 93%;
    width: 36px;
    height: 36px;
    transform: rotate(${props => props.deg}deg);
`

export const AnswerDivStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0.1rem;
    overflow: hidden;
    background-color: #2D2D2D;
    width: 64.3rem;
    height: 0px;
    transform-origin: top;
    animation-fill-mode: forwards;
    animation-duration: 0.15s;
    animation-name: ${function(props){return props.animation}};
    

    span {
        font-size: 1.4rem;
        font-weight: 400;
        margin-top: 0.8rem;
        margin-left: 1.5rem;
        margin-right: 6rem;
        padding-bottom: 1.2rem;
        
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