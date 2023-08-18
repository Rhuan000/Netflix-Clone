import { LoginFooter, LoginFooterContent } from "./footer-login.style"
import { LanguageSection } from "../language-section/language-section.component"

export function FooterLogin(props){
    return(
        <LoginFooter {...props}>
            <LoginFooterContent>
                <h3>Duvidas? Ligue 0800 591 2876</h3>
                <nav>
                    <ul>
                        <li>Perguntas Frequentes</li>
                        <li>Central de ajuda</li>
                        <li>Termos de uso</li>
                        <li>Privacidade</li>
                        <li>Preferência de cookies</li>
                        <li>Informações corporativas</li>
                    </ul>
                </nav>
            <LanguageSection style={{marginTop: "1rem"}}/>
            </LoginFooterContent>
        </LoginFooter>
    )
}