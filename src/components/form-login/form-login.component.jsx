import { LoginDiv, LoginContentDiv, LoginInput, LoginButton, LoginCheckboxDiv, LoginCheckbox, NewMemberDiv } from "./form-login.style"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import { signInWithEmailPassword, updateDocument, getUserData } from "../../utils/firebase/firestore.utils"
import { UserContext } from "../../contexts/user.context"

const initialState = {
    email: "",
    password: ""
}


export function FormLogin(props){

    const [form, setForm] = useState(initialState)
    const navigate = useNavigate()
    const userContext = useContext(UserContext)

    function getChange(event){
        const {name, value} = event.target
        form[name] = value
        setForm({...form})
    }
    
    async function handleSubmit(event){
        event.preventDefault()
      
        const response =  await signInWithEmailPassword(form.email, form.password);
        userContext.setCurrentUser(response.user)
        navigate("/browser")
    }

    return (
        <LoginDiv>
            <LoginContentDiv>
                <h1 style={{marginBottom: "1rem"}}>Entrar</h1>
                <form onSubmit={handleSubmit}>
                    <LoginInput placeholder="Email" type="email" name="email" onChange={getChange}/>
                    <LoginInput placeholder="Senha" type="password" name="password" onChange={getChange}/>
                    <LoginButton>Entrar</LoginButton>

                    <LoginCheckboxDiv>
                        <LoginCheckbox id="myCheckbox"/>
                        <label htmlFor="myCheckbox">Lembre-se de mim</label>
                        <span><a>Precisa de ajuda?</a></span> 
                    </LoginCheckboxDiv>
                </form>
                <NewMemberDiv>
                    <span>Novo por aqui? <Link className="assine" to="/signup">Assine Agora.</Link></span>
                    <p>Essa página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <a >Saiba mais.</a></p>
                </NewMemberDiv>
            </LoginContentDiv>
        </LoginDiv>
    )
}