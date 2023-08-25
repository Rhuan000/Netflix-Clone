import { Link } from "react-router-dom"

import { SignUpBackground, FooterSignUp, HeaderSignUp, ContentSignUpDiv, SignUpInput, SignUpButton } from "./signup.style"
import { Logo } from "../login/login.style"
import { useState } from "react"
import { findRenderedComponentWithType } from "react-dom/test-utils"
import { createUserDocumentFromAuth, createUserWithEmailPassword } from "../../utils/firebase/firestore.utils"

const initialState = {
    email: "",
    password: ""
}

export function SignUp(){
    const [form, setForm] = useState(initialState)

    function getChange(event){
        const {name, value} = event.target
        form[name] = value
        setForm({...form})
    }
    
    async function handleSubmit(event){
        event.preventDefault()
        
        const response =  await createUserWithEmailPassword(form.email, form.password);
        console.log(await createUserDocumentFromAuth(response.user))

    }
    
    return (
        <>
            <SignUpBackground>
                <HeaderSignUp>
                    <Link to="/"><Logo/></Link>
                    <span><Link to="/login">Entrar</Link></span>
                </HeaderSignUp>
                <ContentSignUpDiv>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <h1>Crie uma senha para inicar sua assinatura</h1>
                            <span>Faltam só mais alguns passos!</span>                 
                            <span>Nós também detestamos formulários.</span>
                        </div>
                        <SignUpInput placeholder="Email" type="email" name="email" onChange={getChange}></SignUpInput>
                        <SignUpInput placeholder="Adicione uma senha" type="password" name="password" onChange={getChange}></SignUpInput>
                        <SignUpButton>Próximo</SignUpButton>
                    </form>
                    
                    
                </ContentSignUpDiv>
                <FooterSignUp/>
            </SignUpBackground>
            
        </>
        
    )
}