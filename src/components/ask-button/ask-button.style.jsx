import styled, { keyframes } from 'styled-components';
import { ReactComponent as AddSVG } from "../../svgs/button-ask-add.svg"



export const AskButtonStyled = styled.button`
    background-color: #333333;
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
        padding-left: 2rem;
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
    background-color: red;
    width: 64.3rem;
    height: 0px;
    transform-origin: top;
    animation-fill-mode: forwards;
    animation-duration: 0.15s;
    animation-name: ${function(props){return props.animation}};


    @keyframes expand {
        from{height: 0px;}
        to {height: 200px;}    
    }

    @keyframes retrain {
        from{height: 200px;}
        to {height: 0px;}    
    }

`