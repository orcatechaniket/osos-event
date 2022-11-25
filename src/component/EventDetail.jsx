import React from 'react'
import quote from "../assets/quote.png"
import {BsCalendarDateFill} from "react-icons/bs"
import {BiTime,BiCurrentLocation} from "react-icons/bi"

const EventDetail = () => {
  return (
    <>
        <div className='event-detail'>
<img src={quote} alt="quote" style={{width : "100%"}} />
        </div>
        <div className='container'>

       <center className="fw-bold mt-3 "> DR Subol Kishor Kar Award</center>
        <div className='row mt-4'>
            <div className='col-4'>
        <BsCalendarDateFill/>
            </div>
            <div className='col-4'>
                <BiTime/>
            </div>
            <div className='col-4'>
                <BiCurrentLocation/>
            </div>
            </div>
        </div>
        <div className='container'>
            <p className='mt-4 fw-bold fs-5'>Description :</p>
    <p className='fw-bold '>Judges :</p>
            <ul>
                <li>FD</li>
                <li>FD</li>
                <li>FD</li>
            </ul>

            <p className='fw-bold '>Moderator :</p>
            <ul>
                <li>FD</li>
                <li>FD</li>
                <li>FD</li>
            </ul>

            <p className='fw-bold '>Panelist :</p>
            <ul>
                <li>FD</li>
                <li>FD</li>
                <li>FD</li>
            </ul>

           <center><button className='btn btn-primary'> Show Paper</button></center> 

           <center><button className='btn btn-primary mt-2 mb-4'> Show Topics</button></center> 
        </div>
    </>
  )
}

export default EventDetail