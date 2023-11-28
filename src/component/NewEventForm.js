import React, { useState } from 'react'

export default function NewEventForm({ addEvent }) {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')

    const resetForm = () => {
        setTitle('')
        setDate('')
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const event = {
            title: title,
            date: date,
            id: Math.floor(Math.random()*100)
        }
        addEvent(event)
        resetForm()
    }
  return (
      <form className='new-event-form' onSubmit={handleSubmit}>
          <label>
              <span>Enter Title: </span>
              <input type="text" onChange={(e) => setTitle(e.target.value)} />
              <span>Date: </span>
              <input type="date" onChange={(e)=>setDate(e.target.value)} />
          </label>
          <button >Add</button>
    </form>
  )
}
