import React from 'react';
import {Menu, Button,Image, Dropdown} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import customer from '../../../../assets/customer-1.jpg';
const SignedInMenu = ({signout}) => {
return(
    <Menu.Item position='right'>
    <Image avatar spaced="right" src={customer}  />
    <Dropdown pointing="top left" text="vs">
        <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/createEvent"  text="Create Event" icon="plus" />
            <Dropdown.Item text="My Profile" icon="user" />
            <Dropdown.Item text="SignedOut" 
            onClick={signout}
            icon="power" />
        </Dropdown.Menu>
    </Dropdown>
   </Menu.Item>
);
};

export default SignedInMenu;