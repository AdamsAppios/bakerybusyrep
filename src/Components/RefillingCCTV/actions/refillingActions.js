export const actionTypes = {
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

export const setValue = (field, value) => ({
    type: actionTypes.SET_VALUE,
    field,
    value
});

export const incrementValue = (field, value) => ({
    type: actionTypes.INCREMENT_VALUE,
    field,
    value
});

export const decrementValue = (field, value) => ({
    type: actionTypes.DECREMENT_VALUE,
    field,
    value
});

export const toggleColor = (color) => ({
    type: actionTypes.TOGGLE_COLOR,
    color
});

export const resetColor = () => ({
    type: actionTypes.RESET_COLOR
});

export const setSelectedOption = (value) => ({
    type: actionTypes.SET_SELECTED_OPTION,
    value
});

export const adjustCount = (option, adjustment) => ({
    type: actionTypes.ADJUST_COUNT,
    option,
    adjustment
});

export const resetMultipleCount = () => ({
    type: actionTypes.RESET_MULTIPLE_COUNT
});

export const saveData = () => ({
    type: actionTypes.SAVE_DATA
});

export const loadData = (value) => ({
    type: actionTypes.LOAD_DATA,
    value
});

export const setInputValue = (inputName, inputValue) => ({
    type: actionTypes.SET_INPUT_VALUE,
    inputName,
    inputValue
});