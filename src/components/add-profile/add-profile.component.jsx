import { UserContext } from "../../contexts/user.context"
import { useContext, useState } from "react"
import { updateDocument } from "../../utils/firebase/firestore.utils"
import { ManageChosenContainer, ManageChosenDiv, EditProfileSVG, ManageChosenButtonDiv, ManageButton } from "../../routes/manageProfiles/manageProfiles.style"
import { BrowserButton } from "../../routes/browser/browser.style"

export function AddProfile(props){
    const {userData, currentUser, usersImages, setUserData} = useContext(UserContext)
    
    const [nameValue, setNameValue] = useState("")
    
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
        updateDocument(currentUser.uid, userData)
        props.addPerfilOpen()
    }

    function handleManageNameChange(event){
        setNameValue(event.target.value)
    }

    function handleAddProfileCancelButton(){
        props.addPerfilOpen()
    }

    return(
        usersImages && (
            <ManageChosenContainer>
            <div>   
                <h1>Adicionar Perfil</h1>
                <p>Adicione um perfil Netflix para uma outra pessoa.</p>
            <ManageChosenDiv>
            
                <EditProfileSVG/>
                <img src={usersImages[0]}/>
                <div>
                    <input onChange={handleManageNameChange} placeholder="Nome" value={nameValue}></input>
                </div>
            </ManageChosenDiv>
            <ManageChosenButtonDiv>
                <ManageButton onClick={handleAddProfileContinueClick}>Continuar</ManageButton>
                <BrowserButton onClick={handleAddProfileCancelButton}>Cancelar</BrowserButton>
            </ManageChosenButtonDiv>

            </div>
        
        </ManageChosenContainer>)
        
    )

}