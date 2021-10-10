import React from 'react';
import { Segment,Item, Icon, List,Button } from 'semantic-ui-react';
import EventListAttendee from './eventAttendee';
import img from '../../../../assets/customer-2.jpg';

const EventListItem = () => {  
  return(
      <>
       <Segment.Group>
           <Segment>
               <Item.Group>
                   <Item>
                       <Item.Image size="tiny" circular src={img}  alt='sunil' />
                       <Item.Content>
                           <Item.Header content="Event Title" />
                           <Item.Description>
                               Hosted By Sunil
                           </Item.Description>
                       </Item.Content>
                   </Item>
               </Item.Group>
           </Segment>
           <Segment>
               <span>
                   <Icon name="clock"/>Date
                    <Icon name='point'/>location
               </span>
           </Segment>
           <Segment>
               <List horizontal>
                   <EventListAttendee/>
                   <EventListAttendee/>
                   <EventListAttendee/>
                   <EventListAttendee/>
               </List>
           </Segment>
           <Segment>
               <span>
                   Description Of event
               </span>
               <Button color="teal" floated="right" content="view"
               style={{
                   marginTop:'-7px'
               }}
               />
           </Segment>
       </Segment.Group>
      </>
  )
};

export default EventListItem;