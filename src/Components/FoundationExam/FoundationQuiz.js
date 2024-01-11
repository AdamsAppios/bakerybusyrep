import React, { useState } from 'react';

const FoundationQuiz = ({questionsData}) => {
  // Function to shuffle questions
  const shuffleQuestions = (questions) => {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    return questions;
  };

  const [questions, setQuestions] = useState([...questionsData]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [enableNext, setEnableNext] = useState(false);

  const totalQuestions = questions.length;
  const answeredQuestions = currentQuestionIndex;

  const indexToLetter = (index) => String.fromCharCode(97 + index);

  const handleOptionClick = (optionId) => {
    const isCorrect = optionId === questions[currentQuestionIndex].correctAnswerId;
    setIsAnswerCorrect(isCorrect);
    setShowAnswer(true);
    setEnableNext(isCorrect);
  };

  const handleNextQuestion = () => {
    setShowAnswer(false);
    setEnableNext(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleTryAgain = () => {
    setShowAnswer(false);
    setEnableNext(false);
  };

  if (currentQuestionIndex >= questions.length) {
    return (
      <div>
        <h2>Quiz Finished!</h2>
        <button onClick={() => setCurrentQuestionIndex(0)}>Restart Quiz</button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
    <h2><div dangerouslySetInnerHTML={{ __html: currentQuestion.questionText }} /></h2>
      <p>Question {answeredQuestions + 1} of {totalQuestions}</p>
      <div>
        {currentQuestion.options.map((option, index) => (
          <div key={option.id}>
            <button
              onClick={() => handleOptionClick(option.id)}
              disabled={showAnswer}
            >
              {option.id}. {option.optionText}
            </button>
            <br />
          </div>
        ))}
      </div>
      {showAnswer && (
        <div>
          <p style={{ color: isAnswerCorrect ? 'green' : 'red' }}>
            {isAnswerCorrect ? "✅ Correct!" : "❌ Incorrect!"}
            <br />
            Correct Answer: {currentQuestion.correctAnswerId}. {currentQuestion.options.find(option => option.id === currentQuestion.correctAnswerId).optionText}
          </p>
          {isAnswerCorrect ? 
            <button onClick={handleNextQuestion}>Next Question</button> : 
            <button onClick={handleTryAgain}>Try Again</button>
          }
        </div>
      )}
    </div>
  );
};

export default FoundationQuiz;
