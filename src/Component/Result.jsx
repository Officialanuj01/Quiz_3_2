import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Quiz.css';


const CustomResult = (props) => {
  const [showResultDetails, setShowResultDetails] = useState(true);
  const { score, totalQuestions, attemptedQuestions, correctAnswers, wrongAnswers } = props;

  return (
    <>
      {showResultDetails ? (
        <div>
          <h2 className="custom-result">Result</h2>
          <div className="custom-result-box">
            <p className="custom-tagline">Your score is {score}</p>
            <div className="custom-details-box">
              <p className="custom-details">Total no. of questions</p>
              <p className="custom-score"><b>{totalQuestions}</b></p>
              <p className="custom-details">Number of attempted questions</p>
              <p className="custom-score"><b>{attemptedQuestions}</b></p>
              <p className="custom-details">Number of correct answers</p>
              <p className="custom-score"><b>{correctAnswers}</b></p>
              <p className="custom-details">Number of wrong answers</p>
              <p className="custom-score"><b>{wrongAnswers}</b></p>
            </div>
            <div>
              <button className="custom-functional-btn" onClick={() => setShowResultDetails(false)}>Play Again</button>
              <Link to="/">
                <button className="custom-functional-btn">Back to home</button>
              </Link>
            </div>
          </div>
        </div>
      ) :
        (<div>
          <CustomMain />
        </div>)
      }
    </>
  );
};

export default CustomResult;
