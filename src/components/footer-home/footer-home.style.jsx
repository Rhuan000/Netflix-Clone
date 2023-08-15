import { styled } from "styled-components";

export const HomeFooterStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    
    color: #BBBBBB;
    div {
        width: 100%;
        margin-top: 3.7rem;
        height: 2.3rem;
       
    }
    h4 {
        font-weight: 400;
        
        margin-bottom: 2rem;
    }
    p {
        margin-top: 1rem;
        font-size: smaller;
        padding-bottom: 3rem;
    }
    
`
export const NavFooterUl = styled.ul`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr));
    row-gap: 1rem;
    column-gap: 6rem;
    
    

    li{ 
        list-style: none;
        
        
        a {
            color: #D1D1D1;
            font-size: small;

            &:active {
                color: #E50914;
            }
        }
        
    }
`
