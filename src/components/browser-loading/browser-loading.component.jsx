import { BrowserLoader } from "./browser-loading.style"
import { BrowserContainerDiv } from "../../routes/browser/browser.style"

export function BrowserLoading({userImage}){
    console.log(userImage)
    return(
        <BrowserContainerDiv>
            <BrowserLoader>
                <div style={{height: "70px", borderRadius: "5px",width: "70px", zIndex: 1, position: "absolute", left: "25.5%", top: "24%",backgroundColor: "red", backgroundImage: `url(${userImage})`, backgroundSize: "cover"}}></div>
            </BrowserLoader>
        </BrowserContainerDiv>
    )
}