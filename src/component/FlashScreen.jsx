import React, { useEffect } from 'react'
import {FaRegEye} from "react-icons/fa"
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
            <button className='btn falsh-button'><FaRegEye/>Let's begin</button>
        </div>
    </div>
  )
}

export default FlashScreen