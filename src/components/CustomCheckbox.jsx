import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fecthCompetences } from '../redux/competence/competenceSlice';
import { selectCompetencesData } from '../redux/competence/competenceSelector';

const CustomCheckbox = ({label, callable}) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fecthCompetences())
    }, [])

    //on recupère les info du slice compétence
    const {competences} = useSelector(selectCompetencesData);
    //on recupère le tableau de donnée de selectCompétence
    const competence = competences['hydra:member'];

    console.log('competence', competence);

  return (
    <div className='ml-3'>
    <label className='block text-whitel font-bold mb-2'>{label}</label>
    <div>
        {competence && competence.map((item, index) => (
            <div key={index} className=''>
                <input
                type="checkbox"
                id={`filiere_${index}`}
                value={item.id}
                onChange={callable}
                className="shadow border rounded py-2 px-3 mr-3"
                />
                <label htmlFor={`competence_${index}`} className='text-black'>
                    {item.label}
                </label>
            </div>
        ))}
    </div>
    </div>  
    )
}

export default CustomCheckbox