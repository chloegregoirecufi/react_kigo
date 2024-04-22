import { createSelector } from "@reduxjs/toolkit";

const selectLoading = state =>state.user.loading;
//const selectProjet = state => state.user.userProjet;
const selectUser = state => state.user.user;

//on crée le selector 
export const selectUserData = createSelector(
    [selectLoading, selectUser],
    (loading, user)=>({loading, user})
)