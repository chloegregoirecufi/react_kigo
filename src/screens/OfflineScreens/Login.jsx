import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import ButtonLoader from '../../components/Loader/ButtonLoader';
import { apiRoot } from '../../constants/apiConstant';
import { useAuthContext } from '../../contexts/AuthContext';



const Login = () => {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[isLoading, setIsLoading] = useState(false);
  const[error, setError] = useState('');
  
//on récupère signIn du context d'authentification
const {signIn} = useAuthContext();
//on recup le hook de navigation
const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault() //empeche le fonctionnement par default du form
    setIsLoading(true);
    axios.post(`${apiRoot}/login`, {
      email, password
    }).then((response)=>{
      if(response.data.email){
        const user = {
          userId: response.data.id,
          firstname: response.data.firstname,
          lastname: response.data.lastname,
          email: response.data.email,
        }
        console.log(user);
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
    <div className='flex flex-1 flex-col h-screen justify-start items-center bg-gradient-to-b from-green to-orange'>
      <h2 className='text-whitel font-bold text-xl py-5'>Me connecter</h2>
      <div className='text-red-600 font-bold mb-4'>{error}</div>
      <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
        {/*input pour mail */}
          <CustomInput state={email} label="Mon email" type="email" callable={(event)=> setEmail(event.target.value)}/> 
        {/*input pour password */}
          <CustomInput state={password} label="Mon mot de passe" type="password" callable={(event)=> setPassword(event.target.value)}/> 

        <p className='text-whitel'> Vous n'avez pas de <Link to='/register' className='text-whitel font-bold'>compte</Link> ?</p>
        <div className='flex items-center justify-center pt-5'>
          { isLoading ? <ButtonLoader /> :
            <button type='submit' className='bg-orange text-whitel font-bold py-2 px-4 rounded'>
            Me connecter
          </button>}
          </div>
      </form>
    </div>
    
  )
}

export default Login