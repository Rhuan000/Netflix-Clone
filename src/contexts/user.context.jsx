import { createContext, useEffect, useState} from "react";
import { onAuthStateChangedListener, signOutUser } from "../utils/firebase/firestore.utils";
import { getUserData, getUserImage } from "../utils/firebase/firestore.utils";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
    
    setUserData: () => null,
    userData: null,

    setUsersImages: () => null,
    usersImages: null
})

export const UserProvider = ({children}) => {
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState(null)
    const [userData, setUserData] = useState(null)
    const [usersImages, setUsersImages] = useState(null)

    const value = {currentUser, setCurrentUser, userData, setUserData, usersImages, setUsersImages}

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChangedListener((user) => {
    //         if (user) {
    //           setCurrentUser(user);
    //         }
    //       });
      
    //       return unsubscribe;
    // },[])

    useEffect(()=>{
        const user = currentUser
        if(user){
            async function userData() {
                const userDataResponse = await getUserData(user.uid)
                const usersImagesResponse = await getUserImage()
                console.log(usersImagesResponse)
                setUsersImages(usersImagesResponse.profiles)
                setUserData(userDataResponse)
                console.log(userDataResponse)
            }
            userData()
        } 

    }, [currentUser])

    return <UserContext.Provider value={value} children={children}/>
}