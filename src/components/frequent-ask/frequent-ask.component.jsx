import { HomeSeparatorAsk } from "./frequent-ask.style"
import { AskButton } from "../ask-button/ask-button.component"
import { EmailSignature } from "../email-signature/email-signature.component"
import { EmailSignatureStyled } from "./frequent-ask.style"
export function FrequentAsk(){
    return(
        <HomeSeparatorAsk >
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h2 style={{fontSize:"50px", textAlign: 'center', maxHeight: "927px"}}>Perguntas frequentes</h2>
                <AskButton>O que é a Netflix?</AskButton>
                <AskButton>Quanto custa a Netflix?</AskButton>
                <AskButton>Onde posso assistir?</AskButton>
                <AskButton>Como faço para cancelar?</AskButton>
                <AskButton>O que que eu posso assistir na Netflix?</AskButton>
                <AskButton>A Netflix é adequada para crianças?</AskButton>
                <EmailSignatureStyled></EmailSignatureStyled>
                
            </div>
            
        </HomeSeparatorAsk>
    )
}