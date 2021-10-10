import React from 'react';
import logo  from '../../../../assets/deliver.jpg';
import { Container,Menu,Button } from 'semantic-ui-react';
const Navbar = () => {
 return(
     <>
     <Menu inverted fixed="top">
         <Container>
             <Menu.Item header>
<img src={logo}   alt="logo" style={{marginRight:'15px'}}/>Online Events
             </Menu.Item>
             <Menu.Item>
                 <Button color="blue" inverted content="Create Event"/>
             </Menu.Item>
             <Menu.Item position='right'>
              <Button primary inverted content='Login' />
              <Button color='red' inverted content='Register' 
               style={{marginLeft: '0.8em'}}
              />
             </Menu.Item>
         </Container>
     </Menu>
     </>
 )
};

export default Navbar;