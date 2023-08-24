import { createContext, useEffect, useState} from "react";
import { onAuthStateChangedListener, signOutUser } from "../utils/firebase/firestore.utils";


export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null
})

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    
    const value = {currentUser, setCurrentUser}

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChangedListener((user) => {
    //         if (user) {
    //           setCurrentUser(user);
    //         }
    //       });
      
    //       return unsubscribe;
    // },[])

    return <UserContext.Provider value={value} children={children}/>
}
