import { createContext, useState } from "react";
import run from "../config/gemini";


const Context = createContext ();

const ContextProvider = (props) => {

  const [input,setInput] = useState("");
  const [recetPrompt,setRecentPrompt] = useState("");
  const[prevPrompt,setPrevPrompt]= useState([]);
  const [showResult,setShowResult] = useState(false);
  const[loading,setLoading] = useState(false);
  const[resultData,setResultData] = useState("");

  const onSent = async (prompt) => {
    await run(prompt)
  }

 
  const contextValue = {

  }

  return(
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider