import React, { useReducer, useEffect } from 'react';

const initialState = {
    isBlue: false,
    isRed: false,
    originalBackgroundColor: '',
    pickupCount: 0,
    dealerCount: 0,
    smallCount: 0,
    squareCount: 0,
    smallSquareCount: 0,
    selectedDropdownValue: "Bellaswan",
    date: "",
    time: "",
    textAreaValue: "",
    multipleCount: "1",
    selectedOption: 'pickup'
};

const actionTypes = {
    SET_VALUE: 'SET_VALUE',
    INCREMENT_VALUE: 'INCREMENT_VALUE',
    DECREMENT_VALUE: 'DECREMENT_VALUE',
    TOGGLE_COLOR: 'TOGGLE_COLOR',
    RESET_COLOR: 'RESET_COLOR',
    SET_SELECTED_OPTION: 'SET_SELECTED_OPTION',
    ADJUST_COUNT: 'ADJUST_COUNT',
    RESET_MULTIPLE_COUNT: 'RESET_MULTIPLE_COUNT',
    SAVE_DATA: 'SAVE_DATA',
    LOAD_DATA: 'LOAD_DATA',
    SET_INPUT_VALUE: 'SET_INPUT_VALUE'
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.ADJUST_COUNT:
            switch (action.option) {
                case 'dealer':
                    return { ...state, multipleCount: "1" , dealerCount: state.dealerCount + action.adjustment };
                case 'pickup':
                    return { ...state, multipleCount: "1", pickupCount: state.pickupCount + action.adjustment };
                case 'small':
                    return { ...state, multipleCount: "1", smallCount: state.smallCount + action.adjustment };
                case 'square':
                    return { ...state, multipleCount: "1", squareCount: state.squareCount + action.adjustment };
                case 'smallSquare':
                    return { ...state, multipleCount: "1",smallSquareCount: state.smallSquareCount + action.adjustment };
                default:
                    return state;
            }
        case actionTypes.SET_SELECTED_OPTION:
            return { ...state, selectedOption: action.value };
        case actionTypes.SET_VALUE:
            return { ...state, [action.field]: action.value };
        case actionTypes.INCREMENT_VALUE:
            return { ...state, [action.field]: state[action.field] + action.value * state.multipleCount };
        case actionTypes.DECREMENT_VALUE:
            return { ...state, [action.field]: state[action.field] - action.value * state.multipleCount };
        case actionTypes.TOGGLE_COLOR:
            return {
                ...state,
                isBlue: action.color === 'blue' ? !state.isBlue : false,
                isRed: action.color === 'red' ? !state.isRed : false
            };
        case actionTypes.RESET_COLOR:
            return { ...state, isBlue: false, isRed: false };
        case actionTypes.SAVE_DATA:
            const dataString = `
                Date=${state.date};
                Time=${state.time};
                Dropdown=${state.selectedDropdownValue};
                Dealer=${state.dealerCount};
                Pickup=${state.pickupCount};
                Small=${state.smallCount};
                Square=${state.squareCount};
                SmallSquare=${state.smallSquareCount};
            `;
            return { ...state, textAreaValue: dataString };

        case actionTypes.LOAD_DATA:
            const values = action.value.split(";").reduce((acc, item) => {
                const [key, value] = item.split("=").map(str => str.trim());
                if (key && value) acc[key] = value;
                return acc;
            }, {});

            return {
                ...state,
                date: values.Date || state.date,
                time: values.Time || state.time,
                selectedDropdownValue: values.Dropdown || state.selectedDropdownValue,
                dealerCount: Number(values.Dealer) || state.dealerCount,
                pickupCount: Number(values.Pickup) || state.pickupCount,
                smallCount: Number(values.Small) || state.smallCount,
                squareCount: Number(values.Square) || state.squareCount,
                smallSquareCount: Number(values.SmallSquare) || state.smallSquareCount
            };
        case actionTypes.SET_INPUT_VALUE:
            return { ...state, [action.inputName]: action.inputValue };

        default:
            return state;
    }
};

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

    const toggleBackgroundColor = (color) => {
        // If the original background color is not set, get it and update the state
        if (!state.originalBackgroundColor) {
            const body = document.body;
            dispatch({ 
                type: actionTypes.SET_VALUE, 
                field: 'originalBackgroundColor', 
                value: getComputedStyle(body).backgroundColor 
            });
        }
    
        // Handle the blue color
        if (color === 'blue') {
            dispatch({ type: actionTypes.TOGGLE_COLOR, color: 'blue' });
            speakMessage(`Plus ${state.selectedOption}`);
        } 
        // Handle the red color
        else if (color === 'red') {
            dispatch({ type: actionTypes.TOGGLE_COLOR, color: 'red' });
            speakMessage(`Minus ${state.selectedOption}`);
        }
    
        // Reset colors after 100 milliseconds
        setTimeout(() => {
            dispatch({ type: actionTypes.RESET_COLOR });
        }, 100);
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

    const inputGroupStyle = {
        margin: '10px 0',  // this adds 10px margin to the top and bottom
    };

    const radioButtonContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        gap: '15px',
        margin: '10px 0',
    };

    const buttonGroupStyle = {
        display: 'flex',
        gap: '10px',
        margin: '10px 0',
    };


    const speakMessage = (message) => {
        if ('speechSynthesis' in window) {
            const synth = window.speechSynthesis;
    
            // Cancel any ongoing or pending speech
            synth.cancel();
    
            const utterance = new SpeechSynthesisUtterance(message);
            utterance.rate = 2.7; 
            synth.speak(utterance);
        }
    };

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