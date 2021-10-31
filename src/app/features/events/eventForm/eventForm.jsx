import React, {useState} from 'react';
import { Header, Segment, Form, Button } from 'semantic-ui-react';
import cuid from 'cuid';


const EventForm = ({open,createEvent, selectedEvent}) => {
    const intititalValues = selectedEvent ?? {
          title:'',
          category:'',
          description:'',
          city:'',
          address:'',
          date:''
    };
    const [values, setValues]  = useState(intititalValues);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        createEvent({...values, id: cuid(), hostPhotoUrl:'', hostedBy:'john Doe',attendess:[]});
        open(false);
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]:value})  // {title:'',}
    }
   return(
       <Segment clearing>
           <Header content="Create new event" />
        <Form  onSubmit={handleFormSubmit}>
          <Form.Field>
              <input type="text" placeholder="event title"
               name='title'
              value={values.title} 
                onChange={(e => handleInputChange(e))}
               
              />
          </Form.Field>
          
          <Form.Field>
              <input type="text" placeholder="Category"
                            name='category'
                            value={values.category} 
                              onChange={(e => handleInputChange(e))}
              />
          </Form.Field>
          
          <Form.Field>
              <input type="text" placeholder="Description" 
                            name='description'
                            value={values.description} 
                              onChange={(e => handleInputChange(e))}
              />
          </Form.Field>
          
          <Form.Field>
              <input type="text" placeholder="City" 
                            name='city'
                            value={values.city} 
                              onChange={(e => handleInputChange(e))}
              />
          </Form.Field>
          
          <Form.Field>
              <input type="text" placeholder="address" 
                            name='address'
                            value={values.address} 
                              onChange={(e => handleInputChange(e))}
              />
          </Form.Field>
          
          <Form.Field>
              <input type="date" placeholder="Date" 
                            name='date'
                            value={values.date} 
                              onChange={(e => handleInputChange(e))}
              />
          </Form.Field>
          <Button type="submit" floated="right" positive content="submit"/>
          <Button type="submit"
           onClick={() => open(false)}
          floated="right"  content="Cancel"/>
        </Form>
       </Segment>
   )
};

export default EventForm;