import {useState,useContext,createContext} from 'react'

const ruleModalContext=createContext();

const useRuleModalContext=()=>useContext(ruleModalContext);

const RuleModalProvider=({children})=>{
    const [isRulesDisplayed,setIsRulesDisplay]=useState(true);
    return(
        <ruleModalContext.Provider value={{isRulesDisplayed,setIsRulesDisplay}}>{children}</ruleModalContext.Provider>
    );
}

export {useRuleModalContext,RuleModalProvider}