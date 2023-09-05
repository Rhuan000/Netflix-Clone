import { BrowserButton, BrowserGeneralPerfilDiv, BrowserProfileDiv } from "../../routes/browser/browser.style"
import { useContext, useState, useRef, useEffect } from "react"
import { UserContext } from "../../contexts/user.context"
import { updateDocument } from "../../utils/firebase/firestore.utils"
import { ManageChosenButtonDiv, ManageChosenContainer, ManageChosenDiv, EditProfileSVG, ManageButton} from "../../routes/manageProfiles/manageProfiles.style"
import { EditProfileArrowLeft, EditProfileHeaderContent, EditProfileHeader, EditProfileImageCarousel, EditProfileChosenContainer, EditProfileLeftButtonCarousel, EditProfileRightButtonCarousel, EditProfileChevronLeft, EditProfileChevronRight, EditProfileGeneralPerfilDiv, EditProfileDiv } from "./manage-edit-profile.style"



export function ManageEditProfile(props){
    const {setChosenProfile, chosenProfile} = props 
    const [nameValue, setNameValue] = useState(chosenProfile.profile.name)
    const {setUserData, userData, currentUser, usersImages} = useContext(UserContext)
    const [changeImageOpen, setChangeImageOpen] = useState(false)
    const [finalIndexRightButton, setFinalIndexRightButton] = useState(0)
    const [finalIndexLeftButton, setFinalIndexLeftButton] = useState(0)
    const itemReference = useRef(false)
    const [ref, setRef] = useState(null)


       
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

    async function changeProfileImage(event){
        const index = event.currentTarget.getAttribute("data-index")
        const newProfiles = userData.profiles.map(item => {
            if(item === chosenProfile){
                 item.profile.img = index
            } 
            return item
            
        })
        
        
       
        await updateDocument(currentUser.uid, userData) 
        setNameValue(null)
        setChosenProfile(null)
        setUserData({...userData, profiles: newProfiles})
    }
     function carouselRightClick(event){
        var newRef = null
        
        for (const child of event.currentTarget.parentNode.children) {
            if (child.tagName === 'UL') {
                newRef = child;
                
                break; // Exit the loop once the <ul> element is found
            }
        }
        
        let highestP = 0
        let childrenPosition = 0
        let acumulator = 0
        for (let i = 0; i < newRef.children.length; i++) {
            childrenPosition = parseFloat(newRef.children[i].style.left);
            newRef.children[i].style.transition = "0s";
            if (childrenPosition > highestP) {
                highestP = childrenPosition
            }
        }
        
        
        acumulator = finalIndexRightButton - 1
        for (let i = 0; i < newRef.children.length; i++) {
            if(acumulator < newRef.children.length - 1){
                acumulator += 1
            } else {
                acumulator = 0
            }
            
            console.log(acumulator)
            childrenPosition = parseFloat(newRef.children[acumulator].style.left);
            if (childrenPosition <= -145){
                
               
                
                highestP = highestP  + 145
                //newRef.children[i].style.display = "none";
                newRef.children[acumulator].style.left = `${highestP}px`;
                setFinalIndexRightButton(acumulator)
                
                //highestP -= 145
            } 
            
        }
       
        setTimeout(() => {

            for(let i = 0; i < newRef.children.length; i++){
                    //newRef.children[i].style.display = "inline-block";
                    newRef.children[i].style.transition = "0.5s";
                    childrenPosition = parseFloat(newRef.children[i].style.left);
                    const newPosition = childrenPosition -  1015;
                    newRef.children[i].style.left = `${newPosition}px`;
            }
        }, 10)
        
        
        
    }

    function carouselLeftClick(event){
        var newRef = null
        //Getting the child ref. 
        for (const child of event.currentTarget.parentNode.children) {
            if (child.tagName === 'UL') {
                newRef = child;
                
                break; // Exit the loop once the <ul> element is found
            }
        }
        
        let lowestP = 0
        let childrenPosition = 0
        let acumulator = 0
        for (let i = 0; i < newRef.children.length; i++) {
            childrenPosition = parseFloat(newRef.children[i].style.left);
            newRef.children[i].style.transition = "0s";
            if (childrenPosition < lowestP) {
                lowestP = childrenPosition
            }
        }
        
        
        acumulator = finalIndexLeftButton
        for (let i = 0; i < newRef.children.length; i++) {
            if(acumulator > 0){
                acumulator -= 1
            } else {
                acumulator = newRef.children.length - 1
            }
            console.log(acumulator)
            
            console.log(acumulator)
            childrenPosition = parseFloat(newRef.children[acumulator].style.left);
            if (childrenPosition >= 1305){
                
               
                
                lowestP = lowestP  - 145
                //newRef.children[i].style.display = "none";
                newRef.children[acumulator].style.left = `${lowestP}px`;
                setFinalIndexLeftButton(acumulator)
                
                //highestP -= 145
            } 
            
        }
       
        setTimeout(() => {

            for(let i = 0; i < newRef.children.length; i++){
                    newRef.children[i].style.transition = "0.5s";
                    childrenPosition = parseFloat(newRef.children[i].style.left);
                    const newPosition = childrenPosition +  1015;
                    newRef.children[i].style.left = `${newPosition}px`;
            }
        }, 10)
           
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
            <EditProfileImageCarousel>
                <EditProfileLeftButtonCarousel onClick={carouselLeftClick}>
                    <EditProfileChevronLeft/>
                </EditProfileLeftButtonCarousel>
                <ul style={{display: "flex", position: "relative", width: "90vw", height: "180px"}} ref={itemReference}>
                {usersImages.map((userImage, i) => {
                    return (
                        <li style={{listStyleType: "none",  left: `${(i * 145) - 60}px`, position: "absolute", transition:"2s"}} key={i} >        
                       <EditProfileGeneralPerfilDiv  data-index={i} onClick={changeProfileImage}>
                            <EditProfileDiv>
                                <img src={userImage} alt="profile image"/>
                            </EditProfileDiv>

                        </EditProfileGeneralPerfilDiv>
                        </li>
                    )
                })}
                </ul>
                <EditProfileRightButtonCarousel onClick={carouselRightClick}>
                    <EditProfileChevronRight/>
                </EditProfileRightButtonCarousel>
            </EditProfileImageCarousel>
        </EditProfileChosenContainer>
    }
    </>
    )
}
