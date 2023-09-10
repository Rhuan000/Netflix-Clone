import {HomeBackground, HomeBackgroundShadow, DivSign} from "./home.style"
import { EmailSignature } from "../../components/email-signature/email-signature.component"
import { HeaderHome } from "../../components/home-header/home-header.component"
import { SignPurple } from "../../components/sign-purple/sign-purple.component"
import { HomeDevices } from "../../components/home-devices/home-devices.component"
import { FrequentAsk } from "../../components/frequent-ask/frequent-ask.component"
import { HomeFooter } from "../../components/home-footer/home-footer.component"


export function Home(){
    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <HomeBackground>
                <HomeBackgroundShadow>
                    <HeaderHome/>
                    <div >
                        <h1>Filmes, séries e muito mais, sem limites</h1>
                        <h2>Assista onde quiser. Cancele quando quiser.</h2>
                       
                    </div>
                    <EmailSignature/>
                    <SignPurple/>
                </HomeBackgroundShadow>
            </HomeBackground>
            <HomeDevices/>
            <FrequentAsk/>
            <HomeFooter/>

            
        </div>

    )
}