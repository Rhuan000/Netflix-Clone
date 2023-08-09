import { styled } from "styled-components"
import { AiOutlineRight } from "react-icons/ai"

export const SignatureStyled = styled.form`
    display:flex;
    flex-direction: column;
    color: white;
    margin-top: 1.5rem;
    align-items: center;
    justify-content: center;
    h3 {
        text-align: left;
        font-weight: 400;
        margin-left: -3.3rem;
        font-size: 1.1rem;
        margin-bottom: 0.8rem;
    }
    div {
        align-items: center;
    }
`
export const RightIconStyled = styled(AiOutlineRight)`
    position: absolute;
    top: 30%;
`