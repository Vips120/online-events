import React, {useState} from 'react';
import {Grid} from 'semantic-ui-react';
import EventForm from '../eventForm/eventForm';
import EventListItems from './event.list';
import {sampleData} from '../../../api/sampleData';

const EventDashboard = ({formOpen, setFormOpen, selectEvent,selectedEvent}) => {
    const [events,setEvents] = useState(sampleData);

    const handleCreateEvent = (event) => {
     setEvents([...events, event]);
    };

return(
    <Grid>
        <Grid.Column width={10}>
             <EventListItems events={events} selectEvent={selectEvent}/>
        </Grid.Column>
        <Grid.Column width={6}>
            {
                formOpen && <EventForm open={setFormOpen} createEvent={handleCreateEvent}
                 selectedEvent={selectedEvent}
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