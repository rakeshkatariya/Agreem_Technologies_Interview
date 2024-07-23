
import React from 'react';
import { useLocation } from 'react-router-dom';


const Resulte = () => {
  const location = useLocation();
  const { totalQuestions = 0, correctAnswers = 0, incorrectAnswers = 0 } = location.state || {};
  const percentage = totalQuestions === 0 ? 0 : ((correctAnswers / totalQuestions) * 100).toFixed(2);


  return (
    <div className="container mx-auto mt-4 vh-100">
      <div className="card shadow">
        <div className="card-body">
          <h1 className='card-title'>Quiz Results</h1>
          <hr />
          <p><span style={{ fontWeight: 'bold' }}>Total Questions:</span> {totalQuestions}</p>
          <p><span style={{ fontWeight: 'bold' }}> Correct Answers:</span> {correctAnswers}</p>
          <p><span style={{ fontWeight: 'bold' }}> Incorrect Answers:</span> {incorrectAnswers}</p>
          <p><span style={{ fontWeight: 'bold' }}> Percentage:</span> {percentage}%</p>
        </div>
      </div>
    </div>
  );
}

export default Resulte;




