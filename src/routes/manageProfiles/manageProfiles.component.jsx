import { BrowserButton, BrowserContainerDiv, BrowserProfilesContentDiv, BrowserGeneralPerfilDiv, BrowserAddPerfilDiv, BrowserAddIcon } from "../browser/browser.styled"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../contexts/user.context"
import { useNavigate } from "react-router-dom"
import { getUserData, getUserImage, updateDocument } from "../../utils/firebase/firestore.utils"
import { EditProfileSVG, ManageButton, ManageChosenContainer, ManageContentDiv, ManageProfileDiv, ManageChosenDiv, ManageChosenButtonDiv, ManageGeneralPerfilDiv } from "./manageProfiles.style"


export function ManageProfiles(){
    const [userData, setUserData] = useState(null)
    const [userImage, setUserImage] = useState(null)
    const [chosenProfile, setChosenProfile] = useState(null)
    const [nameValue, setNameValue] = useState("")
    const [userIndex, setUserIndex] = useState(null)
    const [addPerfilOpen, setAddPerfilOpen] =  useState(false)
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
        if(chosenProfile)console.log(userData)
    }, [userData])


    function handleConcluded(){
        navigate("/browser")

    }
    function handleAddProfileClick(){
        setAddPerfilOpen(true)
    }
    function handleAddProfileCancelClick(){
        setAddPerfilOpen(false)
    }
    function handleAddProfileContinueClick(){
        const newUser = {
            profile: {
                name: nameValue,
                img: "0",
                movies: {
                    watching: []
                },
            }
        }
        userData.profiles.push(newUser)
        setUserData({...userData})
        setNameValue(null)
        updateDocument(userContext.currentUser.uid, userData)
        setAddPerfilOpen(false)
    }
    
    function handleProfileClick(event){
        const index = event.currentTarget.getAttribute("data-index")
        
        setChosenProfile(userData.profiles[index])
        setNameValue(userData.profiles[index].profile.name)
        setUserIndex(index)
    }

    function handleManageCancelButton(){
        setChosenProfile(null)
    }

    function handleManageNameChange(event){
        setNameValue(event.target.value)
    }

    function handleManageSaveButton(){
        userData.profiles[userIndex].profile.name = nameValue
        setUserData({...userData})
        setNameValue(null)
        setChosenProfile(null)
        setUserIndex(null)
        updateDocument(userContext.currentUser.uid, userData)
    }
    function handleManageDeleteButton(){
       
        userData.profiles.splice(userIndex, 1)
        setUserData({...userData})
        setNameValue(null)
        setChosenProfile(null)
        setUserIndex(null)
        updateDocument(userContext.currentUser.uid, userData)
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
                                <img src={userImage[profile.img]} alt="profile image"/>

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
        {chosenProfile && 
        <ManageChosenContainer>
            <div>
           
                <h1>Editar perfil</h1>
            
            <ManageChosenDiv>
            
                <EditProfileSVG/>
                <img src={userImage[chosenProfile.profile.img]}/>
                <div>
                    <input onChange={handleManageNameChange} value={nameValue}></input>
                </div>
            </ManageChosenDiv>
            <ManageChosenButtonDiv>
                <ManageButton onClick={handleManageSaveButton}>Salvar</ManageButton>
                <BrowserButton onClick={handleManageCancelButton}>Cancelar</BrowserButton>
                <BrowserButton onClick={handleManageDeleteButton}>Excluir perfil</BrowserButton>
            </ManageChosenButtonDiv>

            </div>
            
        </ManageChosenContainer>
        }
        {addPerfilOpen && 
            <ManageChosenContainer>
            <div>
           
                <h1>Adicionar Perfil</h1>
                <p>Adicione um perfil Netflix para uma outra pessoa.</p>
            <ManageChosenDiv>
            
                <EditProfileSVG/>
                <img src={userImage[0]}/>
                <div>
                    <input onChange={handleManageNameChange} placeholder="Nome" value={nameValue}></input>
                </div>
            </ManageChosenDiv>
            <ManageChosenButtonDiv>
                <ManageButton onClick={handleAddProfileContinueClick}>Continuar</ManageButton>
                <BrowserButton onClick={handleAddProfileCancelClick}>Cancelar</BrowserButton>

            </ManageChosenButtonDiv>

            </div>
            
        </ManageChosenContainer>
        }
    </BrowserContainerDiv>
    )
}