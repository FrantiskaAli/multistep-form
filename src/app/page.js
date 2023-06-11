'use client'
import Aside from './components/aside'
import StepOne from './components/step-1';
import StepTwo from './components/step-2';
import StepThree from './components/step-3';
import StepFour from './components/step-4';
import Thanks from './components/thanks';
import React, { useState, useEffect } from 'react';
import './page.module.css';


function Home() {
 
 //setting steps state, to be able to move around the form
  const [steps, setSteps] = useState(1);
  /*Using state for user input data */
  const [formInfo, setFormInfo] = useState({
    fullName: '',
    email: '',
    tel: '',
    plan: '',
    period: 'Monthly',
    onlineServices: false,
    largerStorage: false,
    customProfile: false,
  });
  /*Because children components cant set state for parent components I am using local storage to safe what happens in the step
  and then update form state, use effect work for firsly making sure window is defined and that effect changes after every tim local storage
  infromations changes*/
  
  
  const stepOneData = (typeof window !== "undefined") ? window.localStorage.getItem('stepOne') : {};
  const stepTwoData = (typeof window !== "undefined") ?  window.localStorage.getItem('stepTwo') : {};
  const stepThreeData = (typeof window !== "undefined") ?  window.localStorage.getItem('stepThree') : {};
  useEffect(() => {
    if (stepOneData) {
      const parsedData = JSON.parse(stepOneData);
      
      setFormInfo((prevFormInfo) => ({ ...prevFormInfo, ...parsedData }));
    }
    if (stepTwoData) {
      const parsedData = JSON.parse(stepTwoData);
      setFormInfo((prevFormInfo) => ({ ...prevFormInfo, ...parsedData }));
    }
    if (stepThreeData) {
      const parsedData = JSON.parse(stepThreeData);
      setFormInfo((prevFormInfo) => ({ ...prevFormInfo, ...parsedData }));
    }

  }, [stepOneData, stepTwoData,stepThreeData]);
//functions to move the steps
  const prevStep = () => {
    setSteps((prevStep) => prevStep - 1);
  };

  const toPlan =  () => {
    setSteps((prevStep) => prevStep - 2);
  };

  const nextStep = () => {
    setSteps((prevStep) => prevStep + 1);
  };

//displayed :
  return (
    <section id="main-section">
      <Aside step={steps}/>
      {steps === 1 && ( //using react if statement to show correct step
        <StepOne next={nextStep} originalValues={formInfo} />
      )}
      {steps === 2 && <StepTwo next={nextStep} prev={prevStep} originalValues={formInfo} />}
      {steps === 3 && <StepThree next={nextStep} prev={prevStep} oVal={formInfo} />}
      {steps === 4 && <StepFour toPlan={toPlan} next={nextStep} prev={prevStep} oVal={formInfo}/>}
      {steps === 5 && <Thanks />}
    </section>
  );
}
export default React.memo(Home);