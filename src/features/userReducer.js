import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const userSlice = createSlice({
    name: "user",
    initialState: { value: initialStateValue },
    reducers: {
        changeUser: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { changeUser } = userSlice.actions;

export default userSlice.reducer;