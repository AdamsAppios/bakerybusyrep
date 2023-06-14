import React, { useReducer } from "react";
import ResetBills from "./ResetBills";
import Billstextbox from "./Helperfunctions/Billstextbox";
const Bills = ({ state, dispatch }) => {
  const sumCash = (state) => {
    let sumAmount = 0;
    for (var key in state) {
      if (state.hasOwnProperty(key) && key != "totalCash") {
        sumAmount += parseInt(key.match(/\d+/)[0]) * state[key];
      }
    }
    return sumAmount;
  };

  return (
    <div>
      <table>
        <Billstextbox moneyval="1" handleChange={dispatch} state={state} />
        <Billstextbox moneyval="5" handleChange={dispatch} state={state} />
        <Billstextbox moneyval="10" handleChange={dispatch} state={state} />
        <Billstextbox moneyval="20" handleChange={dispatch} state={state} />
        <Billstextbox moneyval="50" handleChange={dispatch} state={state} />
        <Billstextbox moneyval="100" handleChange={dispatch} state={state} />
        <Billstextbox moneyval="200" handleChange={dispatch} state={state} />
        <Billstextbox moneyval="500" handleChange={dispatch} state={state} />
        <Billstextbox moneyval="1000" handleChange={dispatch} state={state} />
      </table>
      <br />
      <nav class="navbar fixed-bottom navbar-light bg-light">
        <div id="displayTotal">Total (pesos) : {sumCash(state)}</div>
        <ResetBills state={state} dispatch={dispatch} />
      </nav>
    </div>
  );
};

export default Bills;
