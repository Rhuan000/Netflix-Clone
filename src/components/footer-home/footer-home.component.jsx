import { HomeFooterStyled, NavFooterUl } from "./footer-home.style"
import { LanguageSection } from "../language-section/language-section.component"

export function HomeFooter(props){
    return(
        <HomeFooterStyled>
            <div>
                <h4>Dúvidas? Ligue 0800 591 2876</h4>
                <NavFooterUl>
                    <li><a href="/">Perguntas frequentes</a></li>
                    <li><a href="/">Central de Ajuda</a></li>
                    <li><a href="/">Conta</a></li>
                    <li><a href="/">Media Center</a></li>
                    <li><a href="/">Relações com investidores</a></li>
                    <li><a href="/">Carreiras</a></li>
                    <li><a href="/">Resgatar cartão pré-pago</a></li>
                    <li><a href="/">Comprar cartão pré-pago</a></li>
                    <li><a href="/">Formas de assistir</a></li>
                    <li><a href="/">Termos de Uso</a></li>
                    <li><a href="/">Privacidade</a></li>
                    <li><a href="/">Preferências de cookies</a></li>
                    <li><a href="/">Informações corporativas</a></li>
                    <li><a href="/">Entre em contato</a></li>
                    <li><a href="/">Teste de velocidade</a></li>
                    <li><a href="/">Avisos legais</a></li>
                    <li><a href="/">Só na Netflix</a></li>
                </NavFooterUl>
            <LanguageSection style={{marginTop: "2.5rem"}}/>
            <p>Netflix Brasil</p>
            </div>
        </HomeFooterStyled>

    )
}