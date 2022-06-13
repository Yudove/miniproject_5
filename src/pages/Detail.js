import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Comments from "../components/Comments";
import DetailImage from "../components/DetailImage";
import Input from "../components/Input";

const StyledInt = styled.div`

text-align: center;
`

const Detail = () => {
    return (
        <>
        <DetailImage />
        <StyledInt>
        <Input />
        <Button />
        </StyledInt>
        <Comments />
        </>
    )
}

export default Detail;