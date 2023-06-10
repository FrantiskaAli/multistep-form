'use client'
import React from 'react';



export default function StepFour({ oVal, next, prev, toPlan }) {

  const info = oVal;

  const arcade = 9
  const advanced = 12
  const pro = 15
  const onlineServices = 1;
  const largerStorage = 1;
  const customProfile = 2;
  let mainPrice = 0
  if (info.plan === "Arcade") {
    mainPrice = arcade
  } else if (info.plan === "Advanced") {
    mainPrice = advanced
  } else { mainPrice = pro }
  if (info.period === "Yearly") {
    mainPrice *= 10
  }
  let addOns = 0
  if (info.onlineServices) {
    addOns++
  }
  if (info.largerStorage) {
    addOns++
  }
  if (info.customProfile) {
    addOns +=2
  }
  if (info.period === "Yearly") {
    addOns *= 10
  }
  function confirm() {
    if (window !==undefined) { localStorage.clear(); }
    next()
  }


  return (
    <section id="summary" className='main-form'>
      <h1>Finishing up</h1>
      <h2>Double-check everything looks OK before confirming</h2>
      <article id="summary-plan" className="summary-choice">
        <section>
          <h3>{info.plan}({info.period})</h3>
          <p onClick={() => toPlan()}>Change</p>
        </section>
        <section id="plan-price-sum">
          ${mainPrice}/{info.period === "Monthly" ? "mo" : "yr"}
        </section>
      </article>
     
      {info.onlineServices && <article className="summary-choice">
        <p className="smaller">Online Services</p>
        <p className="add-on-sum-price smaller">{info.period === "Monthly" ? "+$1/mo" : "+$10/yr"}</p>
      </article>}
      {info.largerStorage && <article className="summary-choice">
        <p className="smaller">Larger storage</p>
        <p className="add-on-sum-price smaller">{info.period === "Monthly" ? "+$1/mo" : "+$10/yr"}</p>
      </article>}
      {info.customProfile && <article className="summary-choice">
        <p className="smaller">Custom Profile</p>
        <p className="add-on-sum-price smaller">{info.period === "Monthly" ? "+$2/mo" : "+$20/yr"}</p>
      </article>}

      <article id="sum-total">
        <p>Total (per {info.period === "Monthly" ? "month" : "year"})</p>
        <p id="total">+${mainPrice + addOns}/{info.period === "Monthly" ? "mo" : "yr"}</p>
      </article>
      <article className="btns-flex">
        <button id="back-one" className="btn-back" onClick={() => prev()} >Go Back</button>
        <button id="next-two" className="btn-next" onClick={() => confirm()}>Confirm</button>
      </article>
    </section>
  )
}
