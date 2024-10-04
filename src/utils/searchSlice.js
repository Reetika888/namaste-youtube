import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({ 
    name:'search',
    initialState:{
    
    },

    reducers:{
      cacheResults : (state,action) => {
        console.log("state",state);
        console.log("payload",action);
        // {"ip":["iphone","iphone11"]}
         state = Object.assign(state,action.payload);
      }
    }

})

export const {cacheResults} = searchSlice.actions;
export  default searchSlice.reducer ;