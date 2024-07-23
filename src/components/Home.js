import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";

const Home = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [selectedAnswerErr, setSelectedAnswerErr] = useState(false);
  const [selectedAnswerErrText, setSelectedAnswerErrText] = useState('');
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showNextQuation, setShowNextQuation] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
      const data = await response.json();
      setQuestions(data.results);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
    setSelectedAnswerErr(false);
  };

  const validation = () => {
    if (!selectedAnswer) {
      setSelectedAnswerErr(true);
      setSelectedAnswerErrText('Please select an answer before submitting.');
      return false;
    }
    return true;
  };

  const handleSubmitAnswer = () => {
    if (validation()) {
      const currentQuestion = questions[currentQuestionIndex];
      if (selectedAnswer === currentQuestion.correct_answer) {
        setCorrectAnswers(correctAnswers + 1);
      }
      if (currentQuestionIndex === questions.length - 1) {
        setShowResult(true);
      } else {
        setShowNextQuation(true);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
      setShowNextQuation(false);
    }
  };

  const handleShowResult = () => {
    history.push('/resulte', {
      totalQuestions: questions.length,
      correctAnswers,
      incorrectAnswers: questions.length - correctAnswers
    })

    console.log('Game Over! Show results:', {
      totalQuestions: questions.length,
      correctAnswers,
      incorrectAnswers: questions.length - correctAnswers
    });

  };

  if (!questions || questions.length === 0) {
    return <ProgressBar mode="indeterminate" />;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const questionNumber = currentQuestionIndex + 1;

  return (
    <div className="container mx-auto mt-4 vh-100">
      <h1 className="text-center mb-3">Quiz Game</h1>
      <div className="card quiz-card" style={{ maxWidth: '80%', margin: '0 auto', border: '1px solid black' }}>
        <div className="card-body">
          <div className="question">
            <h3>{questionNumber}. {currentQuestion.question}</h3>
          </div>
          <hr />
          <div className="options">
            {[...currentQuestion.incorrect_answers, currentQuestion.correct_answer].sort().map((option, index) => {
              const isCorrect = option === currentQuestion.correct_answer;
              const isSelected = selectedAnswer === option;

              return (
                <div key={index} className=''>
                  <input
                    type="radio"
                    id={`option${index}`}
                    name="answer"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={() => handleAnswerSelection(option)}
                    disabled={showResult || showNextQuation}
                  />
                  <label htmlFor={`option${index}`} className="ml-2">{option}</label>
                  {showResult || showNextQuation ? (
                    <span className="ml-2">
                      {isCorrect ? <span className="text-success">&#10004;</span> : isSelected ? <span className="text-danger">&#10008;</span> : null}
                    </span>
                  ) : null}
                </div>
              );
            })}
          </div>
          {selectedAnswerErr && (
            <div className="text-danger mt-2">{selectedAnswerErrText}</div>
          )}
          <div className="container">
            <div className="mt-3 d-flex justify-content-between align-items-center">
              <div>
                <Button
                  label="Submit Answer"
                  onClick={handleSubmitAnswer}
                  className="btn btn-primary"
                  style={{ marginRight: '10px' }}
                />
                {showNextQuation && (
                  <Button
                    label="Next Question"
                    onClick={handleNextQuestion}
                    className="btn btn-primary"
                  />
                )}
                {showResult && (
                  <Button
                    label="Show Result"
                    onClick={handleShowResult}
                    className="btn btn-primary"
                    style={{ marginRight: '10px' }}
                  />
                )}
              </div>
              <div className="">
                <h6>{questionNumber}/{questions.length}</h6>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
