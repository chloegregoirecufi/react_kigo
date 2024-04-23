import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFiliere } from '../../redux/filiere/filiereSlice';
import { selectFilieresData } from '../../redux/filiere/filiereSelector';



const Home = ({label, callable}) => {
    //toute la mécanique
    //constante qui recupere le hook de react-redux
    const dispatch = useDispatch();

    useEffect(() => {
        //on appelle notre reducer pour récupérer les données au montage du composant
    dispatch(fetchFiliere())
    }, [])

    //on récupère notre selector
    const {filieres, loading} = useSelector(selectFilieresData);
    //on recupère le tableau de donnée de selectFiliere
    const filiere = filieres['hydra:member'];

    return(
        <div className='bg-whithb h-screen '>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src='image/logo.png' alt="Logo Kigo"  width="200" height="200"  />
            </div>
            <div className='ml-3'>
                <label className='block font-bold mb-2'>{label}</label>
                <div> 
                    {filiere && filiere.map((item, index) => (
                    <div key={index} className={` bg-whiteb border border-orange rounded-lg inline-block py-1 px-2 mr-3 mb-2`}>
                    <label htmlFor={`filiere_${index}`} className='text-orange'>{item.label}</label>
                  </div>
                ))}

        </div>
        </div>
        </div>
    )}

export default Home