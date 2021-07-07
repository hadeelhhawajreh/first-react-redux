import { createSlice } from "@reduxjs/toolkit";
const uiInitialState = { show: true }
const UISlicer = createSlice({
    name: 'ui',
    initialState:uiInitialState,
    reducers: {
        toggle(state){
            state.show=!state.show
        }

    }
});

export const  UIActions=UISlicer.actions;
export default UISlicer;

