import { HeaderStyle, DivHeader, DivLogo, HeaderButton, Logo } from "./home-header.style"
import { LanguageSection } from "../language-section/language-section.component"
import { Link } from "react-router-dom"
export function HeaderHome(){
    return (
        <HeaderStyle>
                <DivHeader>
                    <DivLogo>
                    <Link to={'/'}><Logo/></Link>
                    </DivLogo>
                    <LanguageSection/>
                    <Link to={'login'}><HeaderButton>Entrar</HeaderButton></Link>
                </DivHeader>
            </HeaderStyle>
    )
}