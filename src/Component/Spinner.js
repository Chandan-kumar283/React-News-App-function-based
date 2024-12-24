import React from 'react'
import loading from './Loading-bar.gif'
export default function Spinner()  {
  
    return (
      <div className='spinner'>
        <img src={loading} alt="loading" />
      </div>
    )
  }

