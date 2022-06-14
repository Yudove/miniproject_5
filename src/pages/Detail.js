import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AddComment from "../containers/AddComment";

import Comments from "../components/Comments";
import DetailImage from "../components/DetailImage";
import { useDispatch, useSelector } from "react-redux";
import { loadCommentDB } from "../redux/modules/comments";


const StyledInt = styled.div`

text-align: center;
`

const Detail = () => {

   

    const data = useSelector((state) => state)
    console.log(data);
    return (
        <>
        <DetailImage />
        <StyledInt>
        <AddComment />
        </StyledInt>
        <Comments />
        </>
    )
    }

export default Detail;