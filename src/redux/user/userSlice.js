import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../constants/apiConstant";

const userSlice = createSlice({
    name: "user",
    initialState: {
        loading:false,
        user: {},
    },
    reducers:{
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
    }

})

export const {setLoading, setUser} = userSlice.actions


//méthode qui recupère les projet de l'utilisateur
// export const fetchProjet = (id) =>async dispatch => {
//     try {
//         dispatch(setLoading(true));
//         const response = await axios.get(`${apiUrls}/users?page=1&id=${id}`)
//         dispatch(setUserFavorite(response.data['hydra:member'][0].albums));
//         dispatch(setLoading(false));
//     } catch (error) {
//         console.log(`Erreur lors du fetchUserFavorite : ${error}`);
//     }
// }

//méthode qui récupère les info de l'user
export const fetchUser = (id) => async dispatch => {
    try {
        dispatch(setLoading(true));
        const response = await axios.get(`${api}/users/${id}`);
        dispatch(setUser(response.data));
        dispatch(setLoading(false));
    } catch (error) {
        console.log(`Erreur lors de fetchUser: ${error}`);
        dispatch(setLoading(false));
    }
}

export default userSlice.reducer