import React, { useState } from 'react';
import Copytoclipboard from '../../Moonlitreports/Helpers/Copytoclipboard';

const GlorySalesMain = () => {
  const initialInputBoxes = [{ id: 1 }, { id: 2 }, {id:3}, {id:4}, {id:5}, {id:6}, {id:7}, {id:8}, {id:9}, {id:10}];
  const [inputBoxes, setInputBoxes] = useState(initialInputBoxes);
  const [values, setValues] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);
  const [stringReport, setStringReport] = useState('');

  const handleInputChange = (event, index) => {
    const { id, value } = event.target;
    if (id.startsWith('amt') && isNaN(value)) {
      return; // Ignore non-numeric input for amounts
    }
    const updatedValues = { ...values, [id]: value };
    setValues(updatedValues);

    // Update the total amount
    let sum = 0;
    for (let i = 0; i < inputBoxes.length; i++) {
      const amtValue = parseFloat(updatedValues[`amt${i}`] || '0');
      sum += amtValue;
    }
    setTotalAmount(sum);

    // Update the string report
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const philippineDate = currentDate.toLocaleDateString('en-PH', options);
    let report = `Gud evening nong Expenses Jedamsa ${philippineDate} : \n`;
    report += `${formatValuesAsString(updatedValues)}\n\n`;
    report+= `Total expenses nong: ${sum.toFixed(2)}`;
    setStringReport(report);
  };

  const formatValuesAsString = (updatedValues) => {
    let result = [];
    for (let i = 0; i < inputBoxes.length; i++) {
      const nameValue = updatedValues[`name${i}`] || '';
      const amtValue = updatedValues[`amt${i}`] || '';
      if (nameValue !== '' || amtValue !== '') {
        result.push(`${nameValue}=${amtValue}`);
      }
    }
    return result.join('\n');
  };

  const handleAddClick = () => {
    setInputBoxes([...inputBoxes, { id: inputBoxes.length + 1 }]);
  };

  const handleEraseAll = () => {
    setInputBoxes(initialInputBoxes); // Revert to initial input boxes
    setValues({});                    // Clear values
    setTotalAmount(0);                // Reset total amount
    setStringReport('');              // Clear string report
  };

  return (
    <div>
      <Copytoclipboard stringReport={stringReport} handleEraseAll={handleEraseAll} copyButtonLabel="Copy Report" eraseButtonLabel="Erase All" readOnly />
      <br />
      <br />
      {inputBoxes.map((box, index) => (
        <div key={index}>
          <input
            type="text"
            id={`name${index}`}
            placeholder={`Name ${index}`}
            value={values[`name${index}`] || ''} // Control the input value
            onChange={(event) => handleInputChange(event, index)}
          />
          <input
            type="text"
            id={`amt${index}`}
            placeholder={`Amount ${index}`}
            value={values[`amt${index}`] || ''} // Control the input value
            onChange={(event) => handleInputChange(event, index)}
          />
        </div>
      ))}
      <br />
      <button onClick={handleAddClick}>Add Expenses Row</button>

      <h3>Values:</h3>
      <pre>{formatValuesAsString(values)}</pre>
      <h3>Total Amount:</h3>
      <pre>{totalAmount.toFixed(2)}</pre>
    </div>
  );
};

export default GlorySalesMain;