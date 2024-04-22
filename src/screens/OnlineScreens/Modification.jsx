import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CustomInput from '../../components/CustomInput'
import axios from 'axios';
import { useAuthContext } from '../../contexts/AuthContext';
import ButtonLoader from '../../components/Loader/ButtonLoader';
import { apiRoot } from '../../constants/apiConstant';
import CustomList from '../../components/CustomList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../redux/user/userSlice';
import { selectUserData } from '../../redux/user/userSelector';
import { USER_INFOS } from '../../constants/appConstant';
import { setCompetences } from '../../redux/competence/competenceSlice';

const Modification = () => {
  const userId = JSON.parse(localStorage.getItem(USER_INFOS)).userId
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser(userId))
  }, [])

  //on recupère notre selector 
  const {user, loading} = useSelector(selectUserData);


  const [firstname, setFirstname] = useState(user.firstname?? '');
  const [lastname, setLastname] = useState(user.lastname?? '');
  const [description, setDescription] = useState(user.description?? '');
  const [competence, setCompetence] = useState(user.competence?? '');
  const [email, setEmail] = useState(user.email?? '');
  const [password, setPassword] = useState(user.password?? '');
  const [filiere, setFiliere] = useState('0');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  //on recupere la methode signIn du context d'auth
  const {signIn} = useAuthContext()
  //on récupère le hook de navigation
  const navigate = useNavigate();

  

  

  

console.log('user', user);
  const handleSubmit = (event) => {
    event.preventDefault() //empeche le fonctionnement par default du form
    console.log('enregistrer',firstname,lastname,email,password,filiere);
    if(filiere == '0') {
      setError('Veuillez choisir votre filière')
      return
    }
     setIsLoading(true);
     axios.patch(`${apiRoot}/users/${userId}`, {
         firstname, lastname, email, password, filiere, description, competence
     }).then((response)=>{
       if(response.data.email){
         const user = {
           userId: response.data.id,
           firstname: response.data.firstname,
           lastname: response.data.lastname,
           email: response.data.email,
           filiere: response.data.filiere,
           description: response.data.description,
           competence: response.data.competence,

         }
         console.log('User', user)
         try {
           signIn(user);
           setIsLoading(false);
           navigate('/profil');
         } catch (error) {
           setIsLoading(false);
           console.log(`Erreur lors de le creation de session ${error}`);
         }
        }else{
         setIsLoading(false);
         console.log(`Erreur lors de la réponse serveur: ${response}`);
       }
     }).catch((error)=> {
       setIsLoading(false);
       console.log(`Erreur lors de l'enregistrement de l'user: ${error}`);
     })//then le serveur renvoi dedans et si il ne recoit rien ça part dans le catch
  }

  return (
    <div className='bg-gradient-to-b from-orange to-whitel h-screen '>
        <div className='h-40 w-full z-0 flex justify-center items-center '>
            <img src="/image/user-setting.png" alt="image user setting" className='size-16'/>
        </div>
        <h1 className='text-center font-bold tracking-wide text-whitel'>Mes information personnelles</h1>
        {/*input pour Lastname */}
          <CustomInput state={lastname} label="Mon nom" type="text" callable={(event)=> setLastname(event.target.value)}/> 
        {/*input pour FirstName */}
          <CustomInput state={firstname} label="Mon prénom" type="text" callable={(event)=> setFirstname(event.target.value)}/>
        {/*input pour mail */}
          <CustomInput state={email} label="Mon email" type="email" callable={(event)=> setEmail(event.target.value)}/> 
        {/*input pour déscritpion */}
        <CustomInput label="Descritpion" type="text" callable={(event)=> setDescription(event.target.value)}/>
        {/*input pour filiere */}
        <CustomList label="Ma section" callable={(event)=> setFiliere(event.target.value)}/>


        
        <div className='flex justify-center m-4'>
        { isLoading ? <ButtonLoader /> :
        <button className='border-2 shadow-lg border-orange bg-white rounded text-center p-1 flex'>Enregistrer</button>}
        </div>
    </div>
  )
}

export default Modification