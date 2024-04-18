import { createSelector } from '@reduxjs/toolkit';

//on recupere les données du slice qu'on stock dans des constantes
const selectCompetences = state => state.competences.competences;
const selectLoading = state => state.competences.loading;

export const selectCompetencesData = createSelector(
    [selectCompetences, selectLoading],
    //on destrucutre l'objet
    (competences, loading) => ({competences, loading}) 
);