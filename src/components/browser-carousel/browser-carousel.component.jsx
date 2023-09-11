import { useState, useEffect } from "react"
import { EditProfileImageCarousel, EditProfileLeftButtonCarousel, EditProfileRightButtonCarousel, EditProfileChevronLeft, EditProfileChevronRight, EditProfileGeneralPerfilDiv, EditProfileDiv } from "./browser-carousel.style"

//EXPECT A array of images as props. 
export function BrowserCarousel(props){
    const {images, afterSelectedItem} = props
    const [finalIndexRightButton, setFinalIndexRightButton] = useState(0)
    const [finalIndexLeftButton, setFinalIndexLeftButton] = useState(0)
    const itemReference = useRef(false)

    function carouselRightClick(event){
        const newRef = itemReference.current
        
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
                newRef.children[acumulator].style.left = `${highestP}px`;
                setFinalIndexRightButton(acumulator)
                

            } 
            
        }
       
        setTimeout(() => {

            for(let i = 0; i < newRef.children.length; i++){
                    newRef.children[i].style.transition = "0.5s";
                    childrenPosition = parseFloat(newRef.children[i].style.left);
                    const newPosition = childrenPosition -  1015;
                    newRef.children[i].style.left = `${newPosition}px`;
            }
        }, 1)
    }

    function carouselLeftClick(){
        const newRef = itemReference.current

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
                newRef.children[acumulator].style.left = `${lowestP}px`;
                setFinalIndexLeftButton(acumulator)
                
            } 
            
        }
       
        setTimeout(() => {
            for(let i = 0; i < newRef.children.length; i++){
                    newRef.children[i].style.transition = "0.5s";
                    childrenPosition = parseFloat(newRef.children[i].style.left);
                    const newPosition = childrenPosition +  1015;
                    newRef.children[i].style.left = `${newPosition}px`;
            }
        }, 1)
           
    }

    async function selectedItem(event){
        const index = event.currentTarget.getAttribute("data-index")
        afterSelectedItem(index)
    }

    return(
        <EditProfileImageCarousel>
                <EditProfileLeftButtonCarousel onClick={carouselLeftClick}>
                    <EditProfileChevronLeft/>
                </EditProfileLeftButtonCarousel>
                <ul style={{display: "flex", position: "relative", width: "90vw", height: "180px"}} ref={itemReference}>
                {images.map((image, i) => {
                    return (
                        <li style={{listStyleType: "none",  left: `${(i * 145) - 60}px`, position: "absolute", transition:"2s"}} key={i} >        
                       <EditProfileGeneralPerfilDiv  data-index={i} onClick={selectedItem}>
                            <EditProfileDiv>
                                <img src={image} alt="profile image"/>
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
    )
}