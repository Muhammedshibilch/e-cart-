import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:"wishlists",
    initialState:[],
    reducers:{
        addToWishlist:(state,actionFromView)=>{
            state.push(actionFromView.payload);
        },
        removeFromWishlist:(state,actionFromWishlist)=>{
 return state.filter(item=>item.id!=actionFromWishlist.payload)
        }
    }
})


export const {addToWishlist,removeFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer