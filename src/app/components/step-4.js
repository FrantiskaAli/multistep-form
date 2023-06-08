'use client'
import React, { useState, useEffect } from 'react';



export default function StepFour({ oVal, next, prev, toPlan }) {

  const info = oVal;

  const arcade = 9
  const advanced = 12
  const pro = 15
  const onlineServices = 1;
  const largerStorage = 1;
  const customProfile =2;
let mainPrice = 0
if (info.plan === "Arcade"){
  mainPrice = arcade
} else if (info.plan === "Advanced"){
  mainPrice = advanced
} else { mainPrice = pro}
if (info.period === "Yearly"){
  mainPrice *= 10
}
let addOns = 0
if (info.onlineServices){
  addOns++}
if (info.largerStorage){
  addOns++}
if(info.customProfile) {
  addOns
}
if (info.period === "Yearly"){
  addOns *= 10
}
function confirm (){
 if(window){ localStorage.clear();}
  next()
}


  return (
    <section>
      <h1>Finishing up</h1>
      <h2>Double-check everything looks OK before confirming</h2>
      <article>
        <section>
          <h3>{info.plan}({info.period})</h3>
          <p onClick={() => toPlan()}>Change</p>
        </section>
        <section>
          {mainPrice}
        </section>
      </article>

      {info.onlineServices && <article>
        <p>Online Services</p>
        <p>{info.period === "Monthly"? "+$1/mo" : "+$10/yr"}</p>
      </article>}
      {info.largerStorage  && <article>
        <p>Larger storage</p>
        <p>{info.period === "Monthly"? "+$1/mo" : "+$10/yr"}</p>
      </article>}
      {info.customProfile && <article>
        <p>Custom Profile</p>
        <p>{info.period === "Monthly"? "+$2/mo" : "+$20/yr"}</p>
      </article>}
      <article>
        <p>Total(per{info.period})</p>
        <p>+${mainPrice + addOns}/{info.period === "Monthly"? "mo" : "yr"}</p>
      </article>
      <article>
        <button id="back-one" onClick={() => prev()} >Go Back</button>
        <button id="next-two" onClick={() => confirm()}>Confirm</button>
      </article>
    </section>
  )
}
