'use client'
import { useState } from "react"

export default function StepTwo({originalValues, next, prev}) {
  const [selectedPlan, setPlan] = useState(originalValues.plan);
  const [timePlan, setTimePlan] = useState(originalValues?.period || "Monthly");
  const handleCheckbox = () => {
    timePlan === "Monthly" ? setTimePlan('Yearly') : setTimePlan('Monthly')
  }
  const handleClick = (option) => {
    setPlan(option)
  }
  const onSubmit = () => {
    if (selectedPlan.length > 2) {
      const planComplete = {    //creating object,which matches key values in my form object to export the info
        plan: selectedPlan,
        period: timePlan
      };
      console.log(planComplete);
      localStorage.setItem('stepTwo', JSON.stringify(planComplete))
      next();
    } else { alert('select plan ') }
  }
  
  
  return (
    <>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <article id="options-row">
        <section style={{ height: "50px", width: "50px", border: "3px solid green" }} className={selectedPlan === "Arcade" ? "activePlan" : "plan"} onClick={() => handleClick("Arcade")}>

          <h5>Arcade</h5>
          <p>$9/mo</p>
        </section>
        <section style={{ height: "50px", width: "50px", border: "3px solid green" }} className={selectedPlan === "Advanced" ? "activePlan" : "plan"} onClick={() => handleClick("Advanced")}>

          <h5>Advanced</h5>
          <p>$12/mo</p>
        </section>

        <section style={{ height: "50px", width: "50px", border: "3px solid green" }} className={selectedPlan === "Pro" ? "activePlan" : "plan"} onClick={() => handleClick("Pro")}>
          <h5>Pro</h5>
          <p>$15/mo</p>
        </section>

      </article>
      <article>



        <span>Monthly</span>
        <label><input type="checkbox" id="switch-check" onChange={handleCheckbox} value={timePlan} /><span className="slider"></span></label>
        <span>Yearly</span>
      </article>
      <div >
        <button id="back-one" onClick={()=>prev()} >Go Back</button>
        <button id="next-two" onClick={() => onSubmit()}>Next Step</button>
      </div>
    </>
  )
}
