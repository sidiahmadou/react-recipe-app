import { createSlice} from "@reduxjs/toolkit";

const favorites = localStorage.getItem("favorites")!== null
? JSON.parse(localStorage.getItem("favorites"))
: []

const favoriteSlice = createSlice({
    name:'favorite',
    initialState:{
        favorites
    },
    reducers:{
        addFavorite: (state, {payload})=>{
            state.favorites.push(payload)
            console.log(payload)
            console.log(state)
            localStorage.setItem("favorites", JSON.stringify(state.favorites))
        },
        
        deleteFavorite:(state, {payload})=>{
            state.favorites=state.favorites.filter(item=>item.id!==payload)
            localStorage.setItem("favorites", JSON.stringify(state.favorites))
        },
        
        deleteAllFavorite:(state)=>{
            localStorage.clear()
            state.favorites=[]
        }
    }
})
export const {addFavorite, deleteFavorite, deleteAllFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer
