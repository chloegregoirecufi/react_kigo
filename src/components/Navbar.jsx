import React, { useState } from 'react'
import { useAuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Projet from '../screens/OnlineScreens/Projet';
import Profil from '../screens/OnlineScreens/Profil';



const Navbar = () => {
     //on recup l'id de l'user
     const { userId, signOut } = useAuthContext();
    //on recupère le hook de navigation 
     const navigate = useNavigate();

     //on créer une méthode de déconnexion 
     const handleLogout = () => {
         signOut()
         navigate('/')
     }


   return (
     <>
    {/* navbar pour la vue au dessus de 768px */}
    
        <nav className="fixed bottom-0 w-full bg-orange text-whitel text-center py-2 rounded-tl-lg rounded-tr-lg">
            <div className='flex items-center justify-evenly'> 
            <Link to={`/`} > 
            <img src="/image/home.png" alt="logo accueil" />
            </Link>
            <Link to={`/projet`}>
            <img src="/image/friends.png" alt="logo amies" />  
            </Link>
            <Link to={`/profil`} >
            <img src="/image/profile.png" alt="logo profil" />
            </Link>
            </div>
        </nav>

      </>

      )
 }

 export default Navbar;