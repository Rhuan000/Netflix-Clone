import { useEffect, useState, useContext } from "react"
import { UserContext } from "../../contexts/user.context"
import { useNavigate } from "react-router-dom"
import { getUserData, getUserImage } from "../../utils/firebase/firestore.utils"
import { SelectOptionContainerDiv, SelectOptionContentDiv, SelectOptionProfileContentDiv, SelectOptionDiv, SelectOptionGeneralPerfilDiv, SelectOptionAddPerfilDiv, SelectOptionAddIcon, SelectOptionButton } from "./browser-select-option.style"
import { AddProfile } from "../add-profile/add-profile.component"

export function BrowserSelectOption({setProfile}){
    const [addProfileOpen, setAddProfileOpen] = useState(null)
    const {userData, setUserData, usersImages, setUsersImages, currentUser} = useContext(UserContext)
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


    function handleManageButton(){
        navigate('/manageProfiles')
    }

    function handleProfileClick(event){
        const index = event.currentTarget.getAttribute("data-index")
        setProfile(userData.profiles[index])
    }

    function handleAddProfileClick(){
        setAddProfileOpen(!addProfileOpen)
    }
    
    return(
        <SelectOptionContainerDiv>
            {userData && 
            <SelectOptionContentDiv>
                <h1>Quem está assistindo?</h1>
                <SelectOptionProfileContentDiv>
                    {userData.profiles.map(({profile}, i) => {
                        
                        return (
                           <SelectOptionGeneralPerfilDiv onClick={handleProfileClick} data-index={i} key={i}>
                            <SelectOptionDiv>
                                <img src={usersImages[profile.img]} alt="profile image"/>
                 
                            </SelectOptionDiv>
                                <span>{profile.name}</span>
                            </SelectOptionGeneralPerfilDiv>
                           
                        )
                    })}
                    {userData.profiles.length < 5 &&
                        <SelectOptionGeneralPerfilDiv onClick={handleAddProfileClick}>
                            <SelectOptionAddPerfilDiv >
                               <SelectOptionAddIcon/>
                            </SelectOptionAddPerfilDiv>
                                <span>Adicionar perfil</span>
                        </SelectOptionGeneralPerfilDiv>
                       
                    }
                </SelectOptionProfileContentDiv>    
                <SelectOptionButton onClick={handleManageButton}>Gerenciar perfis</SelectOptionButton>
            </SelectOptionContentDiv>
            }
            {addProfileOpen && 
                <AddProfile  addPerfilOpen={handleAddProfileClick}/>
            }
        </SelectOptionContainerDiv>
    )
}