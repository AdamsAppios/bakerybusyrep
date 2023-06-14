import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sendreport from "./Moonlitreports/Sendreport";
import Moneymain from "./MoneyCounter/Moneymain";
function Homepage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Please use another url</div>} />
        <Route path="/sendreport" element={<Sendreport />} />
        <Route path="/moneycount" element={<Moneymain />} />
      </Routes>
    </Router>
  );
}

export default Homepage;