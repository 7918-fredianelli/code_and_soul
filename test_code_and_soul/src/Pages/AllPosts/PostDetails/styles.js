import styled from "styled-components";

export const ContainerDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    background-color: white;
    border-radius: 20px 20px 20px 20px;
    top: 4%;
    left: 16%;
    width: 60%;
    min-height: 50vh;
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

export const DivPoint = styled.div`
    position: absolute;
    background-color: white;
    border-radius: 20px 20px 0px 0px;
    top: -6%;
    left: 6%;
    width: 72%;
    min-height: 50vh;
    padding: 35px 70px 70px 70px;
    text-align: left;

    @media (max-width: 426px){
        width: 70%;
        left: 7%;
        padding: 35px;
    }
    @media (max-width: 376px){
        width: 70%;
        left: 6%;
        padding: 35px;
    }
    @media (max-width: 321px){
        width: 78%;
        left: 0%;
        padding: 35px;
    }

    div{
        display: grid;
        grid-template-columns: 0.5fr 3.5fr;
        /* flex-direction: column;
        img{
            width: 105px;
            height: 105px;
        }
         */
        div{
            display: flex;
            flex-direction: column;
        }
    }

    button{
        width: 359px;
        height: 59px;
        grid-column: 3/4;
        margin-top: 64%;
    }
`

export const SpanTitle = styled.span`
    font-size: 24px;
    font-weight: 700;
    margin-top: 16px;
    margin-bottom: 16px;
    margin-left: 24px;

    @media (max-width: 1024px){
        font-size: 22px;
    }
    @media (max-width: 768px){
        font-size: 21px;
    }
    @media (max-width: 426px){
        font-size: 18px;
    }
    @media (max-width: 321px){
        font-size: 16px;
    }
`

export const DivInformations = styled.div`
    grid-column: 1/3;

    @media (max-width: 1024px){
        font-size: 14px;
    }
    @media (max-width: 426px){
        font-size: 10px;
    }
    @media (max-width: 321px){
        font-size: 8px;
    }

    p{
        color: #9A9999;
    }
    strong{
        margin-right: 8px;
        font-weight: 700;
        color: black;
    }
`