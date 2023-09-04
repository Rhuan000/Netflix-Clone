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
    const [lowestPosition, setLowestPosition] = useState(0)
    const [highestPosition, setHighestPosition] = useState(0)
    const itemReference = useRef(false)
    const [ref, setRef] = useState(null)

     useEffect(() => {
         // Check and update element positions at a regular interval
  
         if(ref){
            const interval = setInterval(() => {
               let acumulator = 0
               
               for (let i = 0; i < ref.children.length; i++) {
                const childrenPosition = parseFloat(ref.children[i].style.left);
                
                if (childrenPosition <= -291) {
                    let higestP = highestPosition
                    acumulator += 145
                    higestP = highestPosition + acumulator 
                    ref.children[i].style.display = "none";
                    ref.children[i].style.left = `${higestP}px`;
                    //highestP -= 145
                    
                    console.log(ref.children[0].style.left, "0", ref.children[1].style.left, "one", ref.children[2].style.left, "two", higestP, "highestPosition")
                    setHighestPosition(higestP)
                } else if(childrenPosition >= 2450){
                    let lowestP = lowestPosition
                    
                    for (let i = 0; i < ref.children.length; i++) {
                        const childrenPosition = parseFloat(ref.children[i].style.left)    
                        acumulator -= 145
                        lowestP = lowestPosition + acumulator 
                        ref.children[i].style.display = "none";
                        ref.children[i].style.left = `${lowestP}px`;
                        //highestP -= 145
                        
                        console.log(ref.children[0].style.left, "0", ref.children[1].style.left, "one", ref.children[2].style.left, "two", lowestP, "highestPosition")
                        setLowestPosition(lowestP)
                         }
                    }     
                }  
            }, 1); // Interval in millisecond
            // Clean up interval on component unmount
            return () => clearInterval(interval);
         }
       }, [ref]);

       
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
        setLowestPosition(0)
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
        setRef(newRef) 
        let highestP = highestPosition
        for (let i = 0; i < newRef.children.length; i++) {
            newRef.children[i].style.display = "inline-block";
            const currentPosition2 = parseInt(newRef.children[i].style.left);
            const newPosition = currentPosition2 - 290;
            
            
            
            newRef.children[i].style.left = `${newPosition}px`;
        
            if (newPosition > highestP) {
                setHighestPosition(newPosition - 290)
                highestP = newPosition
            }
        }
    }
    function carouselLeftClick(event){
        var newRef = null
        for (const child of event.currentTarget.parentNode.children) {
            if (child.tagName === 'UL') {
                newRef = child;
                break; // Exit the loop once the <ul> element is found
            }
        }

        setRef(newRef)
        
        let lowestP = lowestPosition
        for (let i = 0; i < newRef.children.length; i++) {
            newRef.children[i].style.display = "inline-block";
            const currentPosition2 = parseInt(newRef.children[i].style.left);
            const newPosition = currentPosition2 + 290;
            
            
            
            newRef.children[i].style.left = `${newPosition}px`;
        
            if (newPosition < lowestP) {
                setLowestPosition(newPosition + 290)
                lowestP = newPosition
            }
        }
        
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
                <ul style={{display: "flex", position: "relative", width: "2000px", height: "180px"}} ref={itemReference}>
                {usersImages.map((userImage, i) => {
                    return (
                        <li style={{listStyleType: "none",  left: `${i * 145}px`, position: "absolute", transition:"1s"}} key={i} >        
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