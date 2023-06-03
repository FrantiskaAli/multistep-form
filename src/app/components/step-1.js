

export default function StepOne({change, next}) {
  return (
    <>
    <h1>Personal info</h1>
    
    <h2>Please provide your name, email address, and phone number.</h2>
    
    <section><label for='name'>Name</label></section>
    <input type='text' id='name' name='name' placeholder="e.g. Stephen King" onChange={change}/>

    <section><label for='email'>Email address</label></section>
    <input type='text' id='email' name='email' placeholder="  e.g. stephenking@lorem.com" onChange={change} />

    <section><label for='tel'>Phone Number</label></section>
    <input type='text' id='tel' name='tel' placeholder="e.g. +1 234 567 890" onChange={change}/>
  
    <button onClick={next} >Next step</button>
    
    </>
  )
}
