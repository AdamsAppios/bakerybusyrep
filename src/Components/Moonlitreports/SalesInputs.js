import React from 'react';
import NumbersInput from './Helpers/NumbersInput';
import Customtext from './Helpers/Customtext';

function SalesInputs({ dispatch, totalCash, state, handleFocus, handleKeyPress, handleStringChange, handleTextboxChange}) {
  const clearNumberInputs = () => {
    dispatch({ type: 'clearNumbers' });
  }
    return (
      <div>
          <div>Total Cash:{totalCash}</div>
          <div>Fill up below:</div>
          <table>
          <tbody>
              <button onClick={clearNumberInputs}>Clear Money Inputs</button>
              <Customtext label="Time" name="time" value={state.time} OnChange={handleStringChange} handleFocus={handleFocus} Placeholder="Oras" />
              <Customtext label="Cashier" name="cashier" value={state.cashier} OnChange={handleStringChange} handleFocus={handleFocus} Placeholder="Pangan sa Cashier" />
              <NumbersInput Placeholder="Pila ka 1000" label="Cash 1000" name="textbox1000" value={state.textbox1000} onChange={handleTextboxChange} handleKeyPress={handleKeyPress} />
              <NumbersInput Placeholder="Pila ka 500" label="Cash 500" name="textbox500" value={state.textbox500} onChange={handleTextboxChange} handleKeyPress={handleKeyPress}  />
              <NumbersInput Placeholder="Pila ka 200" label="Cash 200" name="textbox200" value={state.textbox200} onChange={handleTextboxChange} handleKeyPress={handleKeyPress}  />
              <NumbersInput Placeholder="Pila ka 100" label="Cash 100" name="textbox100" value={state.textbox100} onChange={handleTextboxChange} handleKeyPress={handleKeyPress}  />
              <NumbersInput Placeholder="Pila ka 50" label="Cash 50" name="textbox50" value={state.textbox50} onChange={handleTextboxChange} handleKeyPress={handleKeyPress}  />
              <NumbersInput Placeholder="Pila ka 20" label="Cash 20" name="textbox20" value={state.textbox20} onChange={handleTextboxChange} handleKeyPress={handleKeyPress}  />
              <NumbersInput Placeholder="Pila ka 10" label="Coins 10" name="textbox10" value={state.textbox10} onChange={handleTextboxChange} handleKeyPress={handleKeyPress} />
              <NumbersInput Placeholder="Pila ka 5" label="Coins 5" name="textbox5" value={state.textbox5} onChange={handleTextboxChange} handleKeyPress={handleKeyPress} />
              <NumbersInput Placeholder="Pila ka 1" label="Coins 1" name="textbox1" value={state.textbox1} onChange={handleTextboxChange} handleKeyPress={handleKeyPress} />  
          </tbody>
          </table>    
      </div>
    );
    
  }
  
  export default SalesInputs;