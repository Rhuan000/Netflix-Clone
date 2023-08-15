import { HomeSeparator } from "../home-separator/home-separator.component"
import { AskButton } from "../ask-button/ask-button.component"
import { EmailSignature } from "../email-signature/email-signature.component"
import { EmailSignatureStyled } from "./frequent-ask.style"
import { useState } from "react"

const initialState = {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
}

export function FrequentAsk(){
    const [buttonOpen, setButtonOpen] = useState(initialState)

    function setNewOpen(newState){
        setButtonOpen(newState)
    }

    return(
        <HomeSeparator >
            <div style={{display: 'flex', flexDirection: 'column', width: "100%"}}>
                <h2 style={{fontSize:"50px", textAlign: 'center', maxHeight: "927px", color: "white", paddingBottom: "3rem"}}>Perguntas frequentes</h2>
                <AskButton id="1" isOpen={buttonOpen} setNewOpen = {setNewOpen} title="O que é a Netflix?">
                    <span>
                        A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet.
                    </span>
                    <span>
                        Você pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.
                    </span>
                </AskButton>
                <AskButton id="2" isOpen={buttonOpen} setNewOpen = {setNewOpen} title= "Quanto custa a Netflix?">
                    <span> 
                        Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$18,90 a R$55,90 por mês. Sem contrato nem taxas extras.
                    </span>
                </AskButton>
                <AskButton id="3" isOpen={buttonOpen} setNewOpen = {setNewOpen} title= "Onde posso assistir?">
                    <span>
                        Assista onde quiser, quando quiser. Faça login com sua conta Netflix em netflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames.
                    </span>
                    <span>
                        Você também pode baixar a sua série favorita com o aplicativo Netflix para iOS, Android ou Windows 10. Use downloads para levar a Netflix para onde quiser sem precisar de conexão com a Internet. Leve a Netflix com você para qualquer lugar.
                    </span>
                </AskButton>
                <AskButton id="4" isOpen={buttonOpen} setNewOpen = {setNewOpen} title= "Como faço para cancelar?">
                    <span>
                        A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.
                    </span>
                </AskButton>
                <AskButton id="6" isOpen={buttonOpen} setNewOpen = {setNewOpen} title= "O que que eu posso assistir na Netflix?">
                    <span>
                        A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.
                    </span>
                </AskButton>
                <AskButton id="7" isOpen={buttonOpen} setNewOpen = {setNewOpen} title= "A Netflix é adequada para crianças?">
                    <span>
                        A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis.
                    </span>
                    <span>
                        O recurso de controle parental, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam.
                    </span>
                </AskButton>
                
            </div>
            <EmailSignatureStyled style={{marginBottom: "5rem"}}></EmailSignatureStyled>
            
        </HomeSeparator>
    )
}