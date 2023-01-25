import React from 'react'
import { useRuleModalContext } from '../../context/ruleModal/ruleModalContext';

import "./modal.css"
export const Modal=()=> {
  const {setIsRulesDisplay} = useRuleModalContext();
  return (
    <div className="rule-modal-body">
      <div className="rule-modal" >
        <h1 className="rule-modal-heading">Rules</h1>
        <ul>
            <li>Thier are total 5 question.</li>
            <li>you will get 10 scores for each right answer</li>
            <li>You have select one option and then click on "confirm" button.</li>
            <li>You can not select options after clicking on confirm button</li>
            <li>Result will be shown after answering 5 questions.</li>
        </ul>
        <button className="rule-ok-btn" onClick={()=>setIsRulesDisplay(false)}>OK</button>
    </div>
    </div>
  )
}

