import { useContext } from "react"
import {TransferPerfilIcon, EditProfileIcon, AccountIcon, InformationsIcon , Header, HeaderUl, Logo, NotificationIcon, SearchIcon, DownArrow, BrowserHeaderPerfilDiv, BrowserHeaderMenuHoverDiv, DownUp } from "./browser-header.style"
import { UserContext } from "../../contexts/user.context"
import { Link } from "react-router-dom"

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
                            <li style={{marginTop: "0.8rem"}}>
                                <Link to={"/manageProfiles"} style={{width: "100%", display: "flex", alignItems: "center", color: "white", textDecoration: "none"}}>
                                    <EditProfileIcon/>
                                    <span>Gerenciar perfis</span>
                                </Link>
                            </li>
                            <li style={{marginTop: "0.5rem"}}>
                                <TransferPerfilIcon/>
                                <span>Transferir Perfil</span>
                            </li>
                            <li style={{marginTop: "0.5rem"}}>
                                <AccountIcon/>
                                <span>Conta</span>
                            </li>
                            <li style={{marginTop: "0.5rem"}}>
                                <InformationsIcon/>
                                <span>Central de Ajuda</span>
                            </li>
                        </ul>
                        <button>Sair da Netflix</button>
                    </BrowserHeaderMenuHoverDiv>
                    <DownUp/>
                </BrowserHeaderPerfilDiv>
            </HeaderUl>
        </Header>
    )
}