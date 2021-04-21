import React, {useContext} from "react";
import PostContext from "../../../Contexts/PostContext";
import {ContainerDetails, ContainerFatherDetails} from "./styles";

function PostDetails(props){

    const {postById, setPostById} = useContext(PostContext)

    const exitPostDetails = ()=>{
        props.setEditWorker(false)
        props.getWorkers()
    }

    return(
        <>
            <ContainerDetails>
                <div>
                    Aaaaa
                </div>
            </ContainerDetails>
                <ContainerFatherDetails onClick={exitPostDetails}>
                </ContainerFatherDetails>
        </>
    )
}
export default PostDetails;