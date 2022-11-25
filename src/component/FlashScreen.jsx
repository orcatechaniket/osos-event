import React, { useEffect } from 'react'
import {FaRegEye} from "react-icons/fa"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
const FlashScreen = () => {
    const navigate = useNavigate()
useEffect(() => {
    setTimeout(function(){
       navigate("/login")
      }, 4000)
})



  return (
    <div className='flash '>
        <div className='container'>
           <Link to="/login"> <button className='btn falsh-button'><FaRegEye/>Let's begin</button> </Link>
        </div>
    </div>
  )
}

export default FlashScreen
