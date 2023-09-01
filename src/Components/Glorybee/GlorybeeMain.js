import React, {useState} from 'react';
import GloryExpensesMain from './Expenses/GloryExpensesMain';
import GlorySalesMain from './Sales/GlorySalesMain';
const GlorybeeMain = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [stringSales, setStringSales] = useState('');
  const [stringExpenses, setStringExpenses] = useState('');
  const defaultNames = ["Sales","1.5", "12oz", "C2", "Charda", "Cobra", "Coffee", "Drinks", "Gatorade", "Ice-cream", "Md", "Nss", "Nsb", "Swakto"];
  const getDefaultValues = () => {
    let defaultValues = {};
    defaultNames.forEach((name, index) => {
      defaultValues[`name${index}`] = name;
    });
    return defaultValues;
  };
  const initialInputBoxesSales = Array(defaultNames.length).fill().map((_, index) => ({ id: index + 1 }));
  const [inputBoxesSales, setInputBoxesSales] = useState(initialInputBoxesSales);
  const [valuesSales, setValuesSales] = useState(getDefaultValues());
  const [totalAmountSales, setTotalAmountSales] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <h1>Glory Bee</h1>
      <div className="tabs">
        <div className="tab-header">
          <div
            className={`tab-item ${activeTab === 1 ? "active" : ""}`}
            onClick={() => handleTabClick(1)}
          >
            Expenses
          </div>
          <div
            className={`tab-item ${activeTab === 2 ? "active" : ""}`}
            onClick={() => handleTabClick(2)}
          >
            Sales
          </div>
        </div>
        <div className="tab-content">
          {activeTab === 1 && <GloryExpensesMain stringExpenses={stringExpenses} setStringExpenses={setStringExpenses}  />}
          {activeTab === 2 && <GlorySalesMain stringSales={stringSales} setStringSales={setStringSales} defaultNames={defaultNames} initialInputBoxesSales={initialInputBoxesSales} inputBoxesSales={inputBoxesSales} setInputBoxesSales={setInputBoxesSales}
          valuesSales={valuesSales} setValuesSales={setValuesSales} totalAmountSales={totalAmountSales} setTotalAmountSales={setTotalAmountSales} getDefaultValues={getDefaultValues} />}
        </div>
      </div>
    </div>
  );
};

export default GlorybeeMain;