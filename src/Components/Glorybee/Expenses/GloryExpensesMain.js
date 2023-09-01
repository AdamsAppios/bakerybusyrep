import React, { useState } from 'react';
import Copytoclipboard from '../../Moonlitreports/Helpers/Copytoclipboard';

//Please move this to glory salesmain in the future, but you first need to reimplement the sales
// in usereducer methods to get a gist of it
const GloryExpensesMain = ({stringExpenses, setStringExpenses}) => {
  const initialInputBoxesExpenses = [{ id: 1 }, { id: 2 }, {id:3}, {id:4}, {id:5}, {id:6}, {id:7}, {id:8}, {id:9}, {id:10}, {id:11}, {id:12}, {id:13}, {id:14}, {id:15}, {id:16},{id:17}, {id:18},{id:19}, {id:20}, {id:21}, {id:22}, {id:23}];
  const [inputBoxesExpenses, setInputBoxesExpenses] = useState(initialInputBoxesExpenses);
  const [valuesExpenses, setValuesExpenses] = useState({});
  const [totalAmountExpenses, setTotalAmountExpenses] = useState(0);

  const handleInputChange = (event, index) => {
    const { id, value } = event.target;
    if (id.startsWith('amt') && isNaN(value)) {
      return; // Ignore non-numeric input for amounts
    }
    const updatedValues = { ...valuesExpenses, [id]: value };
    setValuesExpenses(updatedValues);

    // Update the total amount
    let sum = 0;
    for (let i = 0; i < inputBoxesExpenses.length; i++) {
      const amtValue = parseFloat(updatedValues[`amt${i}`] || '0');
      sum += amtValue;
    }
    setTotalAmountExpenses(sum);

    // Update the string report
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const philippineDate = currentDate.toLocaleDateString('en-PH', options);
    let report = `Gud evening nong Expenses Jedamsa ${philippineDate} : \n`;
    report += `${formatValuesAsString(updatedValues)}\n\n`;
    report+= `Total expenses nong: ${sum.toFixed(2)}`;
    setStringExpenses(report);
  };

  const formatValuesAsString = (updatedValues) => {
    let result = [];
    for (let i = 0; i < inputBoxesExpenses.length; i++) {
      const nameValue = updatedValues[`name${i}`] || '';
      const amtValue = updatedValues[`amt${i}`] || '';
      if (nameValue !== '' || amtValue !== '') {
        result.push(`${nameValue}=${amtValue}`);
      }
    }
    return result.join('\n');
  };

  const handleAddClick = () => {
    setInputBoxesExpenses([...inputBoxesExpenses, { id: inputBoxesExpenses.length + 1 }]);
  };

  const handleEraseAll = () => {
    setInputBoxesExpenses(initialInputBoxesExpenses); // Revert to initial input boxes
    setValuesExpenses({});                    // Clear values
    setTotalAmountExpenses(0);                // Reset total amount
    setStringExpenses('');              // Clear string report
  };

  return (
    <div>
      <h1>Glory Bee Expenses</h1>
      <Copytoclipboard stringReport={stringExpenses} handleEraseAll={handleEraseAll} copyButtonLabel="Copy Report" eraseButtonLabel="Erase All" readOnly />
      <br />
      <br />
      <h3>Total Amount:</h3>
      <pre>{totalAmountExpenses.toFixed(2)}</pre>
      <table>
      <tr>
        <th>Name</th>
        <th>Amount</th>
      </tr>
      {inputBoxesExpenses.map((box, index) => (
        //<div key={index}>
        <tr key={index}>
          <td>
            <input
              type="text"
              id={`name${index}`}
              placeholder={`Name ${index}`}
              value={valuesExpenses[`name${index}`] || ''} // Control the input value
              onChange={(event) => handleInputChange(event, index)}
            />
          </td>
          <td>
            <input
                type="number"
                id={`amt${index}`}
                placeholder={`Amount ${index}`}
                value={valuesExpenses[`amt${index}`] || ''}
                step="0.01"   // Step of 0.01 enforces decimal rounding off by two
                min="0"       // Minimum value allowed
                max="999999.99" // Maximum value allowed
                onChange={(event) => handleInputChange(event, index)}
            />
          </td>
        </tr>
        //</div>
      ))}
      </table>
      <br />
      <button onClick={handleAddClick}>Add Expenses Row</button>
    </div>
  );
};

export default GloryExpensesMain;