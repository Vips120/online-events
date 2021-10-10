import React from 'react';
import {Grid} from 'semantic-ui-react';
import EventListItems from './event.list';
const EventDashboard = () => {
return(
    <Grid>
        <Grid.Column width={10}>
             <EventListItems/>
        </Grid.Column>
        <Grid.Column width={6}>
         <h2>RIGHT COLUMN</h2>
        </Grid.Column>
    </Grid>
)
};

export default EventDashboard