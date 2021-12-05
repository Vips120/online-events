import React from 'react';
import EventListItem from './event.list.item';

const EventListItems = ({events, selectEvent,deleteEvent}) => {  
  return(
      <>
       {events.map(event => (
        <EventListItem event={event} key={event.id} selectEvent={selectEvent}
         deleteEvent={deleteEvent}
        />
       ))}

      </>
  )
};

export default EventListItems;