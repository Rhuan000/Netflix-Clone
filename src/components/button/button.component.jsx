import { ButtonS } from "./button.style.jsx"

export function Button(props){
    const {children} = props 
    return (
        <ButtonS {...props}><span>{children}</span></ButtonS>
    )
}