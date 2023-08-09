import { Button } from "../button/button.component";
import { InputHome } from "../input-home/input-home.component";
import {SignatureStyled, RightIconStyled} from "./email-signature.style"

export function EmailSignature(){
    return (
        <SignatureStyled>
                <h3>Quer assistir? informe seu email para criar ou reiniciar sua assinatura.</h3>
                <div><InputHome placeholder="Email"></InputHome><Button>Vamos lá <RightIconStyled/></Button></div>
        </SignatureStyled>
    )
}