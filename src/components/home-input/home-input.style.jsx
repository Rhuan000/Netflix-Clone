import { styled } from "styled-components";

export const Input = styled.input`
    border: solid 2px #605F5F;
    border-radius: 7px;
    height: 2.75rem;
    width: 25.5rem;
    min-width: 200px;

    padding-top: 0.5rem;
    background-color: rgb(23,21,19, 0.8);
    text-indent: 0.5rem;
    @media (max-width: 966px){
       margin-bottom: 0.8rem;
       
       width: 100%;
    }

    &::placeholder {
            font-size: 16px; /* Adjust the font size */
            line-height: 24px; /* Adjust the line height */
            color: #B8B9B9;
        }

`