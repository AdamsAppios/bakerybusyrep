import React, { useState, useEffect} from 'react';
import Customtext from './Helpers/Customtext';
import Copytoclipboard from './Helpers/Copytoclipboard';
function CoffeeInputs({state, handleKeyPress, hschange, handleOtherFocus}) {
  const [coffeeReport, setCoffeeReport] = useState("");
  const [formValues, setFormValues] = useState({
    halin: "",
    choco: "",
    coffee: "",
    caramel: "",
    cupsBeg: "",
    cupsEnd: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value
    }));
  };

  const handleEraseAll = () => {
    setFormValues({
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
      report += `Good ${greeting} Ma'am/Sir Sales sa coffee \n`
    
      Object.entries(formValues).forEach(([key, value]) => {
        if (value !== '') {
          report += `${key}: ${value} \n`;
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