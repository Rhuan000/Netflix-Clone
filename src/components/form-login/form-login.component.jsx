import { useNavigate } from "react-router-dom"
import { LoginDiv, LoginContentDiv, LoginInput, LoginButton, LoginCheckboxDiv, LoginCheckbox, NewMemberDiv } from "./form-login.style"
import { Link } from "react-router-dom"

export function FormLogin(props){
    const navigate = useNavigate()
    function handleForm(event){
        event.preventDefault()
        if(true){
            navigate('/browser')
        }
    }
    return (
        <LoginDiv>
            <LoginContentDiv>
                <h1 style={{marginBottom: "1rem"}}>Entrar</h1>
                <form onSubmit={handleForm}>
                    <LoginInput placeholder="Email" type="email"/>
                    <LoginInput placeholder="Senha" type="password"/>
                    <LoginButton>Entrar</LoginButton>

                    <LoginCheckboxDiv>
                        <LoginCheckbox id="myCheckbox"/>
                        <label for="myCheckbox">Lembre-se de mim</label>
                        <span><a>Precisa de ajuda?</a></span> 
                    </LoginCheckboxDiv>
                </form>
                <NewMemberDiv>
                    <span>Novo por aqui? <Link className="assine" to="/signup">Assine Agora.</Link></span>
                    <p>Essa página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <a login>Saiba mais.</a></p>
                </NewMemberDiv>
            </LoginContentDiv>
        </LoginDiv>
    )
}