import { styled } from "styled-components";
import {FiArrowLeft} from "react-icons/fi"
import {FiChevronRight, FiChevronLeft} from "react-icons/fi"

export const EditProfileChosenContainer = styled.div`
    background: linear-gradient(to bottom, #050505 0%, #141414 12%);
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`
export const EditProfileHeader = styled.div`
    display: flex;
    min-width: 87%;
    
    align-items: center;
    div{
        max-width: 100%;
    }
    img {
        height: 95.59px;
        width: 95.59px;
        border-radius: 5px;
    }
    span {
        margin-right: 1.5rem;
        font-size: 2vw;
        
    }
`
export const EditProfileHeaderContent = styled.div`
    max-width: 80%;
    flex-grow: 1;
    h1 {
        font-size: 2.5vw;
    }
    h2 {
        font-size: 2vw;
        font-weight: 500;
    }


`
export const EditProfileArrowLeft = styled(FiArrowLeft)`
    position: absolute;
    color: white;
    font-weight: 700;
    cursor: pointer;
    font-size: 2.5rem;
    top: -1rem;
    
`

export const EditProfileImageCarousel = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    position: relative;
    display: flex;
    max-width: 90%;
    overflow: hidden;
`
export const EditProfileLeftButtonCarousel = styled.div`
    height: 74%;
    width: 3rem;
    background-color: rgb(0,0,0,0.4);
    position: absolute;
    display: flex;
    align-items: center;
    top: 18.7%;
    z-index: 1;
    left: 0.5%;
`
export const EditProfileRightButtonCarousel = styled(EditProfileLeftButtonCarousel)`
    left: 96.2%;
`

export const EditProfileChevronLeft = styled(FiChevronLeft)`
    font-weight: 700;
    font-size: 3rem;
`

export const EditProfileChevronRight = styled(FiChevronRight)`
    font-weight: 700;
    font-size: 3rem;
`