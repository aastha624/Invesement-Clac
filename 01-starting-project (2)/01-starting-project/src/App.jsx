import { useState } from "react";
import Header from "./component/Header.jsx"
import Userinput from "./component/Userinput.jsx"
import Result from "./component/Result.jsx";
function App() {
// it is called lifting state up
  const [userInput, setuserInput] = useState({
    initialInvestment: 10000,
    annualInvesetment: 1200,
    expectedReturn: 6,
    duration: 10,

});

function handlechange(inputindentifier, newvalue) {
  setuserInput(prevuserInput => {
      return {
          ...prevuserInput,
          [inputindentifier]: newvalue
      };
  })
}

  return (
    <>

    <Header/> 
    <Userinput   userInput={userInput} onChange={handlechange}/>
    <Result input={userInput}/>
    </>
    // custom header component
  )
}

export default App
