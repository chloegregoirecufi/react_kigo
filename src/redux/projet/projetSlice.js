import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import React from 'react'
import { api } from '../../constants/apiConstant';

const projetSlice = createSlice({
    name:'projet',
    //initialise valeur par defaut
    initialState: {
        loading: false,
        projet: null,
    },
    //remplir les valeurs des states
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setProjet: (state, action) => {
            state.projet = action.payload['hydra:member'];
        }
    }
});

export const {setLoading, setProjet} = projetSlice.actions;

//méthode qui recupère les données en bdd
export const fetchProjet = () => async dispatch => {
    console.log("test");
    try {
        console.log('fetchprojet');
        dispatch(setLoading(true));
        //stock données de la requête à l'API
        const response = await axios.get(`${api}/posts?page=1`);

        //set les données reçu dans notre slice grace au setProjet
        dispatch(setProjet(response.data));
        dispatch(setLoading(false));
    } catch (error) {
        console.log('error', error);
        dispatch(setLoading(false));
    }
}

//on exporte notre reducer
export default projetSlice.reducer