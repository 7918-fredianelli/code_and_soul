import styled from "styled-components";

export const ContainerDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;
    position: absolute;
    background-color: white;
    border-radius: 20px 20px 20px 20px;
    top: 4%;
    left: 16%;
    width: 60%;
    min-height: 100vh;
    padding: 35px 70px 70px 70px;
    text-align: center;
    z-index: 2;
        @media (max-width: 1024px){
            width: 80%;
            left: 4%;
            top: 5%;
        }
        @media (max-width: 768px){
            width: 60%;
            left: 10%;
        }
        @media (max-width: 426px){
            flex-wrap: wrap;
            left: 8%;
            width: 50%;
            padding: 55px 70px 70px 70px;
        }
        @media (max-width: 376px){
            left: 11%;
            width: 40%;
            padding: 55px 70px 70px 70px;
        }
        @media (max-width: 321px){
            width: 30%;
            left: 12%;
            padding: 65px 70px 70px 70px;
        }
`

export const ContainerFatherDetails = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    z-index: 1;
`