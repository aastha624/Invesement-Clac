//  here first export component function-- and id add using css folder and take id name



export default function Userinput({onChange , userInput}) {
   
    // create generatic function

    
    return <section id="user-input">
        <div classname="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" required
                    value={userInput.initialInvestment}
                    onChange={(event) => onChange(' initialInvestment', event.target.value)
                    } />
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required
                    value={userInput.annualInvesetment}
                    onChange={(event) => onChange('annualInvesetment', event.target.value)
                    } />
              
            </p>
        </div>
        <div classname="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required
                    value={userInput.expectedReturn}
                    onChange={(event) => onChange('expectedReturn', event.target.value)
                    } />
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required
                    value={userInput.duration}
                    onChange={(event) => onChange(' duration', event.target.value)
                    } />
            </p>
        </div>
    </section>
}