import React from 'react'
import './Title.css'
export default function Title({ name }) {
  return (
      <div className='title'>
          <h1>Hello {name}, Good Morning!</h1>
      </div>
  )
}
