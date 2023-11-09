import React from 'react'
import './Newsletter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>GET EXCLUSIVE OFFER ON YOUR EMAIL</h1>
        <p>SUSCRIBE TO OUR NEWLETTER AND STAY UPDATE</p>
        <div>
            <input type="email" placeholder='Your Email id' />
            <button>Subscribe</button>
        </div>
        
    </div>
  )
}

export default NewsLetter