import { configureStore } from "@reduxjs/toolkit";
import commentsReducer from "./modules/comments"

export default configureStore({ reducer: {
    // 댓글 리스트 Read, API axios get한 값
    comments: commentsReducer
} })