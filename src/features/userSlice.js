import { createDraftSafeSelector, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        inSignedIn: false,
        userData: null,
        searchInput: "tech",
        blogData: null,
    },
    reducers: {
        setSignedIn: (state, action) => {
            state.isSignedIn = action.payload;
        },
        setUserData: (state, action) => {
            state.UserData = action.payload;
        },
        setInput: (state, action) => {
            state.input = action.payload
        },
        setBlogData: (state, action) => {
            state.blogData = action.payload
        },
    },
});

export const {
    setSignedIn,
    setUserData,
    setInput, 
    setBlogData 
} = userSlice.actions;

export const selectSignedIn = (state) => state.user.isSignedIn;
export const selectUserData = (state) => state.user.userData;
export const selectUserInput = (state) => state.user.serachInput;
export const selectBlogData = (state) => state.user.blogData;

export default userSlice.reducer;