import styled from "styled-components";

export const ContainerFather = styled.main`
    min-height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: 18% 82%;
    grid-template-rows: 20vh 80%;
    background-color: white;
    font-family: Roboto;
`

export const ContainerPostsList = styled.div`
    grid-column: 1/3;
    grid-row: 2/3;
    padding: 50px 100px 100px 100px;

    @media (max-width: 426px){
        padding: 50px 30px 50px 30px;
    }
    @media (max-width: 376px){
        padding: 50px 20px 50px 20px;
    }
    @media (max-width: 321px){
        padding: 50px 10px 50px 10px;
    }
`

export const ContainerTable = styled.div`
    min-height: 100%;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    table{
        width: 100%;
        width: 100%;
        border-collapse: collapse;
        font-size: 16px;
        
        @media (max-width: 426px){
            font-size: 14px;
        }
        @media (max-width: 426px){
            font-size: 12px;
        }
        @media (max-width: 321px){
            font-size: 10px;
        }

        tr{
            border-collapse: collapse;
            border-bottom: 1px solid black;
            height: 58px;

            @media (max-width: 426px){
                height: 50px;
            }
            @media (max-width: 321px){
                height: 40px;
            }
        }
        th{
            color: white;
        }
        td{
            margin-top: 8px;
            text-align: center;
            height: 66px;

            @media (max-width: 426px){
                height: 50px;
            }
            @media (max-width: 321px){
                height: 40px;
            }
        }
    }
`

export const FirstTr = styled.tr`
    background-color: #247777;
`