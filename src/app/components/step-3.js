'use client';
import { useState } from "react";

export default function StepThree({ change, next, prev }) {

  const [addOns, setAddOns] = useState(
    {
      onlineServices: false,
      largerStorage: false,
      customProfile: false
    }
  )

  const handleCheckbox = (option) => {
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
    console.log(addOnsComplete);
    change(addOnsComplete);
    next()
  }

  return (
    <section>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      <article>
        <div >
          <section >
            <input type="checkbox" name="online-services" id="online-services" checked={addOns.onlineServices} onChange={() => handleCheckbox("onlineServices")} />
            <label htmlFor="online-services">
              <h3>Online service</h3>
              <p>Access to multiplayer games</p>
            </label>
          </section>
          <h6>+$1/mo</h6>

        </div>
        <div>
          <section>
            <input type="checkbox" name="extra-storage" id="extra-storage" checked={addOns.largerStorage} onChange={() => handleCheckbox("largerStorage")} />
            <label htmlFor="extra-storage">
              <h3>Extra storage</h3>
              <p>Extra 1TB of cloud save</p>
            </label>
          </section>
          <h6>+$2/mo</h6>
        </div>
        <div>
          <section>
            <input type="checkbox" name="custom-profile" id="custom-profile" checked={addOns.customProfile} onChange={() => handleCheckbox("customProfile")} />
            <label htmlFor="custom-profile">
              <h3>Customizable Profile</h3>
              <p>Custom theme your profile</p>
            </label>
          </section>
          <h6>+$2/mo</h6>
        </div>
      </article>
      <div>
        <button onClick={() => prev()}>Go Back</button>
        <button onClick={() => onSubmit()}>Next Step</button>
      </div>
    </section>
  )
}
