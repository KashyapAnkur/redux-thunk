import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionIncrease, actionDecrease, asyncincrease} from '../actions';
function ReduxApp() {

    const selector = useSelector(state => state);

    const dispatch = useDispatch();
    console.log(selector);

    const increase = () => {
        dispatch(actionIncrease());
    }

    const decrease = () => {
        dispatch(actionDecrease());
    }

    const aincrease = () => {
        dispatch(asyncincrease());
    }
    
    return (
        <>
            <br />
            Count: {selector.count.count}<br /><br />
            <button onClick={increase}>Increase by 1</button><br /><br />
            <button onClick={decrease}>Decrease by 1</button><br /><br />
            <button onClick={aincrease}>Increase by 10(wait for 3 seconds)</button>
        </>
    )
}

export default ReduxApp;