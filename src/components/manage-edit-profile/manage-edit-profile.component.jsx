import { BrowserButton } from "../../routes/browser/browser.style"
import { useContext, useState, useRef } from "react"
import { UserContext } from "../../contexts/user.context"
import { updateDocument } from "../../utils/firebase/firestore.utils"
import { ManageChosenButtonDiv, ManageChosenContainer, ManageChosenDiv, EditProfileSVG, ManageButton} from "../../routes/manageProfiles/manageProfiles.style"
import { EditProfileArrowLeft, EditProfileHeaderContent, EditProfileHeader, EditProfileImageCarousel, EditProfileChosenContainer, EditProfileLeftButtonCarousel, EditProfileRightButtonCarousel, EditProfileChevronLeft, EditProfileChevronRight, EditProfileGeneralPerfilDiv, EditProfileDiv } from "./manage-edit-profile.style"
import { Carousel } from "../carousel/carousel.component"


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
        const newProfiles = userData.profiles.map(item => {
            if(item === chosenProfile){
                 item.profile.name = nameValue
            } 
            return item
            
        })
        
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

    async function changeProfileImage(selectedItem){
        const newProfiles = userData.profiles.map(item => {
            if(item === chosenProfile){
                 item.profile.img = selectedItem
            } 
            return item
            
        })
    
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
                <div style={{width:"4rem", minHeight:"150px", position:"relative"}}>

                    <EditProfileArrowLeft onClick={openChangeImage}/>
                </div>
                <EditProfileHeaderContent>
                    <h1>Editar Perfil</h1>
                    <h2>Escolha o seu ícone de perfil.</h2>
                </EditProfileHeaderContent>
                <span>{chosenProfile.profile.name}</span>
                <img src={usersImages[chosenProfile.profile.img]}/>
            </EditProfileHeader>
            <Carousel images={usersImages} afterSelectedItem={changeProfileImage}/>
        </EditProfileChosenContainer>
    }
    </>
    )
}
