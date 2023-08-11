import { AskButtonStyled, AddSVGStyled, AnswerDivStyled } from "./ask-button.style"
import { useEffect, useState } from "react"

export function AskButton(props){
    const [isOpen, setIsOpen] = useState(null)
    const [animation, setAnimation] = useState()
    const {children} = props

    useEffect(()=>{
        if(isOpen === true){
            setAnimation('expand')            
        }else if(isOpen === false){
            setAnimation('retrain') 
        }
        console.log(isOpen)
    }, [isOpen])

    function buttonClicked(){
        if(isOpen === false || isOpen === null){
            setIsOpen(true)
        } else if(isOpen) {
            setIsOpen(false)
        }
    }
    

    return(
        <>
            
            <AskButtonStyled onClick={buttonClicked}>
                <span>{children}</span>
                <AddSVGStyled deg={isOpen ? -45 : 0}/>
            </AskButtonStyled>
            <AnswerDivStyled animation={animation}>
            </AnswerDivStyled>
            
        </>
    )
}