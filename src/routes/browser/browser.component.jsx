import { useEffect, useState, useContext } from "react"
import { UserContext } from "../../contexts/user.context"
import { useNavigate } from "react-router-dom"
import { getUserData, getUserImage } from "../../utils/firebase/firestore.utils"
import { BrowserButton, BrowserContainerDiv, BrowserContentDiv,  BrowserPerfilDiv, BrowserProfilesContentDiv } from "./browser.styled"
import { set } from "firebase/database"

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
                            <BrowserPerfilDiv>
                                <img src={userImage[profile.img]} alt="profile image"/>
                 
                                <span>{profile.name}</span>
                            </BrowserPerfilDiv>
                        )
                    })} 
                </BrowserProfilesContentDiv>
                <BrowserButton onClick={handleManageButton}>Gerenciar perfis</BrowserButton>
            </BrowserContentDiv>}
        </BrowserContainerDiv>
    )
}