import { styled } from "styled-components"




export const ContentDivStyled = styled.div`
    display: flex;
    box-sizing: border-box;
    width: 64.3rem;
    height: 23.85rem;
    margin-right: 1rem;
    justify-content: center;
    align-items: center;

    div {
        position: relative;
        display:flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        width: 50%;
        height: 100%;
        flex-grow: 1;

        h2{
            font-size: 3rem;
            font-weight: 800;
        }
        p {
            font-size: 1.5rem;
            margin-top: 1rem;
        }
    }
`

export const Image = styled.img`
    width: 90%;
    height: 22rem;
    z-index: 1;
`
export const GifTV = styled.video`
    position: absolute;
    top: 22%;
    left: 3.8rem;

    height: 52%;
`
export const GifDesktop = styled.video`
    position: absolute;
    top: 13%;
    left: 4.7rem;

    height: 45%;
`