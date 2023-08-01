import React, {useState} from 'react';
import GloryExpensesMain from './Expenses/GloryExpensesMain';
import GlorySalesMain from './Sales/GlorySalesMain';
const GlorybeeMain = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleEraseAll = () => {
    console.log("Erase All");
  }

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <h1>Hello, Glorybee!</h1>
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
          {activeTab === 1 && <GloryExpensesMain />}
          {activeTab === 2 && <GlorySalesMain />}
        </div>
      </div>
    </div>
  );
};

export default GlorybeeMain;