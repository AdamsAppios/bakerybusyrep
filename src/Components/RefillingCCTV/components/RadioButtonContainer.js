import React from 'react';

const RadioButtonContainer = ({ dispatch }) => {
    return (
        <div>
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
        </div>
    );
};

export default RadioButtonContainer;