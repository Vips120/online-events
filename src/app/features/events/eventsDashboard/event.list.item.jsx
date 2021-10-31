import React from 'react';
import { Segment,Item, Icon, List,Button } from 'semantic-ui-react';
import EventListAttendee from './eventAttendee';
import img from '../../../../assets/customer-2.jpg';

const EventListItem = ({event, selectEvent}) => {  
  return(
      <>
       <Segment.Group >
           <Segment >
               <Item.Group>
                   <Item>
                       <Item.Image size="tiny" circular src={event.hostPhotoUrl}  alt='sunil' />
                       <Item.Content>
                           <Item.Header content={event.title} />
                           <Item.Description>
                               Hosted By {event.hostedBy}
                           </Item.Description>
                       </Item.Content>
                   </Item>
               </Item.Group>
           </Segment>
           <Segment>
               <span>
                   <Icon name="clock"/>{event.date}
                    <Icon name='point'/>{event.address}
               </span>
           </Segment>
           <Segment clearing>
               <List horizontal>
                   {event.attendess.map(attende => (

<EventListAttendee  attende={attende}  key={attende.id}/>
                   ))}
               </List>
           </Segment>
           <Segment clearing>
               <span>
                   {event.description}
               </span>
               <Button color="teal" floated="right" content="view"
                 onClick={() => selectEvent(event)}
               />
           </Segment>
       </Segment.Group>
      </>
  )
};

export default EventListItem;