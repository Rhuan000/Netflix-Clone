import { styled } from "styled-components"




export const ContentDivStyled = styled.div`
    display: flex;
    box-sizing: border-box;
   
    
    min-height: 23.8rem;
    justify-content: center;
    align-items: center;
    
    
    @media (max-width: 966px) {
                flex-direction: column;
                
        }

    div {
        display: flex;
        position: relative;
        flex-wrap: wrap;
        flex-direction: column;
        text-align: left;
        align-self: center;
        justify-content: center;
        align-content: center;
        color: white;
        width: 50%;
        height: 100%;

        @media (max-width: 966px) {
            width: 100%;
            text-align: center;
            margin-bottom: 2rem;
        }

        h2{
            font-size: 3rem;
            font-weight: 800;
            @media (max-width: 966px) {
               
                font-size: 32px;
        }
        
        }
        p {
            font-size: 1.5rem;
            margin-top: 1rem;
            @media (max-width: 966px) {
               font-size: 18px;
       }
        }
        div {
            max-width: 71%;
        }
        
    }
`

export const Image = styled.img`
    width: 90%;
    height: 20%;
    z-index: 1;

`
export const GifTV = styled.video`
    position: absolute;
    top: 20.5%;
    left: 16.7%;
    height: 55%;

    
`
export const GifDesktop = styled.video`
    position: absolute;
    top: 11%;
    left: 23%;


    height: 46%;
`