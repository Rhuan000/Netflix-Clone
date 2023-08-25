import { useEffect, useState, useContext } from "react"
import { UserContext } from "../../contexts/user.context"
import { useNavigate } from "react-router-dom"
import { getUserData, getUserImage } from "../../utils/firebase/firestore.utils"
import { BrowserAddIcon, BrowserAddPerfilDiv, BrowserButton, BrowserContainerDiv, BrowserContentDiv,  BrowserGeneralPerfilDiv,  BrowserPerfilDiv, BrowserProfilesContentDiv } from "./browser.styled"


export function Browser(){
    const [userData, setUserData] = useState(null)
    const [userImage, setUserImage] = useState(null)
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
    function handleManageButton(){
        navigate('/manageProfiles')
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
                                <img src={userImage[profile.img]} alt="profile image"/>
                 
                            </BrowserPerfilDiv>
                                <span>{profile.name}</span>
                            </BrowserGeneralPerfilDiv>
                           
                        )
                    })}
                    {userData.profiles.length < 5 &&
                        <BrowserGeneralPerfilDiv>
                            <BrowserAddPerfilDiv >
                               <BrowserAddIcon/>
                            </BrowserAddPerfilDiv>
                                <span>Adicionar perfil</span>
                        </BrowserGeneralPerfilDiv>
                       
                    }
                </BrowserProfilesContentDiv>    
                <BrowserButton onClick={handleManageButton}>Gerenciar perfis</BrowserButton>
            </BrowserContentDiv>}
        </BrowserContainerDiv>
    )
}