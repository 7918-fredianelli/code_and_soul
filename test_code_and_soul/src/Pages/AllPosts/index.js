import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "../../Components/Header/index";
import {ContainerFather, ContainerPostsList, ContainerTable, FirstTr} from "./styles";

function AllPosts(){

    const url = "https://jsonplaceholder.typicode.com/posts"

    const [postsList, setPostsList] = useState([]);

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
                                <tr key={post.id}>
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