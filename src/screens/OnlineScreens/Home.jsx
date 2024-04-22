import React, { useEffect } from 'react'
import { fecthCompetences } from '../../redux/competence/competenceSlice';
import { selectCompetencesData } from '../../redux/competence/competenceSelector';
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
    // console.log('COMPETENCE', competences['hydra:member']);

    return(
        //rendu HTML
        <div className='bg-whithb h-screen '>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src='image/logo.png' alt="Logo Kigo"  width="200" height="200"  />
            </div>
        </div>

    )
}

export default Home