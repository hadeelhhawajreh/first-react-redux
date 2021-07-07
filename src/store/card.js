import { createSlice } from "@reduxjs/toolkit";

const cartSlicer=createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:0
    },
    reducers:{
        addToCart(state,action){
            const newItem=action.payload;
            console.log('newItem',newItem);
            const existItem=state.items.find(e=>e.id===newItem.id);
            state.totalQuantity++;
            if(!existItem){
                state.items.push({
                    id:newItem.id,
                    totalPrice:newItem.price,
                    quantity:1,
                    price:newItem.price,
                    name:newItem.title

                });
            }
            else{ 
                existItem.quantity++;
                existItem.totalPrice=existItem.totalPrice+newItem.price;
            }
                },
        removeFromCart(state,action){
            const id=action.payload;
            state.totalQuantity--;
            const existItem=state.items.find(e=>e.id===id);
            if(existItem.quantity===1){
                state.items=state.items.filter(e=>e.id!==id)
            }
            else{
                existItem.quantity--;
                existItem.totalPrice=existItem.totalPrice-existItem.price;


            }
            
        }
    }
});

export const cartActions=cartSlicer.actions;

export default cartSlicer;