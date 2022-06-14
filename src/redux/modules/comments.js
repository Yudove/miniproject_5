import { createSlice } from "@reduxjs/toolkit";
import AddComment from "../../containers/AddComment";
import axios from "axios";

export const loadCommentDB = () => {
    return async function (dispatch) {
        await axios.get("http://localhost:5001/comments").then((response) => {
        
        console.log(response);
        dispatch(loadComment(response));
        
        })
    } 
}

export const createCommentDB = (data) => {
    return async function (dispatch) {
        await axios.post("http://localhost:5001/comments", data).then((response) => {
            dispatch(createComment(response.data));
        })
    }
}

export const deleteCommentDB = (data) => {
    return async function (dispatch) {
        await axios.get("http://localhost:5001/comments", data).then((response) => {
            dispatch(deleteComment(response.data));
        })
    }
}

const commentSlice = createSlice({
    name: 'comments',
    initialState: {
        comment_list: []
    },
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        },
        delete: (state, action) => {
            const del = state.comment_list.filter((x) => x.id === action.payload.id)
            state.comment_list[del] = action.payload.id;
        },
        loadComment: (state, action) => {
            state.comment_list = action.payload;
        }
    }
})

export const { createComment, loadComment, addComment, deleteComment } = commentSlice.actions.add;
export default commentSlice.reducer;