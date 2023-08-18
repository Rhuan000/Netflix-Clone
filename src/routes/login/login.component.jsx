
import { FooterLogin } from "../../components/footer-login/footer-login.component"
import { FormLogin } from "../../components/form-login/form-login.component"
import {LoginBackground, LoginBackgroundShadow, LoginHeader, Logo} from "./login.style"
import { Link } from "react-router-dom"


export function Login(){
    return(
        <>
            <LoginBackground>
                <LoginHeader>
                    <Link to="/"><Logo/></Link>
                </LoginHeader>
                <LoginBackgroundShadow/>
                <FormLogin/>
                <FooterLogin/>
            </LoginBackground>
        </>
    )
}