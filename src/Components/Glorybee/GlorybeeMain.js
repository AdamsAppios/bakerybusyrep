import React, { useReducer} from 'react';
import GloryExpensesMain from './Expenses/GloryExpensesMain';
import GlorySalesMain from './Sales/GlorySalesMain';
import { reducer, initialState } from './reducer/glorybeereducer';
const GlorybeeMain = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleTabClick = (tabIndex) => {
    dispatch({type:'SET_ACTIVE_TAB', payload:tabIndex })
  };

  return (
    <div>
      <h1>Glory Bee</h1>
      <div className="tabs">
        <div className="tab-header">
          <div
            className={`tab-item ${state.activeTab === 1 ? "active" : ""}`}
            onClick={() => handleTabClick(1)}
          >
            Expenses
          </div>
          <div
            className={`tab-item ${state.activeTab === 2 ? "active" : ""}`}
            onClick={() => handleTabClick(2)}
          >
            Sales
          </div>
        </div>
        <div className="tab-content">
          {state.activeTab === 1 && <GloryExpensesMain state={state} dispatch={dispatch} />}
          {state.activeTab === 2 && <GlorySalesMain state={state} dispatch={dispatch} />}
        </div>
      </div>
    </div>
  );
};

export default GlorybeeMain;