import { configureStore } from "@reduxjs/toolkit";
import UISlicer from "./ui";
import cartSlicer from "./card";
 const store= configureStore({
    reducer:{ui: UISlicer.reducer,cart:cartSlicer.reducer}
});

export default store;