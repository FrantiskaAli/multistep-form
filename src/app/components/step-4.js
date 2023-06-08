import React, { useState } from 'react';


export default function StepFour({ originalValues, next, prev, toPlan }) {


  const info = originalValues ? originalValues : null



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
          price
        </section>
      </article>

      {info.onlineServices && <article>
        <p>Online Services</p>
        <p>price</p>
      </article>}
      {info.largerStorage  && <article>
        <p>Larger storage</p>
        <p>price</p>
      </article>}
      {info.customProfile && <article>
        <p>Custom Profile</p>
        <p>price</p>
      </article>}
      <article>
        <p>Total(per{info.period})</p>
        <p>+$price/{info.period}</p>
      </article>
      <article>
        <button id="back-one" onClick={() => prev()} >Go Back</button>
        <button id="next-two" onClick={() => next()}>Confirm</button>
      </article>
    </section>
  )
}
