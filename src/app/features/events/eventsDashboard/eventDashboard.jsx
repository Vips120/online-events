import React, {useState} from 'react';
import {Grid} from 'semantic-ui-react';
import {useSelector} from 'react-redux';
import EventForm from '../eventForm/eventForm';
import EventListItems from './event.list';
import {sampleData} from '../../../api/sampleData';

const EventDashboard = ({formOpen, setFormOpen, selectEvent,selectedEvent}) => {
    // const [events,setEvents] = useState(sampleData);
    let {events} = useSelector(state => state.event)  

    const handleCreateEvent = (event) => {
    //  setEvents([...events, event]);
    };

    const handleUpdateEvent = (updateEvent) => {
        // console.log('updateEvent', updateEvent);
        // setEvents(events.map(evt => evt.id === updateEvent.id ? updateEvent : evt));
        // selectEvent(null);
        // setFormOpen(false);
    };

    const handleDeleteEvent = (eventId) => {
        // setEvents(events.filter(evt => evt.id !== eventId));
    } 
return(
    <Grid>
        <Grid.Column width={10}>
             <EventListItems events={events} selectEvent={selectEvent} deleteEvent={handleDeleteEvent}/>
        </Grid.Column>
        <Grid.Column width={6}>
            {
                formOpen && <EventForm open={setFormOpen} 
                createEvent={handleCreateEvent}
                 selectedEvent={selectedEvent}
                 key={selectedEvent ? selectedEvent.id : null }
                 updateEvent = {handleUpdateEvent}
                />
            }

        </Grid.Column>
    </Grid>
)
};

export default EventDashboard

/// app -->
//  dashboard
//   list, sulist