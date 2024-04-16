import React, { useEffect } from 'react'
import { fecthCompetences } from '../redux/competence/competenceSlice';
import { selectCompetencesData } from '../redux/competence/competenceSelector';
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
    //toute la mécanique
    //constante qui recupere le hook de react-redux
    const dispatch = useDispatch();

    useEffect(() => {
        //on appelle notre reducer pour récupérer les données au montage du composant
    dispatch(fecthCompetences())
        return () => {
            //mécanique lors du démontage
        }
    }, [/*mécanique lors du rafraichissement*/])

    //on récupère notre selector
    const {competences, loading} = useSelector(selectCompetencesData);
    console.log('COMPETENCE', competences['hydra:member']);

    return(
        //rendu HTML
        <div>Home</div>
    )
}

export default Home