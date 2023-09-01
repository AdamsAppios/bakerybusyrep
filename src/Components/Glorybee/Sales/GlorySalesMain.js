import React from 'react';
import Copytoclipboard from '../../Moonlitreports/Helpers/Copytoclipboard';

const GlorySalesMain = ({stringSales, setStringSales, inputBoxesSales, setInputBoxesSales, 
  valuesSales, setValuesSales, totalAmountSales, 
  setTotalAmountSales, defaultNames, initialInputBoxesSales, getDefaultValues}) => {


  const handleInputChange = (event, index) => {
    const { id, value } = event.target;
    if (id.startsWith('amt') && isNaN(value)) {
      return; // Ignore non-numeric input for amounts
    }
    const updatedValues = { ...valuesSales, [id]: value };
    setValuesSales(updatedValues);

    // Update the total amount
    let sum = 0;
    for (let i = 0; i < inputBoxesSales.length; i++) {
      const amtValue = parseFloat(updatedValues[`amt${i}`] || '0');
      sum += amtValue;
    }
    setTotalAmountSales(sum);

    // Update the string report
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const philippineDate = currentDate.toLocaleDateString('en-PH', options);
    let report = `${philippineDate} Mao ni nahalin Nong : \n`;
    report += `${formatValuesAsString(updatedValues)}\n\n`;
    setStringSales(report);
  };

  const formatValuesAsString = (updatedValues) => {
    let result = [];
    for (let i = 0; i < inputBoxesSales.length; i++) {
      const nameValue = updatedValues[`name${i}`] || '';
      const amtValue = updatedValues[`amt${i}`] || '';
      if (nameValue !== '' || amtValue !== '') {
        result.push(`${nameValue}=${amtValue}`);
      }
    }
    return result.join('\n');
  };

  const handleAddClick = () => {
    setInputBoxesSales([...inputBoxesSales, { id: inputBoxesSales.length + 1 }]);
  };

  const handleEraseAll = () => {
    setInputBoxesSales(initialInputBoxesSales); // Revert to initial input boxes
    setValuesSales(getDefaultValues(defaultNames)); // Reset to default names
    setTotalAmountSales(0); // Reset total amount
    setStringSales(''); // Clear string report
  };

  return (
    <div>
      <h2> Glory Bee Sales</h2>
      <Copytoclipboard stringReport={stringSales} handleEraseAll={handleEraseAll} copyButtonLabel="Copy Report" eraseButtonLabel="Erase All" readOnly />
      <br />
      <br />
      <table>
      <tr>
        <th>Name</th>
        <th>Amount</th>
      </tr>
      {inputBoxesSales.map((box, index) => (
        <tr key={index}>
          <td>
            <input
              type="text"
              id={`name${index}`}
              placeholder={`Name ${index}`}
              value={valuesSales[`name${index}`] || ''}
              onChange={(event) => handleInputChange(event, index)}
            />
          </td>
          <td>
            <input
                type="number"
                id={`amt${index}`}
                placeholder={`Amount ${index}`}
                value={valuesSales[`amt${index}`] || ''}
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
      <pre>{totalAmountSales.toFixed(2)}</pre>
    </div>
  );
};

export default GlorySalesMain;