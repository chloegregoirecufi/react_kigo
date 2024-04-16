import { configureStore } from '@reduxjs/toolkit';
import competencesReducer from './competence/competenceSlice';

const store = configureStore({
    reducer: {
        competences: competencesReducer,
    }
});

export default store;