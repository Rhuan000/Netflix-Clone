import { Button } from "../button/button.component";
import { HomeInput } from "../home-input/home-input.component";
import {SignatureStyled, RightIconStyled} from "./email-signature.style"

export function EmailSignature(props){
    return (
        <SignatureStyled {...props}>
                <h3>Quer assistir? informe seu email para criar ou reiniciar sua assinatura.</h3>
                <div><HomeInput placeholder="Email"></HomeInput><Button>Vamos lá <RightIconStyled/></Button></div>
        </SignatureStyled>
    )
}