import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { Button } from 'semantic-ui-react';
import  {incrementAction,decrementAction}   from './testReducer';


export default function Sandbox() {
    const data = useSelector(state => state.test.data);
    const dispatch = useDispatch();
    console.log('data....', data);
    return(
        <>
        <h1>Testing Redux</h1>
        <h3>
            data: {data}
        </h3>
        <Button content='increment' color="green"
         onClick={() => dispatch(incrementAction(5))}
        />
        <Button content="decrement" color="red"
         onClick={() => dispatch(decrementAction(5))}
        />

        </>
    )
}

