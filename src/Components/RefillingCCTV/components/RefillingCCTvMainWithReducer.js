import React, { useReducer } from 'react';
import InputGroup from './InputGroup';
import RadioButtonContainer from './RadioButtonContainer';
import ButtonGroup from './ButtonGroup';

const initialState = {
    // your initial state goes here
};

const reducer = (state, action) => {
    // your reducer logic goes here
};

const RefillingCCTvMainWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <InputGroup dispatch={dispatch} />
            <RadioButtonContainer dispatch={dispatch} />
            <ButtonGroup dispatch={dispatch} />
        </div>
    );
};

export default RefillingCCTvMainWithReducer;