import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUser } from '../../redux/user/userSlice';
import { USER_INFOS } from '../../constants/appConstant';
import { selectUserData } from '../../redux/user/userSelector';


const Profil = ({dataUser}) => {

  const userId = JSON.parse(localStorage.getItem(USER_INFOS)).userId

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser(userId))
  }, [])

  //on recupère notre selector 
  const {user, loading} = useSelector(selectUserData);

  console.log('user', user);
  

  const name = dataUser?.lastname
  return (
    <div className='h-screen bg-whiteb'>
        <div className='bg-orange h-52 w-full z-0 flex flex-col '>
            <div className='flex justify-between'>
              <Link to="/">
                <img className='p-2 m-1'  src="/image/fleche.png" alt="fleche retour" />
              </Link>
              <Link to='/modification'>
                  <img className='bg-whitebox p-2 m-2 rounded ' src="/image/pen.png" alt="modification profil crayon" />
              </Link>
            </div>

            <div className='flex justify-center z-10 mt-20'> 
              <img className='rounded-full' src="/image/img.png" alt="image profil" />
            </div>
            <h1 className='flex justify-center mt-2 font-bold text-xl capitalize'>{user.lastname} {user.firstname}</h1>
              <div className='flex justify-center'>
                <p className=' bg-whitebox rounded-lg inline-block py-1 px-2'>{user.filiere}</p>
              </div>
              <div className='flex justify-center m-4'>
                <p className='border-2 shadow-lg border-orange bg-white inline-block py-1 px-2 rounded text-center'>saluuuuuuuuuuuuuuut</p>
              </div>
              <div className='flex justify-center m-4'>
                <p className='border-2 shadow-lg border-orange bg-gradient-to-b from-whitebox via-whitebox to-orangeo inline-block py-1 px-2 rounded'>Réseaux:
                <p>lalalalaaaaaaaaaaaaa</p>
                </p>
              </div>
              <p className='ml-5 mt-5'>Mes réalisations :</p>

        </div>
    </div>
  )
}

export default Profil