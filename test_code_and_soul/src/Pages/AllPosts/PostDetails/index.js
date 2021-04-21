import React, {useContext} from "react";
import PostContext from "../../../Contexts/PostContext";
import {ContainerDetails, ContainerFatherDetails, SpanTitle, DivInformations} from "./styles";

function PostDetails(props){

    const {postById, setPostById} = useContext(PostContext)

    const exitPostDetails = ()=>{
        props.setPostDetails(false)
        props.getPosts()
    }

    return(
        <>
            <ContainerDetails>
                <div>
                    <div>
                        <SpanTitle><strong>Título:</strong> {postById.title ?? "Não Informado"}</SpanTitle>
                    </div>
                    <DivInformations>
                        <p><strong>Texto:</strong> {postById.body ?? "Não informado"}</p>
                    </DivInformations>
                </div>
            </ContainerDetails>
                <ContainerFatherDetails onClick={exitPostDetails}>
                </ContainerFatherDetails>
        </>
    )
}
export default PostDetails;