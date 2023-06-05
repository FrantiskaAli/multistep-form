'use client'
import StepOne from './step-1';
import StepTwo from './step-2';
import StepThree from './step-3';
import StepFour from './step-4';
import Thanks from './thanks';
import { useState } from 'react';

export default function Form() {
    const [formInfo, setInfo] = useState({
        step: 1,
        fullName: '',
        email: '',
        tel: '',
        plan: '',
        period: '',
        onlineServices: false,
        largerStorage: false,
        customProfile: false,
    })
    const prevStep = () => {
        setInfo({step: formInfo.step - 1});
    }
    const nextStep = () => {
        setInfo({step: formInfo.step + 1});
    };
    const handleFormChange = (values) => {
        setInfo((formInfo) => {
          return { ...formInfo, ...values };
        });
        console.log(formInfo)
      };
    switch (formInfo.step) {
        case 1:
            return (
                <StepOne change={handleFormChange} next={nextStep}/>
            )
        case 2:
            return (
                <StepTwo />
            )
        case 3:
            return (
                <StepThree />
            )
        case 4:
            return (
                <StepFour />)
        case 5:
            return (
                <Thanks />)
        default:
        // do nothing
    }
}