import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectFilieresData } from '../redux/filiere/filiereSelector';
import { fecthCompetences } from '../redux/filiere/filiereSlice';

const CustomList = ({label, callable}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fecthCompetences())
    }, [])
    

    //on recupère les infos du slice filiere
    const {filieres} = useSelector(selectFilieresData);
    //on recupère le tableau de donnée de selectFilieres
    const filiere = filieres['hydra:member'];
    console.log('filiere', filiere);
    
  return (
    <div className='mb-3'>
    <label className='block text-black font-bold mb-2'>{label}</label>
    <div>
    	<select onChange={callable}>
            {filiere && filiere.map((item, index)=>(
                <option key={index} value={item.id}>{item.label}</option>

            ))}
   		</select>
    </div>
  </div>

  )
}

export default CustomList