import {initialState } from './State and Reducer/state';
import {reducer} from './State and Reducer/reducer';
import InputGroup from './Components/InputGroup';
import RadioButtonGroup from './Components/RadioButtonGroup';
import ButtonGroup from './Components/ButtonGroup';
import { toggleBackgroundColor, speakMessage } from './Utilities/utils';
import { useReducer } from 'react';

const RefillingCCTVMainWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
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
        toggleBackgroundColor('blue');
        dispatch({
            type: actionTypes.ADJUST_COUNT,
            option: state.selectedOption,
            adjustment: 1 * state.multipleCount,
            messagePrefix: "Plus"
        });
        dispatch({ type: actionTypes.RESET_MULTIPLE_COUNT });
    };
    
    const handleSub = () => {
        toggleBackgroundColor('red');
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

    return (
        <div style={bodyStyle}>
            <InputGroup label="Date:" value={state.date} onChange={(e) => setInputValue('date', e.target.value)} />
            <InputGroup label="Time:" value={state.time} onChange={(e) => setInputValue('time', e.target.value)} />
            <DropdownSelectorGroup
                label="Dropdown"
                value={state.selectedDropdownValue}
                onChange={(newValue) => setInputValue('selectedDropdownValue', newValue)}
            />

            <div style={inputGroupStyle}>
                <label>Date: </label>
                <input type="date" value={state.date} onChange={(e) => setInputValue('date', e.target.value)} />
            </div>
            <div style={inputGroupStyle}>
                <label>Time: </label>
                <input type="time" value={state.time} onChange={(e) => setInputValue('time', e.target.value)} />
            </div>
            <div style={inputGroupStyle}>
                <label>Dropdown: </label>
                <select 
                    value={state.selectedDropdownValue} 
                    onChange={(e) => setInputValue('selectedDropdownValue', e.target.value)}
                >
                    <option value="Bellaswan">Bellaswan</option>
                    <option value="ARSO">ARSO</option>
                    <option value="Kalimpio">Kalimpio</option>
                    <option value="Goldswan">Goldswan</option>
                </select>
            </div>
            <div style={inputGroupStyle}>
                <label>Multiple: </label>
                <input 
                    type="text" 
                    value={state.multipleCount} 
                    onChange={(e) => setInputValue('multipleCount', Number(e.target.value))} 
                />
            </div>
            <div style={inputGroupStyle}>
                <label>Dealer: </label>
                <input 
                    type="text" 
                    value={state.dealerCount} 
                    onChange={(e) => setInputValue('dealerCount', Number(e.target.value))} 
                />
            </div>
            <div style={inputGroupStyle}>
                <label>Pickup: </label>
                <input 
                    type="text" 
                    value={state.pickupCount} 
                    onChange={(e) => setInputValue('pickupCount', Number(e.target.value))} 
                />
            </div>
            <div style={inputGroupStyle}>
                <label>Small: </label>
                <input 
                    type="text" 
                    value={state.smallCount} 
                    onChange={(e) => setInputValue('smallCount', Number(e.target.value))} 
                />
            </div>
            <div style={inputGroupStyle}>
                <label>Square: </label>
                <input 
                    type="text" 
                    value={state.squareCount} 
                    onChange={(e) => setInputValue('squareCount', Number(e.target.value))} 
                />
            </div>
            <div style={inputGroupStyle}>
                <label>Small Square: </label>
                <input 
                    type="text" 
                    value={state.smallSquareCount} 
                    onChange={(e) => setInputValue('smallSquareCount', Number(e.target.value))} 
                />
            </div>
            <div style={radioButtonContainerStyle}>
                <div>
                    <input
                        type="radio"
                        value="dealer"
                        checked={state.selectedOption === 'dealer'}
                        onChange={handleChange}
                    />
                    <label>Dealer</label>
                </div>
                <div>
                    <input
                        type="radio"
                        value="pickup"
                        checked={state.selectedOption === 'pickup'}
                        onChange={handleChange}
                    />
                    <label>Pickup</label>
                </div>
                <div>
                    <input
                        type="radio"
                        value="small"
                        checked={state.selectedOption === 'small'}
                        onChange={handleChange}
                    />
                    <label>Small</label>
                </div>
                <div>
                    <input
                        type="radio"
                        value="square"
                        checked={state.selectedOption === 'square'}
                        onChange={handleChange}
                    />
                    <label>Square</label>
                </div>
                <div>
                    <input
                        type="radio"
                        value="smallSquare"
                        checked={state.selectedOption === 'smallSquare'}
                        onChange={handleChange}
                    />
                    <label>Small Square</label>
                </div>
            </div>
            <div style={buttonGroupStyle}>
                <button onClick={handleAdd}>Add</button>
                <button onClick={handleSub}>Subtract</button>
            </div>
            <div style={inputGroupStyle}>
                <textarea 
                    value={state.textAreaValue} 
                    onChange={(e) => setInputValue('textAreaValue', e.target.value)}
                    rows="8"
                    cols="50"
                ></textarea>
            </div>
            <div style={buttonGroupStyle}>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleLoad}>Load</button>
            </div>
        </div>
    );

};

export default RefillingCCTVMainWithReducer;