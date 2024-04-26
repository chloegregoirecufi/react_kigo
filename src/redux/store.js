import { configureStore } from '@reduxjs/toolkit';
import competencesReducer from './competence/competenceSlice';
import filieresReducer from './filiere/filiereSlice';
import  userReducer  from './user/userSlice';
import projetReducer from './projet/projetSlice';


const store = configureStore({
    reducer: {
        competences: competencesReducer,
        filieres : filieresReducer,
        user: userReducer,
        projet: projetReducer,
    }
});

export default store;