import React, {useState} from 'react';
import { Header, Segment, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import {useDispatch, useSelector} from 'react-redux';
import {Formik, Field,Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {createEvent,updateEvent} from '../eventAction';

const validationSchema  = Yup.object().shape({
    title: Yup.string(6).required('title is required'),
    category: Yup.string().required('category is required'),
    description: Yup.string(6).required('description is required'),
    city: Yup.string().required('city is required'),
    address: Yup.string().required('address is required'),
    date:Yup.date().required('date is required')
});


const EventForm = ({match}) => {
    const dispatch = useDispatch();
    const selectedEvent = useSelector(state => state.event.events.find(e => e.id === match.params.id));
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
        selectedEvent ? 
        dispatch(updateEvent({...selectedEvent, ...values})):
        dispatch(createEvent({...values, id: cuid(), hostPhotoUrl:'', hostedBy:'john Doe',attendess:[]}));
        // open(false);
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]:value})  // {title:'',}
    }
   return(
    <Formik 
    initialValues = {{
        title:'',
          category:'',
          description:'',
          city:'',
          address:'',
          date:''
    }}
    validationSchema={validationSchema}
    onSubmit=  {values => console.log(JSON.stringify(values))} 
    >
{({ errors, touched }) => (

<Segment clearing>
<Header content={ selectedEvent ? 'Edit the Event' : 'Create new event' } />
<Form>
<Form.Field className={errors.title && touched.title ? 'error' : 'success'}>
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
//    onClick={() => open(false)}
floated="right"  content="Cancel"/>
</Form>
</Segment>
)}


       </Formik>
   )
};

export default EventForm;