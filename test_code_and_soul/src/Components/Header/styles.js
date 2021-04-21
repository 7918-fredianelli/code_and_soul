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
    strong{
        cursor: pointer;
        color: #00ffff;
        font-size: 40px;
        font-weight: 900;
        :hover{
            transition: .5s;
            color: #25a2a2;
        }
    }
`