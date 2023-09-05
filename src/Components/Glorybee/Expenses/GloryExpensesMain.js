import React from 'react';
import Copytoclipboard from '../../Moonlitreports/Helpers/Copytoclipboard';
const GloryExpensesMain = ({state, dispatch}) => {

  const sortExpenses =  (inputString, totalSum) => {
      const header = "Gud evening nong Expenses Jedamsa";
      const dateRegex = /Jedamsa (\w+ \d+, \d{4})/;
    
      const matches = inputString.match(dateRegex);
      const date = matches && matches[1];
    
      if (!date) {
        console.log("Date not found.");
        return;
      }
    
      const headerWithDate = `${header} ${date} :`;
      const footer = `Total Expenses nong: ${totalSum}`;
    
      const lines = inputString.split('\n');
      const expenses = [];
    
      for (const line of lines) {
        const parts = line.split('=');
        if (parts.length === 2) {
          const itemName = parts[0].trim();
          const amount = parseFloat(parts[1]);
          if (!isNaN(amount)) {
            expenses.push({ itemName, amount });
          }
        }
      }
    
      expenses.sort((a, b) => b.amount - a.amount);
    
      const sortedExpensesString = expenses.map(expense => `${expense.itemName}=${expense.amount}`).join('\n');
      const result = `${headerWithDate}\n${sortedExpensesString}\n\n${footer}\n`;
    
      return result;
  }
  const handleInputChange = (event, index) => {
    const { id, value } = event.target;
    if (id.startsWith('amt') && isNaN(value)) {
      return; // Ignore non-numeric input for amounts
    }
    const updatedValues = { ...state.valuesExpenses, [id]: value };
    dispatch({type:"SET_VALUES_EXPENSES", payload: updatedValues })

    // Update the total amount
    let sum = 0;
    for (let i = 0; i < state.inputBoxesExpenses.length; i++) {
      const amtValue = parseFloat(updatedValues[`amt${i}`] || '0');
      sum += amtValue;
    }
    //setTotalAmountExpenses(sum);
    dispatch({action:'SET_TOTAL_AMOUNT_EXPENSES', payload:sum});

    // Update the string report
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const philippineDate = currentDate.toLocaleDateString('en-PH', options);
    let report = `Gud evening nong Expenses Jedamsa ${philippineDate} : \n`;
    report += `${formatValuesAsString(updatedValues)}\n\n`;
    report+= `Total expenses nong: ${sum.toFixed(2)}`;
    dispatch({type:"SET_STRING_EXPENSES", payload: sortExpenses(report,sum) });
  };

  const formatValuesAsString = (updatedValues) => {
    let result = [];
    for (let i = 0; i < state.inputBoxesExpenses.length; i++) {
      const nameValue = updatedValues[`name${i}`] || '';
      const amtValue = updatedValues[`amt${i}`] || '';
      if (nameValue !== '' || amtValue !== '') {
        result.push(`${nameValue}=${amtValue}`);
      }
    }
    return result.join('\n');
  };

  const handleAddClick = () => {
    //setInputBoxesExpenses([...inputBoxesExpenses, { id: inputBoxesExpenses.length + 1 }]);
    dispatch({
      type: 'SET_INPUT_BOXES_EXPENSES',
      payload: [...state.inputBoxesExpenses, { id: state.inputBoxesExpenses.length + 1 }]
    });
  };

  const handleEraseAll = () => {
    dispatch({type:"SET_ERASE_EXPENSES"});
  };

  return (
    <div>
      <h1>Glory Bee Expenses</h1>
      <Copytoclipboard stringReport={state.stringExpenses} handleEraseAll={handleEraseAll} copyButtonLabel="Copy Report" eraseButtonLabel="Erase Expenses" readOnly />
      <br />
      <br />
      <h3>Total Amount:</h3>
      <pre>{state.totalAmountExpenses.toFixed(2)}</pre>
      <table>
      <tr>
        <th>Name</th>
        <th>Amount</th>
      </tr>
      {state.inputBoxesExpenses.map((box, index) => (
        <tr key={index}>
          <td>
            <input
              type="text"
              id={`name${index}`}
              placeholder={`Name ${index}`}
              value={state.valuesExpenses[`name${index}`] || ''} // Control the input value
              onChange={(event) => handleInputChange(event, index)}
            />
          </td>
          <td>
            <input
                type="number"
                id={`amt${index}`}
                placeholder={`Amount ${index}`}
                value={state.valuesExpenses[`amt${index}`] || ''}
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
    </div>
  );
};

export default GloryExpensesMain;