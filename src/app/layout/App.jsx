import React from 'react';
import {Container} from 'semantic-ui-react';
import EventDashboard from '../features/events/eventsDashboard/eventDashboard';
import Navbar from '../features/nav/navbar/navBar';
import './App.css';

const App = () => {
 return(
     <>
    <Navbar/>
    <Container className="main">
    <EventDashboard/>
    </Container>
     </>
 )
};

export default App;
