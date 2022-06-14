import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loadCommentDB } from "../redux/modules/comments";


const Comments = () => {
    
    // const dispatch = useDispatch();
    // const [isloaded, setIsloaded] = useState(false);
    
    // useEffect(() => {
    //     async function load() {
    //         await dispatch(loadCommentDB());
    //         setIsloaded(true);
    //     }
    //     load();
    // }, []);
    
    const comments = useSelector((state) => state)
    console.log(comments);
    
    

    

    return (
        <Ul>
            {comments.map((comment, index) => {
                return(
                    <div>
                        <div>
                            <TitleP>
                                <span>{comment.nickname}</span><span> | </span><span>{comment.createdAt}</span>
                            </TitleP>
                        </div>
                        <Hr />
                        <div>
                            <CommentP>
                                <span>{comment.comments}</span>
                            </CommentP>
                        </div>
                    </div> 
                )
               
            })}
                
        </Ul>
    );
};

const Ul = styled.ul`
margin: 0px auto;
width: 560px;
border: 1px solid black;
border-radius: 5px;
display: flex;
flex-direction: column;
jusfify-content: center;
`;

const TitleP = styled.p`
display: grid;
grid-template-columns: 100px 20px 100px;
font-size: 13px;
`;

const CommentP = styled.p`
font-size: 15px;
`;

const Hr = styled.hr`
border: 1px solid black;
width: 510px;
`;

export default Comments;