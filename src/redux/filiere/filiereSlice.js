import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import { api } from "../../constants/apiConstant";

const filiereSlice = createSlice({
    name: 'filieres',
    //initialise valeur par defaut
    initialState: {
        loading: false,
        filieres: [],
    },
    //remplir les valeur des states
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setFilieres: (state, action) => {
            state.filieres = action.payload;
        }
    }
});

export const {setLoading, setFilieres} = filiereSlice.actions;

//methode qui recupère les données en BDD
export const fetchFiliere = () => async dispatch => {
    try {
        dispatch(setLoading(true));
        //on stocke les données de la requete à l'API
        const response = await axios.get(`${api}/filieres?page=1`);
        //set les données recu dans notre slice grace à setCompetences
        dispatch(setFilieres(response.data));
        dispatch(setLoading(false));
    } catch (error) {
        console.error(error);
        dispatch(setLoading(false));
    }
};
//on exporte notre reducer
export default filiereSlice.reducer;