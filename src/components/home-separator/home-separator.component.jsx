import { ContainerDivStyled } from "./home-separator.style";

export function HomeSeparator(props){
    const {children} = props
    return (
        <ContainerDivStyled {...props}>{children}</ContainerDivStyled>
    )
}