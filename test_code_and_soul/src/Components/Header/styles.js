import styled from "styled-components";

export const ContainerHeader = styled.header`
    background-color: black;
    color: white;
    grid-column: 1/3;
    font-family: Roboto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;

        @media (max-width: 1024px){
            font-size: 20px;
        }

        @media (max-width: 768px){
            font-size: 16px;
        }

        @media (max-width: 426px){
            font-size: 14px;
        
        }
        @media (max-width: 376px){
            font-size: 14px;
        }
        @media (max-width: 321px){
            font-size: 8px;
        }
    strong{
        cursor: pointer;
        color: #00ffff;
        font-size: 40px;
        font-weight: 900;
        :hover{
            transition: .5s;
            color: #25a2a2;
        }

        @media (max-width: 1024px){
            font-size: 32px;
        }

        @media (max-width: 768px){
            font-size: 24px;
        }

        @media (max-width: 426px){
            font-size: 16px;
            margin-left: 12px;
        }
        @media (max-width: 376px){
            font-size: 14px;
            margin-left: 12px;
        }
        @media (max-width: 321px){
            font-size: 12px;
            margin-left: 12px;
        }
    }
`