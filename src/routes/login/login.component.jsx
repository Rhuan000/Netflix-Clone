
import { LoginFooter } from "../../components/login-footer/login-footer.component"
import { LoginForm } from "../../components/login-form/login-form.component"
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
                <LoginForm/>
                <LoginFooter/>
            </LoginBackground>
        </>
    )
}