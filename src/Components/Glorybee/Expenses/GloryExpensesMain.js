import React, {useState} from 'react';
import Copytoclipboard from '../../Moonlitreports/Helpers/Copytoclipboard';
import ExpensesText from './ExpensesText';
const GloryExpensesMain = () => {
  const [stringReport, setStringReport] = useState('');
  const [stringExpenses, setStringExpenses] = useState('');

  const handleEraseAll = () => {
    console.log("Erase All");
  }

  const handleExpenses = () => {
    console.log("Erase All");
  }
  return (
    <div>
        <h1>Glory Bee Expenses</h1>
        <ExpensesText />
    </div>
  );
};

export default GloryExpensesMain;