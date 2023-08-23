import {actionTypes} from './actionTypes';

export const reducer = (state, action) => {
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

