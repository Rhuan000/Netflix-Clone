import { useEffect, useState, useContext } from "react"
import { UserContext } from "../../contexts/user.context"
import { useNavigate } from "react-router-dom"
import { getUserData, getUserImage } from "../../utils/firebase/firestore.utils"
import { BrowserAddIcon, BrowserAddPerfilDiv, BrowserButton, BrowserContainerDiv, BrowserContentDiv,  BrowserGeneralPerfilDiv,  BrowserPerfilDiv, BrowserProfilesContentDiv } from "./browser.styled"
import { AddProfile } from "../../components/add-profile/add-profile.component"

export function Browser(){
    const [addPerfilOpen, setAddPerfilOpen] = useState(null)
    const {userData, setUserData, usersImages, setUsersImages, currentUser, setCurrentUser} = useContext(UserContext)
    const navigate = useNavigate()
    
    useEffect(()=>{
        const user = currentUser
        if(user){
            async function userData() {
                const userDataResponse = await getUserData(user.uid)
                const userImageResponse = await getUserImage()
                console.log(userImageResponse)
                setUsersImages(userImageResponse.profiles)
                setUserData(userDataResponse)
            }
            userData()
        } else {
            navigate("/login")
        }

    }, [])


    function handleManageButton(){
        navigate('/manageProfiles')
    }

    function handleAddProfileClick(){
        setAddPerfilOpen(!addPerfilOpen)
    }
    
    return(
        <BrowserContainerDiv>
            {userData && 
            <BrowserContentDiv>
                <h1>Quem está assistindo?</h1>
                <BrowserProfilesContentDiv>
                    {userData.profiles.map(({profile}) => {
                        console.log(profile.img)
                        return (
                           <BrowserGeneralPerfilDiv>
                            <BrowserPerfilDiv>
                                <img src={usersImages[profile.img]} alt="profile image"/>
                 
                            </BrowserPerfilDiv>
                                <span>{profile.name}</span>
                            </BrowserGeneralPerfilDiv>
                           
                        )
                    })}
                    {userData.profiles.length < 5 &&
                        <BrowserGeneralPerfilDiv onClick={handleAddProfileClick}>
                            <BrowserAddPerfilDiv >
                               <BrowserAddIcon/>
                            </BrowserAddPerfilDiv>
                                <span>Adicionar perfil</span>
                        </BrowserGeneralPerfilDiv>
                       
                    }
                </BrowserProfilesContentDiv>    
                <BrowserButton onClick={handleManageButton}>Gerenciar perfis</BrowserButton>
            </BrowserContentDiv>
            }
            {addPerfilOpen && 
                <AddProfile  addPerfilOpen={handleAddProfileClick}/>
            }
        </BrowserContainerDiv>
    )
}