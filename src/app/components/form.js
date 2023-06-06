'use client'
import StepOne from './step-1';
import StepTwo from './step-2';
import StepThree from './step-3';
import StepFour from './step-4';
import Thanks from './thanks';
import React, { useState, useCallback } from 'react';

const Form = () => {
    console.log('ParentComponent rendering');

    const [formInfo, setInfo] = useState({
        step: 1,
        fullName: '',
        email: '',
        tel: '',
        plan: '',
        period: '',
        onlineServices: "",
        largerStorage: "",
        customProfile: "",
    })
    const prevStep = useCallback(() => {
        setInfo((prevInfo) => ({ ...prevInfo, step: prevInfo.step - 1 }));
    }, []);

    const nextStep = useCallback(() => {
        setInfo((prevInfo) => ({ ...prevInfo, step: prevInfo.step + 1 }));
    }, []);

    const handleFormChange = useCallback((values) => {
        setInfo((prevInfo) => ({ ...prevInfo, ...values }));
    }, []);

    /*switch (formInfo.step) {
        case 1:
            return (
                <StepOne change={handleFormChange} next={nextStep} originalValues={formInfo}/>
            )
        case 2:
            return (
                <StepTwo change={handleFormChange} next={nextStep} prev={prevStep}/>
            )
        case 3:
            return (
                <StepThree change={handleFormChange} next={nextStep} prev={prevStep}/>
            )
        case 4:
            return (
                <StepFour />)
        case 5:
            return (
                <Thanks />)
        default:
            null
        // do nothing
    }*/
    return (
    <section>
        {formInfo.step === 1 && (
        <StepOne change={handleFormChange} next={nextStep} originalValues={formInfo} />
      )}
      {formInfo.step === 2 && <StepTwo change={handleFormChange} next={nextStep} prev={prevStep} />}
      {formInfo.step === 3 && <StepThree change={handleFormChange} next={nextStep} prev={prevStep} />}
      {formInfo.step === 4 && <StepFour />}
      {formInfo.step === 5 && <Thanks />}
    </section>)

};



export default Form