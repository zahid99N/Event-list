import './App.css';
import Title from './component/Title';
import EventList from './component/EventList';
import { useState } from 'react';
import NewEventForm from './component/NewEventForm'

function App() {
  const [showEvents, setShowEvents]= useState(false)


  const name = 'Jahid Kamal'

 
  const handleEvents = () => {
    setShowEvents(true)
  }
  return (
    
    <div className="App">
      <Title name={name} />
      <div className="events-buttons">
        <div>
          <button onClick={handleEvents}>Show Events</button>
          <button onClick={() => { setShowEvents(false) }}>Hide Events</button>
          <button>Add new Events</button>
        </div> 
      </div>
      
      {showEvents && <EventList />}
      
      <NewEventForm addEvent={addEvent} />
    </div>
  );
}

export default App;
