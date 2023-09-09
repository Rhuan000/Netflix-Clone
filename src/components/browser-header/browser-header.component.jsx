import { useContext } from "react"
import { Header, HeaderUl, Logo, NotificationIcon, SearchIcon, DownArrow, BrowserHeaderPerfilDiv, BrowserHeaderMenuHoverDiv, DownUp } from "./browser-header.style"
import { UserContext } from "../../contexts/user.context"

export function BrowserHeader({chosenProfile, setProfile}){
    const usercontext = useContext(UserContext)
    
    function handleClick(event){
        const index = event.currentTarget.getAttribute("data-index")
        setProfile(usercontext.userData.profiles[index])
    }

    return(
        <Header>
            <HeaderUl>
                <li><Logo></Logo></li>
                <li><span>Início</span></li>
                <li><span>Séries</span></li>
                <li><span>Filmes</span></li>
                <li><span>Bombando</span></li>
                <li><span>Minha Lista</span></li>
                <li><span>Navegar por idiomas</span></li>
                <div style={{flexGrow: 1, textAlign: "end"}}><SearchIcon/></div>
                <NotificationIcon/>
                <BrowserHeaderPerfilDiv>
                    <div style={{height: "35px", width: "35px", borderRadius: "5px",backgroundImage: `url(${usercontext.usersImages[chosenProfile.profile.img]})`, backgroundSize: "cover"}}></div>
                    <DownArrow/>
                    <BrowserHeaderMenuHoverDiv>
                        <ul>
                            {usercontext.userData.profiles.map(({profile}, i) => {
                                console.log(profile, chosenProfile)
                                if(profile !== chosenProfile.profile){
                                    return(
                                        <li onClick={handleClick} data-index={i} key={i}>
                                            <div style={{height: "30px", width: "30px", borderRadius: "5px",backgroundImage: `url(${usercontext.usersImages[profile.img]})`, backgroundSize: "cover"}}/>
                                            <span>{profile.name}</span>    
                                        </li>
                                    )
                                }
                            })}
                            <li></li>
                        </ul>
                    </BrowserHeaderMenuHoverDiv>
                    <DownUp/>
                </BrowserHeaderPerfilDiv>
            </HeaderUl>
        </Header>
    )
}