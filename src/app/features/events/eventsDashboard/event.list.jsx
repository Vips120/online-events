import React from 'react';
import EventListItem from './event.list.item';

const EventListItems = ({events, selectEvent}) => {  
  return(
      <>
       {events.map(event => (
        <EventListItem event={event} key={event.id} selectEvent={selectEvent}/>
       ))}

      </>
  )
};

export default EventListItems;