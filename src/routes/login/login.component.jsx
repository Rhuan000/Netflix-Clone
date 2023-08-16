import { HeaderHome } from "../../components/header-home/header-home.component"
import { LoginBackground, LoginBackgroundShadow, LoginHeader, Logo, LoginDiv, LoginContentDiv, LoginInput, LoginButton, LoginCheckbox, LoginCheckboxDiv } from "./login.style"

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
                            <LoginCheckboxDiv>
                                <LoginCheckbox id="myCheckbox"/>
                                <label for="myCheckbox">Lembre-se de mim</label>
                                <span><a>Precisa de ajuda?</a></span>
                            </LoginCheckboxDiv>

                        </form>
                    </LoginContentDiv>
                    
                </LoginDiv>
                
            </LoginBackground>
        </>
    )
}