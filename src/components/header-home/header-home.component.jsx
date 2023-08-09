import { HeaderStyle, DivHeader, DivLogo, HeaderButton, Logo } from "./header-home.style"
import { LanguageSection } from "../language-section/language-section.component"
export function HeaderHome(){
    return (
        <HeaderStyle>
                <DivHeader>
                    <DivLogo>
                        <Logo/>
                    </DivLogo>
                    <LanguageSection/>
                    <HeaderButton>Entrar</HeaderButton>
                </DivHeader>
            </HeaderStyle>
    )
}