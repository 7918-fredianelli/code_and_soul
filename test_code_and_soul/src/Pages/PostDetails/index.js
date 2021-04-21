import React, {useContext} from "react";

function PostDetails(){

    const {workerById, setWorkerById} = useContext(WorkerContext)

    return(
        <div>
            Post Details
        </div>
    )
}
export default PostDetails;