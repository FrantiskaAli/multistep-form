'use client';
import { useState } from "react";

export default function StepThree({ oVal, next, prev }) {

  const [addOns, setAddOns] = useState(//setting state from parent component
    {
      onlineServices: oVal.onlineServices? true : false,
      largerStorage: oVal.largerStorage? true : false,
      customProfile: oVal.customProfile? true : false,
    }
  )

  const handleCheckbox = (option) => {//updating options state
    setAddOns((prevAddOns) => ({
      ...prevAddOns,
      [option]: !prevAddOns[option],
    }));
  };

  const onSubmit = () => {
    const addOnsComplete = {    //creating object,which matches key values in my form object to export the info
      onlineServices: addOns.onlineServices,
      largerStorage: addOns.largerStorage,
      customProfile: addOns.customProfile
    };
    if (typeof window !== "undefined"){window.localStorage.setItem('stepThree', JSON.stringify(addOnsComplete))}
    next()
  }

  return (
    <section id="step-3" className="main-form" >
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <article id="add-ons">
        <section className={addOns.onlineServices ? "add-on active" : "add-on"} >
          <article className="addon-inside">
            <input type="checkbox" className="custom-checkbox" name="online-services" id="online-services" checked={addOns.onlineServices} onChange={() => handleCheckbox("onlineServices")} />
            <label className="label-addOns" htmlFor="online-services">
              <h3>Online service</h3>
              <p>Access to multiplayer games</p>
            </label>
          </article>
          <h6>{oVal.period === "Monthly"? "+$1/mo" : "+$10/yr"}</h6>

        </section>
        <section className={addOns.largerStorage? "add-on active" : "add-on"} >
          <article className="addon-inside">
            <input type="checkbox" className="custom-checkbox" name="extra-storage" id="extra-storage" checked={addOns.largerStorage} onChange={() => handleCheckbox("largerStorage")} />
            <label htmlFor="extra-storage" className="label-addOns" >
              <h3>Extra storage</h3>
              <p>Extra 1TB of cloud save</p>
            </label>
          </article>
          <h6>{oVal.period === "Monthly" ? "+$2/mo" : "+$20/yr"}</h6>
        </section>
        <section className={addOns.customProfile ? "add-on active" : "add-on"} >
          <article className="addon-inside">
            <input type="checkbox" className="custom-checkbox" name="custom-profile" id="custom-profile" checked={addOns.customProfile} onChange={() => handleCheckbox("customProfile")} />
            <label htmlFor="custom-profile" className="label-addOns" >
              <h3>Customizable Profile</h3>
              <p>Custom theme your profile</p>
            </label>
          </article>
          <h6>{oVal.period === "Monthly"? "+$2/mo" : "+$20/yr"}</h6>
        </section>
      </article>
      <article className="btns-flex">
        <button className="btn-back" onClick={() => prev()}>Go Back</button>
        <button className="btn-next" onClick={() => onSubmit()}>Next Step</button>
      </article>
    </section>
  )
}
