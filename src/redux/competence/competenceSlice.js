import { createSlice } from '@reduxjs/toolkit';
import { axios } from 'axios';

const slice = createSlice({
    name: 'competences',
    //initialise valeur par defaut
    initialState: {
        loading: false,
        competences: [],
    },
    //remplir les valeur des states
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setCompetences: (state, action) => {
            state.competences = action.payload;
        }
    }
});

export const {setLoading, setCompetences} = slice.actions;

//methode qui recupère les données en BDD
export const fecthCompetences = () => async dispatch => {
    try {
        dispatch(setLoading(true));
        //on stocke les deonnées de la requete à l'API
        const response = await axios.get(`${api}/competences?page=1`);
        //set les données recu dans notre slice grace à setCompetences
        dispatch(setCompetences(response.data));
        dispatch(setLoading(false));
    } catch (error) {
        console.error(error);
        dispatch(setLoading(false));
    }
};
//on exporte notre reducer
export default slice.reducer;