import React from 'react';
import {Menu, Button} from 'semantic-ui-react';

const SignedOutMenu = ({setAuthenticated}) => {
return(
    <Menu.Item position='right'>
    <Button primary inverted content='Login'
    onClick={() => setAuthenticated(true)}
    />
    <Button color='red' inverted content='Register' 
     style={{marginLeft: '0.8em'}}
    />
   </Menu.Item>
);
};

export default SignedOutMenu;