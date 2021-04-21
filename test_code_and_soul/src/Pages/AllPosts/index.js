import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import Header from "../../Components/Header/index";
import {ContainerFather, ContainerPostsList, ContainerTable, FirstTr} from "./styles";
import PostContext from "../../Contexts/PostContext";

function AllPosts(){

    const url = "https://jsonplaceholder.typicode.com/posts"

    const [postsList, setPostsList] = useState([]);

    const {postById, setPostById} = useContext(PostContext)

    const getPosts = ()=>{
        axios 
        .get(`${url}`)
        .then(response=>{
            console.log(response.data)
            setPostsList(response.data)
            console.log(postsList)
        })
        .catch(err=>{
            console.log(err.message)
        })
    }

    const getPostDetails = (id)=>{
        axios
        .get(`${url}/${id}`)
        .then(response=>{
            console.log(response.data)
            setPostById(response.data)
        })
        .catch(err=>{
            console.log(err.message)
        })
    }

    useEffect(() => {
        getPosts()
    }, [])

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
                            {postsList.map((post)=>{
                                return( 
                                <tr key={post.id} onClick={()=> getPostDetails(post.id)}>
                                        <td>
                                            {post.id}
                                        </td>
                                        <td>
                                            {post.title}
                                        </td>
                                </tr>
                                )
                            })} 
                    </table>
                </ContainerTable>
            </ContainerPostsList>
        </ContainerFather>
    )
}
export default AllPosts;