import { styled } from "styled-components"
import backgroundImage from "../../imgs/large-backgroudImage-root.png"
import { Button } from "../../components/button/button.component"
import { ReactComponent as LogoSVG } from "../../logo.svg"
import backgroundImageMedium from "../../imgs/medium-backgroundImage-root.png"




export const HomeBackground = styled.div`
    position: relative;
    
    color: white;
    min-height: 700px;
    width: 100%;
    min-width: 384px;
    background-image: url(${backgroundImage});
    
     /*I Had a lot of headache trying to make my background-image don't lose the center when the screen is smalling(This is simple, but not so simple when we need zoom the image and position whetever we want). 
     The solution to Zoom that i foun was change the unit for 125em to be relative at the element size, i couldn't change the X axis without lose the center. but i could change the Y, and i did.*/
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y:  -210px;
    background-size: 120%;
    padding-bottom: 4rem;

`;

     
export const HomeBackgroundShadow = styled.div `
    position: absolute;
    min-height: 100%;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 0, 0, 0.52);
    text-align: center;

    h1 {
        margin-top: 4rem;
        font-weight: 900;
        font-size: 3rem;
        @media (max-width: 966px) {
            font-size: 32px;
        }
    }
    h2 {
        font-size: 1.58rem;
        margin-top: 1.5rem;
        font-weight: 400;
        @media (max-width: 966px) {
            font-size: 18px;
        }
    }
`



