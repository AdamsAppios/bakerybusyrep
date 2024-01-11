import React, { useEffect} from 'react';
import Customtext from './Helpers/Customtext';
import Copytoclipboard from './Helpers/Copytoclipboard';
function CoffeeInputs({handleOtherFocus, coffeeReport, setCoffeeReport, formValues, setFormValues}) {


  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value
    }));
  };

  const formatDateToCustom = (input) => {
    // Check if 'input' is a Date object
    if (!(input instanceof Date) || isNaN(input)) {
      // Handle invalid or non-Date inputs
      input = new Date();
    }
  
    return input.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleEraseAll = () => {
    setFormValues({
      date: new Date().toISOString().split('T')[0],
      halin: "",
      choco: "",
      coffee: "",
      caramel: "",
      cupsBeg: "",
      cupsEnd: ""
    });
  };

  useEffect(() => {
    // Get the current time
    const now = new Date();
    const currentHour = now.getHours();

    // Determine if it is AM or PM
    let greeting;
    if (currentHour >= 0 && currentHour < 12) {
      greeting = "AM";
    } else {
      greeting = "PM";
    }
    const allEmpty = Object.values(formValues).every((value) => value === '');

    let report = '';
    if (!allEmpty) {
      report += `Good ${greeting} Ma'am and Sir Sales sa coffee \n`
    
      Object.entries(formValues).forEach(([key, value]) => {
        if (value !== '') {
          if (key === 'date') {
            // Format the date using formatDateToCustom
            report += `${key}: ${formatDateToCustom(new Date(value))} \n`;
          } else {
            // Use the value as is for other keys
            report += `${key}: ${value} \n`;
          }
        }
      });
      report+= `Cups Used: ${formValues.cupsBeg - formValues.cupsEnd}`;
    }
    setCoffeeReport(report);
  }, [formValues]);

    return (
      <div>
        <Copytoclipboard stringReport={coffeeReport} handleEraseAll={handleEraseAll} copyButtonLabel="Copy Coffee Report" eraseButtonLabel="Erase Coffee All" readOnly />
        <table>
          <tbody>
              <Customtext Type="date" label="Date" name="date" Placeholder="Select Date" value={formValues.date || ''} OnChange={handleInputChange} handleFocus={handleOtherFocus} />
              <Customtext label="halin" name="halin"  Placeholder="Halin Sa Coffee" value={formValues.halin} OnChange={handleInputChange} handleFocus={handleOtherFocus} />
              <Customtext label="choco" name="choco" Placeholder="Choco End" value={formValues.choco} OnChange={handleInputChange} handleFocus={handleOtherFocus}/>
              <Customtext label="coffee" name="coffee" Placeholder="Coffee End" value={formValues.coffee} OnChange={handleInputChange} handleFocus={handleOtherFocus}/>
              <Customtext label="caramel" name="caramel" Placeholder="Caramel End" value={formValues.caramel} OnChange={handleInputChange} handleFocus={handleOtherFocus}/>
              <Customtext label="cupsBeg" name="cupsBeg" Placeholder="Cups Beg" value={formValues.cupsBeg} OnChange={handleInputChange} handleFocus={handleOtherFocus}/>
              <Customtext label="cupsEnd" name="cupsEnd" Placeholder="Cups End" value={formValues.cupsEnd} OnChange={handleInputChange} handleFocus={handleOtherFocus}/>            
              
         </tbody>
        </table>
      </div>
    );
    
  }
  
  export default CoffeeInputs;