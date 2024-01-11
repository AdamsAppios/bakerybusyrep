import React, { useReducer, useState, useEffect} from 'react';
import Copytoclipboard from './Helpers/Copytoclipboard';
import SalesInputs from './SalesInputs';
import OtherInputs from './OtherInputs';
import CoffeeInputs from './CoffeeInputs';
const InitialState = {
  time: '',
  cashier : '',
  textbox1000: '',
  textbox500: '',
  textbox200: '',
  textbox100: '',
  textbox50: '',
  textbox20: '',
  textbox10: '',
  textbox5: '',
  textbox1: '',
  SB : '',
  Coins : '',
  Toasted : '',
  NSSale : '',
  NSStocks : '',
  SD : '',
  Mineral : '',
  Mantika : '',
  Pullouts : '',
  Accounts : '',
  Workers : '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'changeTextbox':
      const { textboxNumber, value } = action.payload;
      return { ...state, [`textbox${textboxNumber}`]: value };
    case 'changeString':
      const { name } = action.payload;
      return { ...state, [name]: action.payload.value };
    case 'changeMakeReport':
      return {...state, ...action.payload};
    case "clearNumbers":
      const clearedState = { ...state };
      ['textbox1000', 'textbox500', 'textbox200', 'textbox100', 'textbox50', 'textbox20', 'textbox10', 'textbox5', 'textbox1'].forEach(key => {
        clearedState[key] = '';
      });
      return clearedState;
    case "resetAll":
      return InitialState;
    default:
      return state;
  }
}



function Sendreport() {
  const [state, dispatch] = useReducer(reducer, InitialState);
  const [activeTab, setActiveTab] = useState(1);
  const [cashSum, setCashSum] = useState(0);
  const [stringReport, setStringReport] = useState('');

  //coffee inputs:

  const [coffeeReport, setCoffeeReport] = useState("");
  const [formValues, setFormValues] = useState({
    // Format the current date to YYYY-MM-DD format
    date: new Date().toISOString().split('T')[0],
    halin: "",
    choco: "",
    coffee: "",
    caramel: "",
    cupsBeg: "",
    cupsEnd: ""
  });

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };


  useEffect(() => {
    let makeReport = "";
    let cashSum=0;
    makeReport += `Cashier: ${state.cashier} - ${state.time} \n`;
    for (let key in state) {
      if (key.startsWith('textbox') && state.hasOwnProperty(key) && state[key] !== '') {
        let value = parseInt(state[key]);
        let multiple = parseInt(key.slice(7))
        let multiply = value * multiple;
        cashSum += multiply;
        makeReport += `${multiple}x${value} = ${multiply}\n`;
      }
    }
    makeReport += `Total: ${cashSum}\n`;
    let OtherReport = '';
    let foundSB = false;
    let anyHasValue=false;
    for (let key in state) {
      if (state.hasOwnProperty(key)) {
        if (key === "SB") {
          foundSB = true;
        }
        if (foundSB) {
          if (state[key] !== "") {
            anyHasValue = true;
          }
          if (key=== 'Mineral') {
            if (state[key] !== "")
              OtherReport +=`${key} = ${state[key]} x 15 = ${state[key]*15}\n`;
            else
              OtherReport += `${key} = None\n`;            
          } else if (key === 'Pullouts' || key === "Accounts" || key === "Workers") {
            OtherReport += `${key} = \n${state[key]}\n\n`;
          } else {
          OtherReport +=`${key} = ${state[key]}\n`;
          }
        }
      }
    }
    //OtherReport += `\nPullouts: \n${state.Pullouts}\n\nAccounts: \n${state.Accounts}\n\nWorkers: \n${state.Workers} `;
    makeReport += (anyHasValue === true ) ? OtherReport : '' ;
    setCashSum(cashSum)
    setStringReport(makeReport)
  }, [state]);

  const handleFocus = (e) => {
    const { name } = e.target;
    const regex = /\d+/;
    const textboxNumber = name.match(regex)[0];
    const value = "";
    dispatch({ type: 'changeTextbox', payload: { textboxNumber, value } }); 
  }
  

  function handleTextboxChange(event) {
    const { name, value } = event.target;
    const regex = /\d+/;
    const textboxNumber = name.match(regex)[0];
    dispatch({ type: 'changeTextbox', payload: { textboxNumber, value } });
  }
  
  const handleOtherFocus = (e) => {
    const { name } = e.target;
    const value = "";
    dispatch({ type: 'changeString', payload: { name, value } }); 
  }
  const hschange =(event)=> {
    const { name, value } = event.target;
    console.log(` name ${name}, value ${value} `);
    dispatch({ type: 'changeString', payload: { name, value } });
  }



  const handleKeyPress = (event) => {
    // Allow only numbers and the operators '+', '-', '*', '/' to be entered
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    const regex = /^[0-9+\-*/]*$/;

    if (!regex.test(keyValue)) {
      event.preventDefault();
    }
  };

  const handleEraseAll = () => {
    dispatch({ type: 'resetAll'});
  }



  return (
    <div>
      <Copytoclipboard stringReport={stringReport} handleEraseAll={handleEraseAll} copyButtonLabel="Copy Report" eraseButtonLabel="Erase All" readOnly />
      <br />
      <div className="tabs">
        <div className="tab-header">
          <div
            className={`tab-item ${activeTab === 1 ? "active" : ""}`}
            onClick={() => handleTabClick(1)}
          >
            Money Sales
          </div>
          <div
            className={`tab-item ${activeTab === 2 ? "active" : ""}`}
            onClick={() => handleTabClick(2)}
          >
            Other Sales
          </div>
          <div
            className={`tab-item ${activeTab === 3 ? "active" : ""}`}
            onClick={() => handleTabClick(3)}
          >
            Coffee Sales
          </div>
        </div>
        <div className="tab-content">
          {activeTab === 1 && <SalesInputs dispatch={dispatch} totalCash={cashSum} state={state} handleFocus={handleFocus} handleKeyPress={handleKeyPress} handleStringChange={hschange} handleTextboxChange={handleTextboxChange} />}
          {activeTab === 2 && <OtherInputs state={state} handleKeyPress={handleKeyPress} hschange={hschange} handleOtherFocus={handleOtherFocus} />}
          {activeTab === 3 && <CoffeeInputs handleOtherFocus={handleOtherFocus} coffeeReport={coffeeReport} setCoffeeReport={setCoffeeReport} formValues={formValues} setFormValues={setFormValues} />}
        </div>
      </div>

    </div>
  );
  
}

export default Sendreport;