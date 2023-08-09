import { ContentDivStyled, Image, GifTV, GifDesktop} from "./devices-home.style"
import tvImg from "../../imgs/devices/netflix-tv-root.png"
import desktpImg from "../../imgs/devices/netflix-desktop-root.png"
import infantilImg from "../../imgs/devices/netflix-infantil-root.png"
import mobileImg from "../../imgs/devices/netflix-mobile-root.png"
import { HomeSeparator } from "../../components/home-separator/home-separator.component"
//https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v 
//https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v

export function DevicesHome(){
    return (
        <>
        <HomeSeparator>
            <ContentDivStyled>
                <div>
                    <h2>Aproveite na TV</h2>
                    <p>Assista em Smart TVs, Playstation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</p>
                </div>
                <div>
                    <Image src={tvImg}/>
                    <GifTV src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" loop autoPlay/>
                </div>
            </ContentDivStyled>
        </HomeSeparator>
        <HomeSeparator>
            <ContentDivStyled>
                <div>
                    <Image src={desktpImg}/>
                    <GifDesktop src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" loop autoPlay/>
                </div>
                <div>
                    <h2>Assista onde Quiser</h2>
                    <p>Assista a quantos filmes e séries quiser no celular, tablet, laptop e TV.</p>
                </div>
            </ContentDivStyled>
        </HomeSeparator>
        <HomeSeparator>
            <ContentDivStyled>
                <div>
                    <h2>Crie perfis para crianças</h2>
                    <p>Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.</p>
                </div>
                <div>
                    <Image src={infantilImg}/>
                </div>
            </ContentDivStyled>
        </HomeSeparator>
        <HomeSeparator>
            <ContentDivStyled>
                <div>
                    <Image src={mobileImg}/>
                </div>
                <div>
                    <h2>Baixe séries para assistir offline</h2>
                    <p>Disponíveis somente em planos sem anúncios.</p>
                </div>
            </ContentDivStyled>
        </HomeSeparator>
        </>

    )
}