import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const DetailUser = () => {

    const params = useParams();
    const dispatch = useDispatch();
    //on recupère l'id de l'artiste(depuis l'url)
    const id = params.id;
  
  
      useEffect(()=>{
          dispatch(fetchArtistDetail(id))
      },[])
  
  
  return (
    <div>DetailtUser</div>
  )
}

export default DetailUser