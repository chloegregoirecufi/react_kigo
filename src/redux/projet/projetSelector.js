import { createSelector } from "@reduxjs/toolkit";

//on recupere les données du slice qu'on stock dans des constantes
const selectProjet = state => state.projet.projet;
const selectLoading = state => state.projet.loading;

export const selectProjetData = createSelector(
    [selectProjet, selectLoading],
    //on destrcuture l'objet
    (projet, loading) => ({projet, loading})
)