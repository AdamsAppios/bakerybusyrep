import Bills from "./Bills";
import Coins from "./Coins";
import { useReducer, useState } from "react";
import { initialCoinsState, coinsReducer } from "./Reducers/Coinsreducer";
import { initialBillState, billreducer } from "./Reducers/Billreducers";

const Moneymain = () => {
  const [state, dispatch] = useReducer(coinsReducer, initialCoinsState);
  const [bstate, bdispatch] = useReducer(billreducer, initialBillState);
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <h1>Money Counter</h1>
      <div className="tabs">
        <div className="tab-header">
          <div
            className={`tab-item ${activeTab === 1 ? "active" : ""}`}
            onClick={() => handleTabClick(1)}
          >
            Money
          </div>
          <div
            className={`tab-item ${activeTab === 2 ? "active" : ""}`}
            onClick={() => handleTabClick(2)}
          >
            Coins
          </div>
        </div>
        <div className="tab-content">
          {activeTab === 1 && <Bills state={bstate} dispatch={bdispatch} />}
          {activeTab === 2 && <Coins state={state} dispatch={dispatch} /> }
        </div>
      </div>
    </div>

  );
};

export default Moneymain;
