import { AskButtonStyled, AddSVGStyled, AnswerDivStyled } from "./ask-button.style"
import { useEffect, useState } from "react"

export function AskButton(props){
    const [isOpen, setIsOpen] = useState(null)
    const [animation, setAnimation] = useState()
    const {children} = props

    useEffect(()=>{
        if(props.isOpen[props.id] === true){
            setAnimation('expand')
            setIsOpen(true)           
        }else if(props.isOpen[props.id] === false){
            setAnimation('retrain')
            setIsOpen(false)
        }
        console.log(isOpen)
    }, [isOpen, props.isOpen])

    function buttonClicked(){
        const state= props.isOpen
        if(state){
            Object.keys(state).forEach(key => {
                if (state[key]  === true && key !== props.id){
                    state[key] = false
                } else if(key === props.id && state[key] === true){
                    state[key] = false
                    setIsOpen(false)
                } else if(key === props.id && (state[key] === false || state[key] === null)){
                    state[key] = true
                    setIsOpen(true)
                }
            
            })
            props.setNewOpen({...state})
        } else{
            if(isOpen === false || isOpen === null){
                setIsOpen(true)
            } else if(isOpen) {
                setIsOpen(false)
            }
        }
    }
    

    return(
        <>
            
            <AskButtonStyled onClick={buttonClicked}>
                <span>{props.title}</span>
                <AddSVGStyled deg={isOpen ? -45 : 0}/>
            </AskButtonStyled>
            <AnswerDivStyled animation={animation}>
                {children}
            </AnswerDivStyled>
            
        </>
    )
}