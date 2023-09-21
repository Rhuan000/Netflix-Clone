import { useState, useEffect, useRef } from "react"
import { EditProfileImageCarousel, EditProfileLeftButtonCarousel, EditProfileRightButtonCarousel, EditProfileChevronLeft, EditProfileChevronRight, EditProfileGeneralPerfilDiv, EditProfileDiv } from "./browser-carousel.style"

//EXPECT A array of images as props. 
export function BrowserCarousel(props){
    const {images} = props
    const [finalIndexRightButton, setFinalIndexRightButton] = useState(0)
    const [finalIndexLeftButton, setFinalIndexLeftButton] = useState(0)
    const [zIndex, setZindex] = useState(null);
    const [previousIndex, setPreviousIndex] = useState(null)
    const itemReference = useRef(false)

    useEffect(()=>{
        console.log(zIndex)
        if(zIndex){
            setTimeout(()=>{
                itemReference.current.children[zIndex].style.zIndex = 1
                console.log(itemReference.current.children[zIndex])
                itemReference.current.children[zIndex].style.transform = "scale(1.3)"
            })
            
            setPreviousIndex(zIndex)
        } else if(previousIndex && !zIndex){
            itemReference.current.children[previousIndex].style.zIndex = 0
            itemReference.current.children[previousIndex].style.transform = "scale(1)"
        }   
    }, [zIndex])

    function carouselRightClick(){
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
            if (childrenPosition <= -235){
                
               
                
                highestP = highestP  + 235
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
                
               
                
                lowestP = lowestP  - 235
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
    function handleHover(event){
        setZindex(event.target.getAttribute("data-index"))
        console.log(event.target)
    }
    function handleMouseOut(){
        setZindex(null)
    }
    return(
        <EditProfileImageCarousel>
                <EditProfileLeftButtonCarousel onClick={carouselLeftClick}>
                    <EditProfileChevronLeft/>
                </EditProfileLeftButtonCarousel>
                <ul style={{display: "flex", position: "relative", width: "90vw", height: "180px"}} ref={itemReference}>
                {images.map((image, i) => {
                    return (
                        <li style={{listStyleType: "none",  left: `${(i * 235)}px`, position: "absolute", transition:"2s"}} key={i} >        
                       <EditProfileGeneralPerfilDiv  >
                            <EditProfileDiv image={image} data-index={i} onMouseOver={handleHover} onMouseLeave={handleMouseOut}/>
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