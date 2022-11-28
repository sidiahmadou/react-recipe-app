import { createSlice} from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name:'favorite',
    initialState:{
        favorites: [] 
    },
    reducers:{
        addFavorite: (state, {payload})=>{
            console.log(payload)
            state.favorites.push(payload)
            localStorage.setItem("favorites", JSON.stringify(state.favorites));
        },
        deleteFavorite:(state, {payload})=>{
            state.favorites=state.favorites.filter(item=>item.id!==payload)
            localStorage.setItem("favorites", state.favorites);
        },
        deleteAllFavorite:(state)=>{
            localStorage.clear()
            return state.favorites=[]
        }
    }
})
export const {addFavorite, deleteFavorite, deleteAllFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer
