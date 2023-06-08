'use client'
import StepOne from './step-1';
import StepTwo from './step-2';
import StepThree from './step-3';
import StepFour from './step-4';
import Thanks from './thanks';
import React, { useState, useEffect } from 'react';

const Form = React.memo(() => {
  const [steps, setSteps] = useState(1);
  const [formInfo, setFormInfo] = useState({
    fullName: '',
    email: '',
    tel: '',
    plan: '',
    period:'monthly',
    onlineServices: false,
    largerStorage: false,
    customProfile: false,
  });

  useEffect(() => {
    const stepOneData = localStorage.getItem('stepOne');
    const stepTwoData = localStorage.getItem('stepTwo');
    const stepThreeData = localStorage.getItem('stepThree');
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

  }, []);

  const prevStep = () => {
    setSteps((prevStep) => prevStep - 1);
  };

  const toPlan =  () => {
    setSteps((prevStep) => prevStep - 2);
  };

  const nextStep = () => {
    setSteps((prevStep) => prevStep + 1);
  };


  return (
    <section>
      {steps === 1 && (
        <StepOne next={nextStep} originalValues={formInfo} />
      )}
      {steps === 2 && <StepTwo next={nextStep} prev={prevStep} originalValues={formInfo} />}
      {steps === 3 && <StepThree next={nextStep} prev={prevStep} oVal={formInfo} />}
      {steps === 4 && <StepFour toPlan={toPlan} next={nextStep} prev={prevStep} originalValues={formInfo}/>}
      {steps === 5 && <Thanks />}
    </section>
  );
});

export default Form;
