import { styled } from "styled-components"
import { AiOutlineRight } from "react-icons/ai"

export const SignatureStyled = styled.form`
    display:flex;
    max-width: 100%;
    flex-direction: column;
    color: white;
    margin-top: 1.5rem;
    align-items: center;
    justify-content: center;
    @media (max-width: 966px){
            margin-top: 0;
            padding: 1rem 3rem;
            text-align: center;
            
    }

    h3 {
        text-align: center;
        font-weight: 400;
        
        font-size: 1.25rem;
        margin-bottom: 0.8rem;
        @media (max-width: 966px){
            font-size: 18px;
            text-align: center;
            margin-left: -0.4rem;
            
        }
    }
    div {
        align-items: center;
    }
`
export const RightIconStyled = styled(AiOutlineRight)`
    position: absolute;
    top: 30%;
`