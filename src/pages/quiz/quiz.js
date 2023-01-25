import React, { useState } from "react";
import { NavLink, useParams} from "react-router-dom";
import { Modal, Navbar } from "../../components/allComponents";
import { useRuleModalContext } from "../../context/ruleModal/ruleModalContext";
import { allCategoryQuestions } from "../../db/questons";
import "./quiz.css";
import { badge, trophy } from "../../images/allImages";

export const Quiz = () => {
  const { isRulesDisplayed } = useRuleModalContext();
  const { category,categoryName } = useParams();
  const [quesNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [confirmEvent, setConfirmEvent] = useState(null);
  const [confirmedClicked, setConfirmedClicked] = useState(false);
  const quizData = allCategoryQuestions[category];
  const [result, setResult] = useState(false);

  const incrementQuestionNUmber = () => {
    if (quizData[quesNumber].ans === userAnswer) setScore((prev) => prev + 10);
    if (quesNumber >= 4) {
      setResult(true);
    } else {
      setQuestionNumber((old) => old + 1);
    }

    setUserAnswer(null);
    setConfirmedClicked(false);
    setConfirmEvent(null);
  };

  const handleConfirm = () => {
    setConfirmedClicked(true);
    if (userAnswer === quizData[quesNumber].ans) {
      confirmEvent.target.classList.add("bg-green");
    } else {
      confirmEvent.target.classList.add("bg-red");
    }
  };

  const handleAnswerResponse = (element, event) => {
    setUserAnswer(element);
    setConfirmEvent(event);
  };

  return (
    <>
      <Navbar />
      <div
        className={
          isRulesDisplayed ? "quiz-body block-background" : "quiz-body"
        }
      >
        <div className="quiz-question">
          {/*<------- quiz questions ---->  */}

          {result ? (
            <div>
              <div className="result-title">
                <h1>Scores</h1> <img src={badge} alt="result badge" />
              </div>
              <div className="result-scores-heading">your scores are </div>
              <div className="result-scores">
                <p>{score}/50 </p> <img className="trophy" src={trophy} alt="result trophy" />
              </div>
              <NavLink to="/" >
              <button className="start-again-btn">Start Again</button>
              </NavLink>
            </div>
          ) : (
            <div className="ques-body">
              {" "}
              <h3 className="quiz-heading">{categoryName} Quiz</h3>
              <div className="ques-container">
                <div className="ques">
                  <span className="ques-number">
                    Ques {quesNumber + 1} : {quizData[quesNumber].ques}
                  </span>
                </div>

                <div
                  className="option-btns-container"
                  style={
                    confirmedClicked
                      ? { pointerEvents: "none" }
                      : { pointerEvents: "auto" }
                  }
                >
                  {quizData[quesNumber].options.map((element) => (
                    <div
                      key={element}
                      className={
                        confirmedClicked
                          ? quizData[quesNumber].ans === element
                            ? "bg-green-button"
                            : ""
                          : ""
                      }
                    >
                      <button
                        className={
                          userAnswer === null || userAnswer !== element
                            ? "option-btns"
                            : "option-btns selected-option"
                        }
                        onClick={(event) =>
                          handleAnswerResponse(element, event)
                        }
                      >
                        {element}
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  className="confirm-btn"
                  style={
                    userAnswer === null
                      ? { pointerEvents: "none", opacity: 0.5 }
                      : { pointerEvents: "auto", opacity: 1 }
                  }
                  onClick={handleConfirm}
                >
                  Confirm
                </button>
                <button
                  className="next-btn"
                  onClick={incrementQuestionNUmber}
                  style={
                    confirmedClicked
                      ? { pointerEvents: "auto", opacity: 1 }
                      : { pointerEvents: "none", opacity: 0.5 }
                  }
                >
                  {" "}
                  Next
                </button>
              </div>
            </div>
          )}

          <div>
            <div></div>
          </div>
        </div>
      </div>
      {/*<------- rule modal ---->  */}
      <div
        className="modal-container"
        style={isRulesDisplayed ? { display: "block" } : { display: "none" }}
      >
        <Modal />
      </div>
    </>
  );
};
