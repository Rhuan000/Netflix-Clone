import { DivSign, MainDiv as BackGroundLinearDiv, FirstParagraph, SignButton, MainContentDiv } from "./sign-purple.style"
import { ReactComponent as PopcornSVG } from "../../svgs/popcorn.svg"

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
                    <SignButton><a href="https://www.netflix.com/signup">Saiba mais</a></SignButton>
                </MainContentDiv>
            </BackGroundLinearDiv>
        </DivSign>
    )
}