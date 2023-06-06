'use client'
import StepOne from './step-1';
import StepTwo from './step-2';
import StepThree from './step-3';
import StepFour from './step-4';
import Thanks from './thanks';
import React, { useState, useEffect } from 'react';

export default function Form() {
    console.log('ParentComponent rendering');

    const [steps, setSteps] = useState(1)
    const [formInfo, setFormInfo] = useState(() => {
        const savedForm = localStorage.getItem('form');
        return savedForm ? JSON.parse(savedForm) : {
          fullName: '',
          email: '',
          tel: '',
          plan: '',
          period: '',
          onlineServices: '',
          largerStorage: '',
          customProfile: '',
        };
      });
    
      useEffect(() => {
        localStorage.setItem('form', JSON.stringify(formInfo));
      }, [formInfo]);
    
    const prevStep = () => {
        setSteps((prevStep) => prevStep - 1)
    };

    const nextStep = () => {
        setSteps((prevStep) => prevStep + 1)
    };

    const handleFormChange = (step) => {
        let update = localStorage.getItem(step);
        JSON.parse(update)
        console.log(update)
        setInfo((prevInfo) => ({ ...prevInfo, ...update }));
    }
    return (
        <section>
            {steps === 1 && (<StepOne change={handleFormChange} next={nextStep} originalValues={formInfo} />)}
            {steps === 2 && <StepTwo change={handleFormChange} next={nextStep} prev={prevStep} />}
            {steps === 3 && <StepThree change={handleFormChange} next={nextStep} prev={prevStep} />}
            {steps === 4 && <StepFour />}
            {steps === 5 && <Thanks />}
        </section>)

};