import { configureStore } from '@reduxjs/toolkit';
import competencesReducer from './competence/competenceSlice';
import filieresReducer from './filiere/filiereSlice';


const store = configureStore({
    reducer: {
        competences: competencesReducer,
        filieres : filieresReducer,
    }
});

export default store;