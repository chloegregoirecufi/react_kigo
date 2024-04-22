//on construit un premier tableau pour notre navbar

import { apiImage } from "./apiConstant";
import {AiOutlineHome} from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';

//1 pour la gestion de la nav
export const dataHomeNav = [
    {title: 'Accueil', path:'/home'},
    {title: 'projet', path:'/projet'},
];

//on construit un 2ème tableau pour notre navbar
//2 pour les options user
// export const dataUserNav = [
//     {title: 'Mon compte', path:'/profil/:id', icon:FiSettings} 
// ];



//on récupère le chemin de notre logo
export const imgLogo = `${apiImage}/logo.png`;

//on définit du style pour les icons
export const styleIcon = {width: '25px', height:'25px'};
export const tableIcon = {width: '20px', height:'20px'};
export const USER_INFOS = 'userInfos';