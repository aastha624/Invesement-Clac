//  here first export component function-- and id add using css folder and take id name
import { useState } from "react";


export default function Userinput() {
    const [userInput, setuserInput] = useState({
        initialInvestment: 10000,
        annualInvesetment: 1200,
        expectedReturn: 6,
        duration: 10,

    });
    // create generatic function

    function handlechange(inputindentifier, newvalue) {
        setuserInput(prevuserInput => {
            return {
                ...prevuserInput,
                [inputindentifier]: newvalue
            };
        })
    }
    return <section id="user-input">
        <div classname="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" required
                    value={userInput.initialInvestment}
                    onChange={(event) => handlechange(' initialInvestment', event.target.value)
                    } />
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required
                    value={userInput.annualInvesetment}
                    onChange={(event) => handlechange('annualInvesetment', event.target.value)
                    } />
              
            </p>
        </div>
        <div classname="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required
                    value={userInput.expectedReturn}
                    onChange={(event) => handlechange('expectedReturn', event.target.value)
                    } />
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required
                    value={userInput.duration}
                    onChange={(event) => handlechange(' duration', event.target.value)
                    } />
            </p>
        </div>
    </section>
}