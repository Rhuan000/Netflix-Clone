import { BrowserButton, BrowserGeneralPerfilDiv, BrowserPerfilDiv } from "../../routes/browser/browser.styled"
import { useContext, useState } from "react"
import { UserContext } from "../../contexts/user.context"
import { updateDocument } from "../../utils/firebase/firestore.utils"
import { ManageChosenButtonDiv, ManageChosenContainer, ManageChosenDiv, EditProfileSVG, ManageButton} from "../../routes/manageProfiles/manageProfiles.style"
import { EditProfileArrowLeft, EditProfileHeaderContent, EditProfileHeader, EditProfileImageCarousel, EditProfileChosenContainer, EditProfileLeftButtonCarousel, EditProfileRightButtonCarousel, EditProfileChevronLeft, EditProfileChevronRight } from "./manage-edit-profile.style"

export function ManageEditProfile(props){
    const {setChosenProfile, chosenProfile} = props 
    const [nameValue, setNameValue] = useState(chosenProfile.profile.name)
    const {setUserData, userData, currentUser, usersImages} = useContext(UserContext)
    const [changeImageOpen, setChangeImageOpen] = useState(false)

    function handleManageNameChange(event){
        setNameValue(event.target.value)
    }

    function handleManageCancelButton(){
        setChosenProfile(null)
    }

    async function handleManageSaveButton(){
        console.log(userData.profiles)
        const newProfiles = userData.profiles.map(item => {
            if(item === chosenProfile){
                 item.profile.name = nameValue
            } 
            return item
            
        })
        console.log({...userData, profiles: newProfiles})
        setUserData({...userData, profiles: newProfiles})
       
        await updateDocument(currentUser.uid, userData) 
        setNameValue(null)
        setChosenProfile(null)
    }

    async function handleManageDeleteButton(){
        const newProfiles = userData.profiles.filter(item =>  item != chosenProfile)
        setUserData({...userData, profiles: newProfiles})
        await updateDocument(currentUser.uid, userData)
        setNameValue(null)
        setChosenProfile(null)
       
    }

    function openChangeImage(){
        setChangeImageOpen(!changeImageOpen)
    }

    async function changeProfileImage(event){
        const index = event.currentTarget.getAttribute("data-index")
        const newProfiles = userData.profiles.map(item => {
            if(item === chosenProfile){
                 item.profile.img = index
            } 
            return item
            
        })
        console.log({...userData, profiles: newProfiles})
        
       
        await updateDocument(currentUser.uid, userData) 
        setNameValue(null)
        setChosenProfile(null)
        setUserData({...userData, profiles: newProfiles})
    }

    return (
        <>
        <ManageChosenContainer>
        <div>
       
            <h1>Editar perfil</h1>
        
        <ManageChosenDiv>
        
            <EditProfileSVG onClick={openChangeImage}/>
            <img src={usersImages[chosenProfile.profile.img]}/>
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
    
    {changeImageOpen &&  <EditProfileChosenContainer>
            <EditProfileHeader>
                <div style={{width:"6rem", position:"relative"}}>

                    <EditProfileArrowLeft onClick={openChangeImage}/>
                </div>
                <EditProfileHeaderContent>
                    <h1>Editar Perfil</h1>
                    <h2>Escolha o seu ícone de perfil.</h2>
                </EditProfileHeaderContent>
                <span>{chosenProfile.profile.name}</span>
                <img src={usersImages[chosenProfile.profile.img]}/>
            </EditProfileHeader>
            <EditProfileImageCarousel>
                <EditProfileLeftButtonCarousel>
                    <EditProfileChevronLeft/>
                </EditProfileLeftButtonCarousel>
                {usersImages.map((userImage, i) => {
                    return (
                       <BrowserGeneralPerfilDiv key={i} data-index={i} onClick={changeProfileImage}>
                            <BrowserPerfilDiv>
                                <img src={userImage} alt="profile image"/>
                            </BrowserPerfilDiv>

                        </BrowserGeneralPerfilDiv>
                    
                    )
                })}
                <EditProfileRightButtonCarousel>
                    <EditProfileChevronRight/>
                </EditProfileRightButtonCarousel>
            </EditProfileImageCarousel>
        </EditProfileChosenContainer>
    }
    </>
    )
}