import React, {useState} from 'react';
import {Container} from 'semantic-ui-react';
import EventDashboard from '../features/events/eventsDashboard/eventDashboard';
import Navbar from '../features/nav/navbar/navBar';
import './App.css';

const App = () => {
    const [formOpen, setFormOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const handelSelectEvent = (event) => {
        console.log('event', event);
     setSelectedEvent(event);
     setFormOpen(true);
     console.log(selectedEvent);
    };

    const handleCreateFormOPen  = () => {
        setSelectedEvent(null);
        setFormOpen(true);
    }
 
 return(
     <>
    <Navbar setFormOpen={handleCreateFormOPen} />  
    <Container className="main">
    <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen}
     selectEvent={handelSelectEvent}
     selectedEvent={selectedEvent}
    />
    </Container>
     </>
 )
};

export default App;
