import React from 'react';
import {List,Image} from 'semantic-ui-react'
import imgU from '../../../../assets/customer-1.jpg'

const EventListAttendee = () => {  
 let img = {
     imgUrl:imgU
 }
  return(
      <>
      <List.Item>

      <Image size="mini" circular src={img.imgUrl}  alt="public"/>
      </List.Item>
      </> 
  )
};

export default EventListAttendee;