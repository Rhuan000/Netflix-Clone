import { styled } from "styled-components";
import {FiChevronRight, FiChevronLeft} from "react-icons/fi"
import { SelectOptionGeneralPerfilDiv, SelectOptionDiv } from "../browser-select-option/browser-select-option.style";



export const EditProfileImageCarousel = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    
    position: relative;
    display: flex;
    align-self: center;
    max-width: 1800px;
    overflow: visible;
`
export const EditProfileGeneralPerfilDiv = styled(SelectOptionGeneralPerfilDiv)`
    margin-right: 0.57rem;
    margin-left: 0.57rem;
    z-index: 0;
`
export const EditProfileDiv = styled(SelectOptionDiv)`
    width: 230px;
    height: 140px;
    border-radius: 5px;
    background-image: url(${props => props.image});
    background-size: cover;
    transition:  0.2s  ease-out;

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
