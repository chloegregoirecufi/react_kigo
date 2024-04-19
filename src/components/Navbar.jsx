import React, { useState } from 'react'
// import { dataAlbumNav, dataUserNav, imgLogo, styleIcon } from '../constants/appConstant'
// import NavLinks from './Navlinks'
// import { useAuthContext } from '../contexts/AuthContext'
// import { useNavigate } from 'react-router-dom'
// import { FiLogOut } from 'react-icons/fi'


const Navbar = () => {
//     const [mobileMenu, isMobilMenu] = useState(false);
//     //on recup l'id de l'user
//     const { userId, signOut } = useAuthContext();
//     //on recupère le hook de navigation 
//     const navigate = useNavigate();

//     //on créer une méthode de déconnexion 
//     const handleLogout = () => {
//         signOut()
//         navigate('/')
//     }


//   return (
//     <>
//     {/* navbar pour la ue au dessus de 768px */}
//         <div className='bottom-navbar'>
//             <div>
//             <img src={imgLogo} alt="Logo Spotify" className='w-full h-14 object-contain' />
//             <NavLinks data={dataAlbumNav} marginTop={'mt-10'}/>
//             <NavLinks data={dataUserNav} marginTop={'mt-5'} userId={userId}/>
//             </div>
//             {/*ajout du btn de déconnexion */}
//             <div className='mt-5'>
//                 <button onClick={()=>{
//                     const confirmLogout = window.confirm('Voulez-vous vraiment vous déconnecter ?')
//                     if(confirmLogout) handleLogout();
//                 }}
//                 className='w-full flex p-3 items-center justify-start font-medium text-sm text-whitel hover:bg-green_06'
//                 >
//                     <FiLogOut className='w-6 h-6 mr-2' />
//                     deconnexion
//                 </button>
//             </div>
//         </div>
//             {/*ajout du btn de déconnexion */}
//             <div className='mt-5'>
//                 <button onClick={()=>{
//                     const confirmLogout = window.confirm('Voulez-vous vraiment vous décnnecter ?')
//                     if(confirmLogout) handleLogout();
//                 }}
//                 className='w-full flex p-3 items-center justify-start font-medium text-sm text-whitel hover:bg-green_06'
//                 >
//                     <FiLogOut className='w-6 h-6 mr-2' />
//                     deconnexion
//                 </button>
//             </div>
//     </>

//     )
 }

 export default Navbar;