import React from 'react';
import {Grid} from 'semantic-ui-react';
import EventDetailsChat from './eventDetailschat';
import EventDetailsHeader from './eventDetailsHeader';
import EventDetailsInfo from './eventDetailsInfo';
import EventDetailsSideBar from './eventDetailsSiderbar';
import {useSelector} from 'react-redux';
const EventDetailPage = ({match}) => {
    const event = useSelector(state => state.event.events.find(e => e.id === match.params.id));
return(
    <Grid>
        <Grid.Column width={10}>
            <EventDetailsHeader event={event}/>
            <EventDetailsInfo event={event}/>
            <EventDetailsChat/>
        </Grid.Column>
        <Grid.Column width={6}>
            <EventDetailsSideBar/>
        </Grid.Column>
    </Grid>
)
};

export default EventDetailPage;