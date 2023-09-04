import { BrowserButton, BrowserContainerDiv, BrowserProfilesContentDiv, BrowserGeneralPerfilDiv, BrowserAddPerfilDiv, BrowserAddIcon } from "../browser/browser.style"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../contexts/user.context"
import { useNavigate } from "react-router-dom"
import { getUserData, getUserImage, updateDocument } from "../../utils/firebase/firestore.utils"
import { EditProfileSVG, ManageButton, ManageChosenContainer, ManageContentDiv, ManageProfileDiv, ManageChosenDiv, ManageChosenButtonDiv, ManageGeneralPerfilDiv } from "./manageProfiles.style"
import { AddProfile } from "../../components/add-profile/add-profile.component"
import { ManageEditProfile } from "../../components/manage-edit-profile/manage-edit-profile.component"

export function ManageProfiles(){
    
    const [chosenProfile, setChosenProfile] = useState(null)
    const [nameValue, setNameValue] = useState("")
    const [addPerfilOpen, setAddPerfilOpen] =  useState(false)
    const {userData, setUserData, setUsersImages, currentUser, usersImages} = useContext(UserContext)
    const navigate = useNavigate()
    
    useEffect(()=>{
        const user = currentUser
        if(user){
            async function userData() {
                const userDataResponse = await getUserData(user.uid)
                const userImageResponse = await getUserImage()
                setUsersImages(userImageResponse.profiles)
                setUserData(userDataResponse)
            }
            userData()
        } else {
            navigate("/login")
        }
    }, [])
    


    function handleConcluded(){
        navigate("/browser")

    }
    
    function handleAddProfileClick(){
        setAddPerfilOpen(!addPerfilOpen)
    }
    
    function handleProfileClick(event){
        const index = event.currentTarget.getAttribute("data-index")
        
        setChosenProfile(userData.profiles[index])
        setNameValue(userData.profiles[index].profile.name)
        //setUserIndex(index)
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
                            <ManageGeneralPerfilDiv key={i} data-index={i} onClick={handleProfileClick} style={{"zIndex": "1"}}>
                            <ManageProfileDiv>
                                <EditProfileSVG/>
                                <img src={usersImages[profile.img]} alt="profile image"/>

                            </ManageProfileDiv>
                                    <span>{profile.name}</span>
                            </ManageGeneralPerfilDiv>
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
                <ManageButton onClick={handleConcluded}>Concluido</ManageButton>
            </ManageContentDiv>
        }
        {chosenProfile && <ManageEditProfile setChosenProfile={setChosenProfile} chosenProfile={chosenProfile} />}
        {addPerfilOpen && <AddProfile  addPerfilOpen={handleAddProfileClick}/>}
        
    </BrowserContainerDiv>
    )
}