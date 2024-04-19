import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CustomInput from '../../components/CustomInput'
import axios from 'axios';
import { useAuthContext } from '../../contexts/AuthContext';
import ButtonLoader from '../../components/Loader/ButtonLoader';
import { apiRoot } from '../../constants/apiConstant';
import CustomList from '../../components/CustomList';

const Register = () => {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [filiere, setFiliere] = useState('0');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  //on recupere la methode signIn du context d'auth
  const {signIn} = useAuthContext()
  //on récupère le hook de navigation
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault() //empeche le fonctionnement par default du form
    console.log('enregistrer',firstname,lastname,email,password,filiere);
    if(filiere == '0') {
      setError('Veuillez choisir votre filière')
      return
    }
     setIsLoading(true);
     axios.post(`${apiRoot}/register`, {
         firstname, lastname, email, password, filiere
     }).then((response)=>{
       if(response.data.email){
         const user = {
           userId: response.data.id,
           firstname: response.data.firstname,
           lastname: response.data.lastname,
           email: response.data.email,
         }
         console.log('User', user)
         try {
           signIn(user);
           setIsLoading(false);
           navigate('/');
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
    <div className='flex flex-1 flex-col h-screen items-center bg-gradient-to-b from-orange to-green'>
      {error && <div className='text-whitel font-bold'>{error}</div>}
      <form onSubmit={handleSubmit} className='max-w-md mx-auto mt-1'>
        {/*input pour Lastname */}
          <CustomInput state={lastname} label="Mon nom" type="text" callable={(event)=> setLastname(event.target.value)}/> 
        {/*input pour FirstName */}
          <CustomInput state={firstname} label="Mon prénom" type="text" callable={(event)=> setFirstname(event.target.value)}/>
        {/*input pour mail */}
          <CustomInput state={email} label="Mon email" type="email" callable={(event)=> setEmail(event.target.value)}/> 
        {/*input pour password */}
          <CustomInput state={password} label="Mon mot de passe" type="password" callable={(event)=> setPassword(event.target.value)}/>
        {/*input pour password */}
          <CustomList  label="Ma section"  callable={(event)=> setFiliere(event.target.value)}/>

        <p className='text-whitel '> Vous avez déjà un <Link to='/' className='text-whitel font-bold '>compte</Link> ?</p>
        <div className='flex items-center justify-center pt-7 pb-20 '>
          { isLoading ? <ButtonLoader /> :
            <button type='submit' className='bg-orange text-whitel font-bold py-2 px-4 rounded justify-center'>
            S'enregistrer
          </button>}
          </div>
      </form>
    </div>
    
  )
}

export default Register