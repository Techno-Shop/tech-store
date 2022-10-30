import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom'

function LogOut() {
   const navigate = useNavigate();




   const disconnect = ()=> {
    axios.get('http://localhost:3001/auth/logout')
    .then(res=>{
      alert(res.data)
      navigate('/login')
    })
    .catch(err=> console.log(err.res))
   }

   useEffect(()=> {
    disconnect()
   },[])

  return (
    <div onClick={(e)=> disconnect() }>LogOut</div>
  )
}

export default LogOut;