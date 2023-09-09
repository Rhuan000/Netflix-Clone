import { BrowserLoader } from "./browser-loading.style"
import { BrowserContainerDiv } from "../../routes/browser/browser.style"
export function BrowserLoading({userImage}){
    console.log(userImage)
    return(
        <BrowserContainerDiv>
            <BrowserLoader>
                <div style={{height: "100px", borderRadius: "5px",width: "100px", zIndex: 1, position: "absolute", left: "22%", top: "22%",backgroundColor: "red", backgroundImage: `url(${userImage})`, backgroundSize: "cover"}}></div>
            </BrowserLoader>
        </BrowserContainerDiv>
    )
}