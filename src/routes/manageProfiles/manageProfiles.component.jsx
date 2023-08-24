import { BrowserButton, BrowserContainerDiv, BrowserProfilesContentDiv } from "../browser/browser.styled"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../contexts/user.context"
import { useNavigate } from "react-router-dom"
import { getUserData, getUserImage } from "../../utils/firebase/firestore.utils"
import { EditProfileSVG, ManageButton, ManageChosenContainer, ManageContentDiv, ManageProfileDiv, ManageChosenDiv, ManageChosenButtonDiv } from "./manageProfiles.style"


export function ManageProfiles(){
    const [userData, setUserData] = useState(null)
    const [userImage, setUserImage] = useState(null)
    const [chosenProfile, setChosenProfile] = useState(null)
    const userContext = useContext(UserContext)
    const navigate = useNavigate()
    
    useEffect(()=>{
        const user = userContext.currentUser
        if(user){
            async function userData() {
                const userDataResponse = await getUserData(user.uid)
                const userImageResponse = await getUserImage()
                console.log(userImageResponse)
                setUserImage(userImageResponse.profiles)
                setUserData(userDataResponse)
            }
            userData()
        } else {
            navigate("/login")
        }

    }, [])
    
    useEffect(()=>{
        if(chosenProfile)console.log(chosenProfile.profile.name)
    }, [chosenProfile])
    function handleConcluded(){
        navigate("/browser")

    }
    
    function handleProfileClick(event){
        const index = event.currentTarget.getAttribute("data-index")
        
        setChosenProfile(userData.profiles[index])
    }

    function handleCancelButton(){
        setChosenProfile(null)
    }


    return(
        <BrowserContainerDiv>
        {userData && 
            <ManageContentDiv>
                <h1>Gerenciar perfis:</h1>
                <BrowserProfilesContentDiv>
                    {userData.profiles.map(({profile}, i) => {
                        console.log(i)
                        return (
                            <ManageProfileDiv key={i} data-index={i} onClick={handleProfileClick} style={{"zIndex": "1"}}>
                                <EditProfileSVG/>
                                <img src={userImage[profile.img]} alt="profile image"/>
                                <span>{profile.name}</span>
                            </ManageProfileDiv>
                        )
                    })} 
                </BrowserProfilesContentDiv>
                <ManageButton onClick={handleConcluded}>Concluido</ManageButton>
            </ManageContentDiv>
        }
        {chosenProfile && 
        <ManageChosenContainer>
            <div>
                <h1>Editar perfil</h1>
            
            <ManageChosenDiv>
                <EditProfileSVG/>
                <img src={userImage[chosenProfile.profile.img]}/>
                <div>
                    <input value={chosenProfile.profile.name}></input>
                </div>
            </ManageChosenDiv>
            <ManageChosenButtonDiv>
                <ManageButton>Salvar</ManageButton>
                <BrowserButton onClick={handleCancelButton}>Cancelar</BrowserButton>
                <BrowserButton>Excluir perfil</BrowserButton>
            </ManageChosenButtonDiv>
            </div>
            
        </ManageChosenContainer>
        }
    </BrowserContainerDiv>
    )
}