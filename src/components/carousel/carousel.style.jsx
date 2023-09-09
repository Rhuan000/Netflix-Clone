import { styled } from "styled-components";
import {FiArrowLeft} from "react-icons/fi"
import {FiChevronRight, FiChevronLeft} from "react-icons/fi"
import { SelectOptionGeneralPerfilDiv, SelectOptionDiv } from "../browser-select-option/browser-select-option.style";

export const EditProfileChosenContainer = styled.div`
    background: linear-gradient(to bottom, #050505 0%, #141414 12%);
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1300px;
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
    top: 3.2rem;
    
`

export const EditProfileImageCarousel = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    
    position: relative;
    display: flex;
    
    max-width: 1200px;
    overflow: hidden;
    margin-right: 2.3rem;
    

`
export const EditProfileGeneralPerfilDiv = styled(SelectOptionGeneralPerfilDiv)`
    margin-right: 0.57rem;
    margin-left: 0.57rem;
`
export const EditProfileDiv = styled(SelectOptionDiv)`
    img {
        height: 135px;
        width: 135px;
    }
    &::after{
        content: '';
        position: absolute; /* Position the pseudo-element within the container */
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 97%;
        border: 2px solid transparent;
        border-radius: 4px;
    }

    ${EditProfileGeneralPerfilDiv}:hover &::after{
         border-color: white;
            
    }
`
export const EditProfileLeftButtonCarousel = styled.button`
    height: 140px;
    width: 4.2rem;
    border: 0px;
    color: white;
    background: linear-gradient(to right, #141414 0%, #141414 40%, rgb(0,0,0, 0.3));
    position: absolute;
    display: flex;
    align-items: center;
    top: 35px;
    z-index: 1;
    left: -0.2%;
    border-radius: 4px;


`
export const EditProfileRightButtonCarousel = styled(EditProfileLeftButtonCarousel)`
    left: 95.2%;
    
    background: linear-gradient(to left, #141414 40%, rgb(0,0,0, 0.3));
   
`

export const EditProfileChevronLeft = styled(FiChevronLeft)`
    font-weight: 700;
    font-size: 3rem;
    margin-left: 0.5rem;
    display: none;
    transition: 0.3s;

    ${EditProfileLeftButtonCarousel}:hover & {
        transform: scale(1.4);
    }

    ${EditProfileImageCarousel}:hover & {
        display: inline-block;
    }
    
`

export const EditProfileChevronRight = styled(FiChevronRight)`
    font-weight: 700;
    font-size: 3rem;
    margin-right: 0.5rem;
    transition: 0.3s;
    display: none; 
    ${EditProfileRightButtonCarousel}:hover & {
        transform: scale(1.4);
    }
    ${EditProfileImageCarousel}:hover & {
        display: inline-block;
    }
`
