import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import questionsData2 from './subfolder/questions2';
import FoundationQuiz from './FoundationQuiz';

const FoundationPart2 = () => {
    return (
        <div>
            <nav>
                <Link to="/foundationexampart1">Foundation Exam Part 1</Link>
                <Link to="/foundationexampart2" style={{ marginLeft: '10px' }}>Foundation Exam Part 2</Link>
            </nav>
            <h1>Foundation Exam Part 2</h1>
            <FoundationQuiz questionsData={questionsData2} />
        </div>
    )
};
  
  export default FoundationPart2;