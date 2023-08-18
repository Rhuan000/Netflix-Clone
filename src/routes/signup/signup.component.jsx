import { Link } from "react-router-dom"

import { SignUpBackground, FooterSignUp, HeaderSignUp } from "./signup.style"
import { Logo } from "../login/login.style"
export function SignUp(){
    return (
        <>
            <SignUpBackground>
                <HeaderSignUp>
                    <Link to="/"><Logo/></Link>
                </HeaderSignUp>
                <FooterSignUp/>
            </SignUpBackground>
            
        </>
        
    )
}