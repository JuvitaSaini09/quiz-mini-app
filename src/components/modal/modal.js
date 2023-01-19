import React from 'react'
import { useRuleModalContext } from '../../context/ruleModal/ruleModalContext';

import "./modal.css"
export const Modal=()=> {
  const {setIsRulesDisplay} = useRuleModalContext();
  return (
    <div className="rule-modal" >
        <h1 className="rule-modal-heading">Rules</h1>
        <ul>
            <li>Thier are total 5 question.</li>
            <li>you will get 10 scores for each right answer</li>
            <li>Result will be shown after answering 5 questions.</li>
            <li>Good luck for the quiz .</li>
        </ul>
        <button className="rule-ok-btn" onClick={()=>setIsRulesDisplay(false)}>OK</button>
    </div>
  )
}

