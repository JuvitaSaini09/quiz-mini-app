import React,{useState} from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { Modal, Navbar} from "../../components/allComponents";
import { useRuleModalContext } from "../../context/ruleModal/ruleModalContext";
import {database} from "../../db/questons"
import "./quiz.css";
import {badge,trophy} from "../../images/allImages"

export const Quiz = () => {
  const {isRulesDisplayed }= useRuleModalContext();
  const { category } = useParams();
  const [quesNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);

  const quizData = database[category];
  const [result, setResult] = useState(false);

  const incrementQuestionNUmber = () => {
    if (quizData[quesNumber].ans === userAnswer) setScore((prev) => prev + 10);
    if (quesNumber >= 2) {
      setResult(true);
    } else {
      setQuestionNumber((old) => old + 1);
    }

    setUserAnswer(null)
  };
  
  const handleAnswerResponse = (e) => {
    setUserAnswer(e);
  };
  return (
    <>
    <Navbar />
    <div className="quiz-body">
      <div
        className={
          isRulesDisplayed ? "quiz-question block-background" : "quiz-question"
        }
      >
        
         {/*<------- quiz questions ---->  */}

         {result ? (
        <div>
          <div className="result-title"><h1>Scores</h1> <img src={badge} /></div>
          <div className="result-scores-heading">your scores are  </div> 
         <div className="result-scores">
         <p>{score}/50 </p> <img className="trophy" src={trophy} /> 
         </div>
          <button className="start-again-btn">Start Again</button>
        </div>
      ) : (
        <div className="ques-body">
          {" "}
          <h3 className="quiz-heading">
          Dash category Quiz
          </h3>
        
          <div className="ques-container">
            <div className="ques">
              <span className="ques-number">Ques {quesNumber + 1} :</span> {quizData[quesNumber].ques}
            </div>
            <div className="option-btns-container">
              {quizData[quesNumber].options.map((element) => (
                <button key={element} className="option-btns" onClick={() => handleAnswerResponse(element)}>
                  {element}
                </button>
              ))}
            </div>

            <button className="next-btn"
              onClick={incrementQuestionNUmber}
              style={
                userAnswer === null
                  ? { pointerEvents: "none", opacity: 0.5 }
                  : { pointerEvents: "auto", opacity: 1 }
              }
            >
              Next
            </button>
          </div>
        </div>
      )}



         <div>
           <div></div>
           
         </div>
      </div>

      {/*<------- rule modal ---->  */}
      <div
        className="modal-container"
        style={isRulesDisplayed ? { display: "block" } : { display: "none" }}
      >
        <Modal />
      </div>
    </div>
    </>
  );
};
