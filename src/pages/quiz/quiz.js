import React from "react";
import { Modal } from "../../components/allComponents";
import { useRuleModalContext } from "../../context/ruleModal/ruleModalContext";

import "./quiz.css";

export const Quiz = () => {
  const {isRulesDisplayed }= useRuleModalContext();
  return (
    <div className="quiz-body">
      <div
        className={
          isRulesDisplayed ? "quiz-question block-background" : "quiz-question"
        }
      >
        <h1 className="quiz-heading">Quiz</h1>
         {/*<------- quiz questions ---->  */}
      </div>

{/*<------- rule modal ---->  */}
      <div
        className="modal-container"
        style={isRulesDisplayed ? { display: "block" } : { display: "none" }}
      >
        <Modal />
      </div>
    </div>
  );
};
