import Header from "../../Components/Header/index";
import {ContainerFather, ContainerPostsList, ContainerTable, FirstTr} from "./styles";

function AllPosts(){
    return(
        <ContainerFather>
            <Header/>
            <ContainerPostsList>
                <ContainerTable>
                    <table>
                            <FirstTr>
                                <th>#</th>
                                <th>Título</th>
                            </FirstTr>
                            <tr>
                                <td>1</td>  
                                <td>Abc</td>  
                            </tr>
                    </table>
                </ContainerTable>
            </ContainerPostsList>
        </ContainerFather>
    )
}
export default AllPosts;