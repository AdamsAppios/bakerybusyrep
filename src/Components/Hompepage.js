import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sendreport from "./Moonlitreports/Sendreport";
import Moneymain from "./MoneyCounter/Moneymain";
import GlorybeeMain from './Glorybee/GlorybeeMain';
import RefillingCcountmain from './RefillingCCTV/RefillingCcountmain'
import UserMain from './tutorial/reduxsample/UserMain';
import ContextApiSample from './tutorial/contextapi/ContextApiSample';
import FoundationPart1 from './FoundationExam/FoundationPart1';
import FoundationPart2 from './FoundationExam/FoundationPart2';
function Homepage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Please use another url</div>} />
        <Route path="/sendreport" element={<Sendreport />} />
        <Route path="/moneycount" element={<Moneymain />} />
        <Route path="/glorybee" element={<GlorybeeMain />} />
        <Route path="/refcccount" element={<RefillingCcountmain />} />
        <Route path="/tutorial" element={<ContextApiSample />} />
        <Route path="/foundationexampart1" element={<FoundationPart1 />} />
        <Route path="/foundationexampart2" element={<FoundationPart2 />} />

      </Routes>
    </Router>
  );
}

export default Homepage;