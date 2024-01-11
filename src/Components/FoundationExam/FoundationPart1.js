import React from 'react';
import { Link } from 'react-router-dom';
import FoundationQuiz from './FoundationQuiz';
import questionsData from './subfolder/questions';

const FoundationPart1 = () => {
    return (
        <div>
            <nav>
                <Link to="/foundationexampart1">Foundation Exam Part 1</Link>
                <Link to="/foundationexampart2" style={{ marginLeft: '10px' }}>Foundation Exam Part 2</Link>
            </nav>
            <h1>Foundation Exam Part 1</h1>
            <FoundationQuiz questionsData={questionsData} />
        </div>
    );
};
  
export default FoundationPart1;

  