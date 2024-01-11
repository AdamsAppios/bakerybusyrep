import React from 'react';
import Copytoclipboard from '../../Moonlitreports/Helpers/Copytoclipboard';

const GlorySalesMain = ({state, dispatch}) => {

  const handleInputChange = (event, index) => {
    const { id, value } = event.target;
    if (id.startsWith('amt') && isNaN(value)) {
      return; // Ignore non-numeric input for amounts
    }
    const updatedValues = { ...state.valuesSales, [id]: value };
    dispatch({type:"SET_VALUES_SALES", payload:updatedValues})

    // Update the total amount
    let sum = 0;
    for (let i = 0; i < state.inputBoxesSales.length; i++) {
      const amtValue = parseFloat(updatedValues[`amt${i}`] || '0');
      sum += amtValue;
    }
    dispatch({type:"SET_TOTAL_AMOUNT_SALES", payload:sum})

    // Update the string report
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const philippineDate = currentDate.toLocaleDateString('en-PH', options);
    let report = `${philippineDate} Mao ni nahalin Nong : \n`;
    report += `${formatValuesAsString(updatedValues)}\n\n`;
    dispatch({type:"SET_STRING_SALES", payload: report})
  };

  const formatValuesAsString = (updatedValues) => {
    let result = [];
    for (let i = 0; i < state.inputBoxesSales.length; i++) {
      const nameValue = updatedValues[`name${i}`] || '';
      let amtValue = updatedValues[`amt${i}`] || '';
      amtValue = (amtValue == "") ? 0 : amtValue;
      if (nameValue !== '' || amtValue !== '') {
        result.push(`${nameValue}=${amtValue}`);
      }
    }
    return result.join('\n');
  };

  const handleAddClick = () => {
    dispatch({type:"SET_INPUT_BOXES_SALES", payload:[...state.inputBoxesSales, { id: state.inputBoxesSales.length + 1 }]})
  };

  const handleEraseAll = () => {
    dispatch({type:"SET_ERASE_SALES"})
  };

  return (
    <div>
      <h2> Glory Bee Sales</h2>
      <Copytoclipboard stringReport={state.stringSales} handleEraseAll={handleEraseAll} copyButtonLabel="Copy Report" eraseButtonLabel="Erase Sales" readOnly />
      <br />
      <br />
      <table>
      <tr>
        <th>Name</th>
        <th>Amount</th>
      </tr>
      {state.inputBoxesSales.map((box, index) => (
        <tr key={index}>
          <td>
            <input
              type="text"
              id={`name${index}`}
              placeholder={`Name ${index}`}
              value={state.valuesSales[`name${index}`] || ''}
              onChange={(event) => handleInputChange(event, index)}
            />
          </td>
          <td>
            <input
                type="number"
                id={`amt${index}`}
                placeholder={`Amount ${index}`}
                value={state.valuesSales[`amt${index}`] || ''}
                step="0.01"   // Step of 0.01 enforces decimal rounding off by two
                min="0"       // Minimum value allowed
                max="999999.99" // Maximum value allowed
                onChange={(event) => handleInputChange(event, index)}
            />
          </td>
        </tr>
      ))}
      </table>
      <br />
      <button onClick={handleAddClick}>Add Expenses Row</button>
      <h3>Total Amount:</h3>
      <pre>{state.totalAmountSales.toFixed(2)}</pre>
    </div>
  );
};

export default GlorySalesMain;