import { createSelector } from '@reduxjs/toolkit';

//on recupere les données du slice qu'on stock dans des constantes
const selectFilieres = state => state.filieres.filieres;
const selectLoading = state => state.filieres.loading;

export const selectFilieresData = createSelector(
    [selectFilieres, selectLoading],
    //on destructure l'objet
    (filieres, loading) => ({filieres, loading}) 
);