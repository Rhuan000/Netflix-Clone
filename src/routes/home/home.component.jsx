import {HomeBackground, HomeBackgroundShadow, DivSign} from "./home.style"
import { EmailSignature } from "../../components/email-signature/email-signature.component"
import { HeaderHome } from "../../components/header-home/header-home.component"
import { SignPurple } from "../../components/sign-purple/sign-purple.component"
import { DevicesHome } from "../../components/devices-home/devices-home.component"
import { FrequentAsk } from "../../components/frequent-ask/frequent-ask.component"


export function Home(){
    return(
        <>     
            <HomeBackground>
                <HomeBackgroundShadow>
                    <HeaderHome/>
                    <div>
                        <h1>Filmes, séries e muito mais, sem limites</h1>
                        <h2>Assista onde quiser. Cancele quando quiser.</h2>
                        <EmailSignature/>
                    </div>
                    <SignPurple/>
                </HomeBackgroundShadow>
                <DevicesHome/>
                <FrequentAsk/>
            </HomeBackground>
            
        </>

    )
}