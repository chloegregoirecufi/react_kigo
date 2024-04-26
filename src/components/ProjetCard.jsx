import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProjet } from '../redux/projet/projetSlice';
import { selectProjetData } from '../redux/projet/projetSelector';
import PageLoader from './Loader/PageLoader';

const ProjetCard = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchProjet())
    }, [])

    console.log('on passe ici');
    //on recupère les infos du slice projet
    const {projet, loading} = useSelector(selectProjetData);
    //on recupère le tableau de données de selectPosts
    //const projets = projet_response['hydra:member'];
    
    console.log('projet', projet);
    const projet_response = projet["hydra:member"];

  return (
    loading ? <PageLoader />:
    <div className='m-3'>
    <label className='flex justify-center text-xl text-orange font-bold mb-2'>Mes projets</label>
            {projet_response && projet_response.map((item, index)=>{
              console.log('item', item);
              return(
              <>
                <div className='m-5 pb-5 pl-2 pr-2 rounded-lg border-2 shadow-lg inline-block'>
                  <div className='text-orange font-bold'>{item.title}</div>
                  <div className='text-orange'>{item.text}</div>
                </div>

              </>

            )})} 
  </div>
  )

}

export default ProjetCard