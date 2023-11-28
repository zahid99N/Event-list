import React, { useState } from 'react'
import './EventList.css'
import './NewEventForm'

export default function EventList() {
  const [events, setEvents] = useState([
    {title:'Marios Birthday', date:'25-4-2011',id:1},
    {title:'FHDfhd Coock', date:'25-4-2011',id:2},
    { title: 'Marios fish', date: '25-4-2011', id: 3 },
    { title: 'Marios Dhaka to banmd', date: '25-4-2011', id: 4 }
  ])
  const addEvent = (event) => {
    setEvents((prevEvent) => {
      return [...prevEvent, event]
    })
  }



  const deleteEvent = (id) => {
    setEvents(events.filter((event) => {
    return id!==event.id
  }))
}

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  return (
      <div className='event-list'>
      {
        events.map((event) => (
          <div key={event.id } className='event-cart'>
            <h2>{event.title}</h2>
            <p>{event.date}</p>
            <button onClick={()=>{deleteEvent(event.id)}}>Delete</button>
          </div>
        ))
      }
          <p>Date: {currentDate}:</p>
    </div>
    
  )
}
