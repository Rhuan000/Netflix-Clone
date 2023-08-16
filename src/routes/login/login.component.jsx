import { HeaderHome } from "../../components/header-home/header-home.component"
import { LoginBackground, LoginBackgroundShadow, LoginHeader, Logo, LoginDiv, LoginContentDiv, LoginInput, LoginButton, LoginCheckbox } from "./login.style"

export function Login(){
    return(
        <>
            <LoginBackground>
                <LoginHeader>
                    <Logo/>
                </LoginHeader>
                <LoginBackgroundShadow/>
                <LoginDiv>
                    <LoginContentDiv>
                        <h1 style={{marginBottom: "1rem"}}>Entrar</h1>
                        <form>
                            <LoginInput placeholder="Email"/>
                            <LoginInput placeholder="Senha"/>
                            <LoginButton>Entrar</LoginButton>
                            <LoginCheckbox id="myCheckbox"/>
                            <label for="myCheckbox">Lembre-se de mim</label>
                            <span><a>saiba mais</a></span>
                        </form>
                    </LoginContentDiv>
                    
                </LoginDiv>
                
            </LoginBackground>
        </>
    )
}