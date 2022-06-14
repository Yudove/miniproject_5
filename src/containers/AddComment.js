import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";
import { addComment } from "../redux/modules/comments";

const AddComment = () => {

    const dispatch = useDispatch();

    const data = {
        "nickname": "유동우",
        "createdAt": "12:30",
        "comments": "댓글 테스트입니다."
    }

    const submit = () => {
        dispatch(addComment(data))
    }

    return (
        <>
            <Input/><Button onClick={submit}>button</Button>
        </>
    )
}

export default AddComment;