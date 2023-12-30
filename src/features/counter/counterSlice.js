import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    val: 0
}

const counterSlice = createSlice ({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.val += 1
        },
        decrement : (state) => {
            state.val -= 1
        }    
    }

    
});

export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;