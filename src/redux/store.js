import { configureStore } from '@reduxjs/toolkit';
import competencesReducer from './competence/competenceSlice';
import filieresReducer from './filiere/filiereSlice';
import  userReducer  from './user/userSlice';


const store = configureStore({
    reducer: {
        competences: competencesReducer,
        filieres : filieresReducer,
        user: userReducer,
    }
});

export default store;