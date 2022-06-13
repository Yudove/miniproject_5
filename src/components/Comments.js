import React from "react";
import styled from "styled-components";



const Comments = () => {

    return (
        <Ul>
                <div>
                    <div>
                    <TitleP>
                    <span>닉네임</span><span> | </span><span>작성시간</span>
                    </TitleP>
                    </div>
                    <Hr />
                    <div>
                    <CommentP>
                    <span>코멘트</span>
                    </CommentP>
                    </div>
                </div>
        </Ul>
    );
};

const Ul = styled.ul`
margin: 0px auto;
width: 560px;
border: 1px solid black;
border-radius: 5px;
display: flex;
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