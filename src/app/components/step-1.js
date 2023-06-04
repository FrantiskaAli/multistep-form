'use client'

export default function StepOne({change, next}) {
function handleClick(){
  const email = document.getElementById('email');
const name =document.getElementById('name');
const number =document.getElementById('tel');
let moveOn = 0
const personalInfo = [email, name, number];
//this for loop inside click on function makes sure user is alerted if input is empty
for (let i=0; i< personalInfo.length; i++){
  const input = personalInfo[i]
  switch(input){
    case 'name':
      if (!name.value){
        console.log('please enter your name')
      } else moveOn++;
      break;
      case 'email':
        const emailValue = email.value
        let re = new RegExp();
        re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(emailValue)) {
          console.log('please enter ur email')} else moveOn++;
      break;
      case 'number':
        const tel = number.value;
        let reg = new RegExp();
        reg =/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
        if(!reg.test(tel)){
          console.log('please enter valid phone number')
        }else moveOn++;
      break;
      default:
  }

}

if( moveOn == 3){
  next()
}
}


  return (
    <>
    <h1>Personal info</h1>
    
    <h2>Please provide your name, email address, and phone number.</h2>
    
    <section><label htmlFor='name'>Name</label></section>
    <input type='text' id='name' name='name' placeholder="e.g. Stephen King" onChange={change}/>

    <section><label htmlFor='email'>Email address</label></section>
    <input type='text' id='email' name='email' placeholder="  e.g. stephenking@lorem.com" onChange={change} />

    <section><label htmlFor='tel'>Phone Number</label></section>
    <input type='text' id='tel' name='tel' placeholder="e.g. +1 234 567 890" onChange={change}/>
  
    <button onClick={()=>handleClick()} >Next step</button>
    
    </>
  )
}
