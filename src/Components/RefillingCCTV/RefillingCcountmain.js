import {initialState } from './State and Reducer/state';
import {actionTypes} from './State and Reducer/actionTypes';
import {reducer} from './State and Reducer/reducer';
import InputGroup from './Components/InputGroup';
import RadioButtonGroup from './Components/RadioButtonGroup';
import ButtonGroup from './Components/ButtonGroup';
import DropdownSelectorGroup from './Components/DropdownSelectorGroup';
import { toggleBackgroundColor } from './Utilities/utils';
import { useReducer, useEffect } from 'react';

const RefillingCcountMain = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const radioOptions = [
        { value: 'dealer', label: 'Dealer' },
        { value: 'pickup', label: 'Pickup' },
        { value: 'small', label: 'Small' },
        { value: 'square', label: 'Square' },
        { value: 'smallSquare', label: 'Small Square' },
    ];
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter' && event.target.tagName !== 'INPUT') {
                handleAdd();  // Execute the function when Enter is pressed
                event.preventDefault(); // This stops the default action of the Enter key
            } else if (event.key === '-') {
                handleSub();  // Execute the function when - (dash) is pressed
                event.preventDefault(); // This stops the default action of the dash key, if required
            }
        };
        // Attaching the event listener
        document.addEventListener('keydown', handleKeyDown);

        // Cleanup: removing the event listener when the component unmounts
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [state.multipleCount,state.isBlue, state.isRed, state.pickupCount, state.dealerCount, state.smallCount, state.smallSquareCount, state.squareCount, state.selectedOption]); 

    const handleChange = (event) => {
        dispatch({
            type: actionTypes.SET_SELECTED_OPTION,
            value: event.target.value
        });
    };
    
    const handleAdd = () => {
        toggleBackgroundColor('blue', dispatch, state);
        dispatch({
            type: actionTypes.ADJUST_COUNT,
            option: state.selectedOption,
            adjustment: 1 * state.multipleCount,
            messagePrefix: "Plus"
        });
        dispatch({ type: actionTypes.RESET_MULTIPLE_COUNT });
    };
    
    const handleSub = () => {
        toggleBackgroundColor('red', dispatch, state);
        dispatch({
            type: actionTypes.ADJUST_COUNT,
            option: state.selectedOption,
            adjustment: -1 * state.multipleCount,
            messagePrefix: "Minus"
        });
        dispatch({ type: actionTypes.RESET_MULTIPLE_COUNT });
    };

    const handleSave = () => {
        dispatch({
            type: actionTypes.SAVE_DATA
        });
    };
    
    const handleLoad = () => {
        dispatch({
            type: actionTypes.LOAD_DATA,
            value: state.textAreaValue
        });
    };
    
    const setInputValue = (inputName, inputValue) => {
        dispatch({
            type: actionTypes.SET_INPUT_VALUE,
            inputName,
            inputValue
        });
    };

    const bodyStyle = {
        backgroundColor: state.isBlue ? 'blue' : (state.isRed ? 'red' : state.originalBackgroundColor),
        minHeight: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
    };


    return (
        <div style={bodyStyle}>
            <InputGroup label="Date:" value={state.date} onChange={(e) => setInputValue('date', e.target.value)} />
            <InputGroup label="Time:" value={state.time} onChange={(e) => setInputValue('time', e.target.value)} />
            <DropdownSelectorGroup
                label="Dropdown"
                value={state.selectedDropdownValue}
                onChange={(e) => setInputValue('selectedDropdownValue', e.target.value)}
            />
            <InputGroup label="Time:" value={state.time} onChange={(e) => setInputValue('time', e.target.value)} />
            <InputGroup
                label="Multiple"
                value={state.multipleCount}
                onChange={(e) => setInputValue('multipleCount', Number(e.target.value))}
            />

            <InputGroup
                label="Dealer"
                value={state.dealerCount}
                onChange={(e) => setInputValue('dealerCount', Number(e.target.value))}
            />

            <InputGroup
                label="Pickup"
                value={state.pickupCount}
                onChange={(e) => setInputValue('pickupCount', Number(e.target.value))}
            />

            <InputGroup
                label="Small"
                value={state.smallCount}
                onChange={(e) => setInputValue('smallCount', Number(e.target.value))}
            />

            <InputGroup
                label="Square"
                value={state.squareCount}
                onChange={(e) => setInputValue('squareCount', Number(e.target.value))}
            />

            <InputGroup
                label="Small Square"
                value={state.smallSquareCount}
                onChange={(e) => setInputValue('smallSquareCount', Number(e.target.value))}
            />

            <RadioButtonGroup 
                options={radioOptions}
                selectedValue={state.selectedOption}
                onChange={handleChange}
            />
            <ButtonGroup buttons={ [{ label: 'Add', onClick: handleAdd },
                                    { label: 'Subtract', onClick: handleSub },]} />
            <div style={{margin: '10px 0',}}>
                <textarea 
                    value={state.textAreaValue} 
                    onChange={(e) => setInputValue('textAreaValue', e.target.value)}
                    rows="8"
                    cols="50"
                ></textarea>
            </div>
            <ButtonGroup buttons={ [{ label: 'Save', onClick: handleSave },
                                    { label: 'Load', onClick: handleLoad },]} />
        </div>
    );

};

export default RefillingCcountMain;