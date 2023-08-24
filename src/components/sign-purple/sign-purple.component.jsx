import { DivSign, MainDiv as BackGroundLinearDiv, FirstParagraph, SignButton, MainContentDiv } from "./sign-purple.style"
import { ReactComponent as PopcornSVG } from "../../svgs/popcorn.svg"
import { Link } from "react-router-dom"

export function SignPurple(){
    return(
        <DivSign>
            <BackGroundLinearDiv>
                <div>
                    <PopcornSVG/>
                </div>
                <MainContentDiv>
                    <FirstParagraph>A Netflix que você adora por apenas <span>R$18,90.</span></FirstParagraph>
                    <p>Assine o plano Padrão com anúncios.</p>
                    <SignButton><Link to="/signup">Saiba mais</Link></SignButton>
                </MainContentDiv>
            </BackGroundLinearDiv>
        </DivSign>
    )
}